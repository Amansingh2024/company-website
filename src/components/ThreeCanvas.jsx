import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sun, Layers, Eye, Sparkles, Box, Check } from 'lucide-react';
import { playClick, playHover } from '../utils/audio';

export default function ThreeCanvas({ initialModel = 'bed' }) {
  const mountRef = useRef(null);
  const [modelType, setModelType] = useState(initialModel);
  const [materialPreset, setMaterialPreset] = useState('sheesham');
  const [lightingPreset, setLightingPreset] = useState('warm');
  const [autoRotate, setAutoRotate] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const currentModelGroup = useRef(null);
  const lightsGroup = useRef(null);
  const reqIdRef = useRef(null);
  const isDraggingRef = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const rotationVelocity = useRef({ x: 0, y: 0.005 });

  // Material definitions
  const getMaterials = (preset) => {
    const loader = new THREE.TextureLoader();
    
    // Procedural noise/grain canvas
    const createWoodTexture = (baseColor, darkColor) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, 512, 512);

      // Add grain streaks
      ctx.fillStyle = darkColor;
      for (let i = 0; i < 600; i++) {
        const y = Math.random() * 512;
        const h = Math.random() * 3 + 1;
        ctx.globalAlpha = Math.random() * 0.25;
        ctx.fillRect(0, y, 512, h);
      }
      ctx.globalAlpha = 1.0;
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    let woodColor = 0x5c3317;
    let woodRoughness = 0.35;
    let fabricColor = 0x223a34;
    let fabricRoughness = 0.85;
    let metalColor = 0xd4af37;

    if (preset === 'sheesham') {
      woodColor = 0x4a2411; // Rich deep Sheesham
      woodRoughness = 0.3;
      fabricColor = 0xf0e6d2; // Cream linen
    } else if (preset === 'teak') {
      woodColor = 0x8a5229; // Golden Burma Teak
      woodRoughness = 0.38;
      fabricColor = 0x1f3438; // Deep teal
    } else if (preset === 'emerald') {
      woodColor = 0x2e1810;
      fabricColor = 0x175c4c; // Jewel emerald velvet
      fabricRoughness = 0.95;
    } else if (preset === 'leather') {
      woodColor = 0x361f12;
      fabricColor = 0x783e19; // Cognac saddle leather
      fabricRoughness = 0.45;
    }

    const woodTex = createWoodTexture(
      preset === 'teak' ? '#965a2a' : '#4f230e',
      preset === 'teak' ? '#693e18' : '#290f05'
    );

    const woodMat = new THREE.MeshStandardMaterial({
      color: woodColor,
      map: woodTex,
      roughness: woodRoughness,
      metalness: 0.08,
      wireframe: wireframe
    });

    const fabricMat = new THREE.MeshStandardMaterial({
      color: fabricColor,
      roughness: fabricRoughness,
      metalness: 0.02,
      wireframe: wireframe
    });

    const brassMat = new THREE.MeshStandardMaterial({
      color: metalColor,
      roughness: 0.25,
      metalness: 0.9,
      wireframe: wireframe
    });

    const whiteMat = new THREE.MeshStandardMaterial({
      color: 0xf5f3ee,
      roughness: 0.9,
      metalness: 0.0,
      wireframe: wireframe
    });

    return { woodMat, fabricMat, brassMat, whiteMat };
  };

  // Build Procedural 3D Bed
  const buildBedModel = (materials) => {
    const group = new THREE.Group();

    // 1. Bed Frame / Base
    const frameGeo = new THREE.BoxGeometry(3.6, 0.4, 4.4);
    const frameMesh = new THREE.Mesh(frameGeo, materials.woodMat);
    frameMesh.position.y = 0.4;
    frameMesh.castShadow = true;
    frameMesh.receiveShadow = true;
    group.add(frameMesh);

    // 2. Brass Plinth trim
    const trimGeo = new THREE.BoxGeometry(3.64, 0.06, 4.44);
    const trimMesh = new THREE.Mesh(trimGeo, materials.brassMat);
    trimMesh.position.y = 0.22;
    group.add(trimMesh);

    // 3. Mattress
    const mattressGeo = new THREE.BoxGeometry(3.3, 0.5, 4.1);
    const mattressMesh = new THREE.Mesh(mattressGeo, materials.whiteMat);
    mattressMesh.position.y = 0.85;
    mattressMesh.castShadow = true;
    mattressMesh.receiveShadow = true;
    group.add(mattressMesh);

    // 4. Headboard
    const headboardGeo = new THREE.BoxGeometry(3.8, 2.2, 0.35);
    const headboardMesh = new THREE.Mesh(headboardGeo, materials.fabricMat);
    headboardMesh.position.set(0, 1.5, -2.1);
    headboardMesh.castShadow = true;
    group.add(headboardMesh);

    // Headboard Wooden Arch Outer Frame
    const archGeo = new THREE.BoxGeometry(3.96, 2.36, 0.3);
    const archMesh = new THREE.Mesh(archGeo, materials.woodMat);
    archMesh.position.set(0, 1.5, -2.16);
    group.add(archMesh);

    // Brass Inlay Accent on Headboard
    const inlayGeo = new THREE.BoxGeometry(3.5, 0.04, 0.38);
    const inlayMesh = new THREE.Mesh(inlayGeo, materials.brassMat);
    inlayMesh.position.set(0, 2.3, -2.08);
    group.add(inlayMesh);

    // 5. Pillows (4 pillows)
    const pillowGeo = new THREE.BoxGeometry(1.2, 0.22, 0.7);
    const p1 = new THREE.Mesh(pillowGeo, materials.whiteMat);
    p1.position.set(-0.8, 1.2, -1.4);
    p1.rotation.x = 0.25;
    p1.castShadow = true;
    group.add(p1);

    const p2 = new THREE.Mesh(pillowGeo, materials.whiteMat);
    p2.position.set(0.8, 1.2, -1.4);
    p2.rotation.x = 0.25;
    p2.castShadow = true;
    group.add(p2);

    const accentPillowGeo = new THREE.BoxGeometry(0.8, 0.2, 0.5);
    const p3 = new THREE.Mesh(accentPillowGeo, materials.fabricMat);
    p3.position.set(-0.6, 1.3, -1.0);
    p3.rotation.x = 0.35;
    p3.castShadow = true;
    group.add(p3);

    const p4 = new THREE.Mesh(accentPillowGeo, materials.fabricMat);
    p4.position.set(0.6, 1.3, -1.0);
    p4.rotation.x = 0.35;
    p4.castShadow = true;
    group.add(p4);

    // 6. Duvet / Throw Blanket
    const duvetGeo = new THREE.BoxGeometry(3.34, 0.16, 2.6);
    const duvetMesh = new THREE.Mesh(duvetGeo, materials.fabricMat);
    duvetMesh.position.set(0, 1.13, 0.75);
    duvetMesh.castShadow = true;
    group.add(duvetMesh);

    // 7. Four Legs
    const legGeo = new THREE.CylinderGeometry(0.08, 0.05, 0.35, 16);
    const legPositions = [
      [-1.6, 0.1, -1.9],
      [1.6, 0.1, -1.9],
      [-1.6, 0.1, 1.9],
      [1.6, 0.1, 1.9]
    ];
    legPositions.forEach(pos => {
      const leg = new THREE.Mesh(legGeo, materials.brassMat);
      leg.position.set(pos[0], pos[1], pos[2]);
      leg.castShadow = true;
      group.add(leg);
    });

    return group;
  };

  // Build Procedural 3D Sofa
  const buildSofaModel = (materials) => {
    const group = new THREE.Group();

    // 1. Sofa Main Base
    const baseGeo = new THREE.BoxGeometry(4.2, 0.5, 2.0);
    const baseMesh = new THREE.Mesh(baseGeo, materials.fabricMat);
    baseMesh.position.y = 0.5;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    group.add(baseMesh);

    // 2. Seat Cushions (3 cushions)
    const cushionGeo = new THREE.BoxGeometry(1.28, 0.32, 1.6);
    [-1.34, 0, 1.34].forEach(x => {
      const seat = new THREE.Mesh(cushionGeo, materials.fabricMat);
      seat.position.set(x, 0.85, 0.1);
      seat.castShadow = true;
      group.add(seat);
    });

    // 3. Backrest
    const backGeo = new THREE.BoxGeometry(4.2, 1.3, 0.5);
    const backMesh = new THREE.Mesh(backGeo, materials.fabricMat);
    backMesh.position.set(0, 1.3, -0.75);
    backMesh.castShadow = true;
    group.add(backMesh);

    // Diamond Tufting buttons (Brass accents)
    for (let row = 0; row < 3; row++) {
      for (let col = -5; col <= 5; col++) {
        if ((row + col) % 2 === 0) {
          const btnGeo = new THREE.SphereGeometry(0.04, 8, 8);
          const btn = new THREE.Mesh(btnGeo, materials.brassMat);
          btn.position.set(col * 0.35, 1.0 + row * 0.3, -0.48);
          group.add(btn);
        }
      }
    }

    // 4. Rolled Armrests
    const armGeo = new THREE.CylinderGeometry(0.35, 0.35, 2.1, 24);
    const leftArm = new THREE.Mesh(armGeo, materials.fabricMat);
    leftArm.rotation.x = Math.PI / 2;
    leftArm.position.set(-2.15, 1.05, 0);
    leftArm.castShadow = true;
    group.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, materials.fabricMat);
    rightArm.rotation.x = Math.PI / 2;
    rightArm.position.set(2.15, 1.05, 0);
    rightArm.castShadow = true;
    group.add(rightArm);

    // 5. Wooden Bottom Trim
    const woodPlinthGeo = new THREE.BoxGeometry(4.3, 0.12, 2.05);
    const woodPlinth = new THREE.Mesh(woodPlinthGeo, materials.woodMat);
    woodPlinth.position.y = 0.22;
    group.add(woodPlinth);

    // 6. Turned Brass/Wood Legs
    const sofaLegGeo = new THREE.CylinderGeometry(0.09, 0.05, 0.28, 16);
    const positions = [
      [-1.9, 0.08, -0.85],
      [1.9, 0.08, -0.85],
      [-1.9, 0.08, 0.85],
      [1.9, 0.08, 0.85]
    ];
    positions.forEach(pos => {
      const leg = new THREE.Mesh(sofaLegGeo, materials.brassMat);
      leg.position.set(pos[0], pos[1], pos[2]);
      leg.castShadow = true;
      group.add(leg);
    });

    return group;
  };

  // Re-build 3D scene on mount
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(4.5, 3.2, 5.8);
    camera.lookAt(0, 0.8, 0);
    cameraRef.current = camera;

    // 3. Renderer with antialiasing and shadow maps
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Ground Shadow Plane
    const planeGeo = new THREE.PlaneGeometry(16, 16);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.45 });
    const shadowPlane = new THREE.Mesh(planeGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = 0;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Subtle grid circle on ground
    const gridHelper = new THREE.PolarGridHelper(3.8, 8, 8, 32, 0xc9973f, 0x33261a);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);

    // 5. Lights
    const lights = new THREE.Group();
    lightsGroup.current = lights;

    const ambientLight = new THREE.AmbientLight(0xfffaed, 0.9);
    lights.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffeed6, 2.2);
    mainKeyLight.position.set(5, 8, 4);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 1024;
    mainKeyLight.shadow.mapSize.height = 1024;
    mainKeyLight.shadow.camera.near = 0.5;
    mainKeyLight.shadow.camera.far = 20;
    mainKeyLight.shadow.bias = -0.001;
    lights.add(mainKeyLight);

    const fillLight = new THREE.DirectionalLight(0x90b4ce, 0.9);
    fillLight.position.set(-5, 4, -3);
    lights.add(fillLight);

    const rimLight = new THREE.PointLight(0xe3bd76, 1.8, 12);
    rimLight.position.set(0, 4, -4);
    lights.add(rimLight);

    scene.add(lights);

    // 6. Build Initial Model
    const materials = getMaterials(materialPreset);
    const model = modelType === 'bed' ? buildBedModel(materials) : buildSofaModel(materials);
    currentModelGroup.current = model;
    scene.add(model);

    // 7. Mouse Orbit interaction handlers
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current || !currentModelGroup.current) return;
      const deltaX = e.clientX - prevMousePos.current.x;
      const deltaY = e.clientY - prevMousePos.current.y;

      currentModelGroup.current.rotation.y += deltaX * 0.008;
      currentModelGroup.current.rotation.x = Math.max(-0.2, Math.min(0.5, currentModelGroup.current.rotation.x + deltaY * 0.004));

      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch handlers for mobile devices
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current || !currentModelGroup.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.current.x;
      const deltaY = e.touches[0].clientY - prevMousePos.current.y;

      currentModelGroup.current.rotation.y += deltaX * 0.01;
      currentModelGroup.current.rotation.x = Math.max(-0.2, Math.min(0.5, currentModelGroup.current.rotation.x + deltaY * 0.005));

      prevMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // 8. Animation Loop
    let angle = 0;
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      if (currentModelGroup.current && autoRotate && !isDraggingRef.current) {
        currentModelGroup.current.rotation.y += 0.006;
      }

      // Subtle breathing float effect
      angle += 0.02;
      if (currentModelGroup.current) {
        currentModelGroup.current.position.y = Math.sin(angle) * 0.03;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 9. Resize Listener
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Update Model or Material when state changes
  useEffect(() => {
    if (!sceneRef.current) return;
    if (currentModelGroup.current) {
      sceneRef.current.remove(currentModelGroup.current);
    }
    const materials = getMaterials(materialPreset);
    const newModel = modelType === 'bed' ? buildBedModel(materials) : buildSofaModel(materials);
    currentModelGroup.current = newModel;
    sceneRef.current.add(newModel);
  }, [modelType, materialPreset, wireframe]);

  // Lighting preset updates
  useEffect(() => {
    if (!lightsGroup.current) return;
    const lights = lightsGroup.current.children;
    const amb = lights[0];
    const key = lights[1];
    const fill = lights[2];
    const rim = lights[3];

    if (lightingPreset === 'warm') {
      amb.color.setHex(0xfffaed);
      key.color.setHex(0xffedd4);
      key.intensity = 2.2;
      fill.color.setHex(0x5c728a);
      rim.color.setHex(0xe3bd76);
    } else if (lightingPreset === 'golden') {
      amb.color.setHex(0xffdfb3);
      key.color.setHex(0xffa726);
      key.intensity = 2.8;
      fill.color.setHex(0x4a2c14);
      rim.color.setHex(0xffd54f);
    } else if (lightingPreset === 'studio') {
      amb.color.setHex(0xffffff);
      key.color.setHex(0xf5f8ff);
      key.intensity = 2.0;
      fill.color.setHex(0xd0e1fd);
      rim.color.setHex(0xffffff);
    } else if (lightingPreset === 'night') {
      amb.color.setHex(0x1a2130);
      key.color.setHex(0x38bdf8);
      key.intensity = 1.6;
      fill.color.setHex(0x818cf8);
      rim.color.setHex(0xf43f5e);
    }
  }, [lightingPreset]);

  return (
    <div className="three-studio-wrapper">
      {/* 3D Canvas Mount Point */}
      <div 
        ref={mountRef} 
        className="three-canvas-container"
        onMouseEnter={() => playHover()}
      />

      {/* Top Floating Control Bar */}
      <div className="studio-top-bar">
        <div className="studio-model-selector">
          <button 
            className={`model-pill ${modelType === 'bed' ? 'active' : ''}`}
            onClick={() => { playClick(); setModelType('bed'); }}
          >
            <Box size={14} /> Maharaja Bed 3D
          </button>
          <button 
            className={`model-pill ${modelType === 'sofa' ? 'active' : ''}`}
            onClick={() => { playClick(); setModelType('sofa'); }}
          >
            <Box size={14} /> Luxury Sofa 3D
          </button>
        </div>

        <div className="studio-actions">
          <button 
            className={`tool-btn ${autoRotate ? 'active' : ''}`}
            title={autoRotate ? "Pause 360° Auto-spin" : "Start 360° Auto-spin"}
            onClick={() => { playClick(); setAutoRotate(!autoRotate); }}
          >
            <RotateCw size={15} className={autoRotate ? 'spin-slow' : ''} />
            <span>360° Spin</span>
          </button>

          <button 
            className={`tool-btn ${wireframe ? 'active' : ''}`}
            title="Toggle Structural Blueprint / Wireframe"
            onClick={() => { playClick(); setWireframe(!wireframe); }}
          >
            <Layers size={15} />
            <span>Blueprint</span>
          </button>
        </div>
      </div>

      {/* Bottom Floating Material & Lighting Controls */}
      <div className="studio-bottom-bar">
        {/* Material Presets */}
        <div className="studio-group">
          <span className="studio-group-label">Finish & Material:</span>
          <div className="swatch-row">
            <button 
              className={`swatch-btn ${materialPreset === 'sheesham' ? 'active' : ''}`}
              title="Solid Sheesham Hardwood"
              onClick={() => { playClick(); setMaterialPreset('sheesham'); }}
            >
              <span className="swatch-color" style={{ background: 'linear-gradient(135deg, #5c2f16, #2d1407)' }} />
              <span>Sheesham</span>
            </button>
            <button 
              className={`swatch-btn ${materialPreset === 'teak' ? 'active' : ''}`}
              title="Burma Teak Gold"
              onClick={() => { playClick(); setMaterialPreset('teak'); }}
            >
              <span className="swatch-color" style={{ background: 'linear-gradient(135deg, #a66938, #5a3416)' }} />
              <span>Teak Wood</span>
            </button>
            <button 
              className={`swatch-btn ${materialPreset === 'emerald' ? 'active' : ''}`}
              title="Emerald Royal Velvet"
              onClick={() => { playClick(); setMaterialPreset('emerald'); }}
            >
              <span className="swatch-color" style={{ background: 'linear-gradient(135deg, #1c725d, #0d382e)' }} />
              <span>Emerald Velvet</span>
            </button>
            <button 
              className={`swatch-btn ${materialPreset === 'leather' ? 'active' : ''}`}
              title="Cognac Vintage Leatherette"
              onClick={() => { playClick(); setMaterialPreset('leather'); }}
            >
              <span className="swatch-color" style={{ background: 'linear-gradient(135deg, #964d1f, #4a2208)' }} />
              <span>Cognac Leather</span>
            </button>
          </div>
        </div>

        {/* Lighting Atmosphere Presets */}
        <div className="studio-group">
          <span className="studio-group-label">Studio Light:</span>
          <div className="light-pills">
            <button 
              className={`light-btn ${lightingPreset === 'warm' ? 'active' : ''}`}
              onClick={() => { playClick(); setLightingPreset('warm'); }}
            >
              <Sun size={13} /> Warm Showroom
            </button>
            <button 
              className={`light-btn ${lightingPreset === 'golden' ? 'active' : ''}`}
              onClick={() => { playClick(); setLightingPreset('golden'); }}
            >
              <Sparkles size={13} /> Golden Hour
            </button>
            <button 
              className={`light-btn ${lightingPreset === 'night' ? 'active' : ''}`}
              onClick={() => { playClick(); setLightingPreset('night'); }}
            >
              <Eye size={13} /> Night Glow
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div className="studio-hint">
        <span>✦ Click & Drag to Orbit 3D in 360° · Switch Real Wood Textures Below</span>
      </div>
    </div>
  );
}
