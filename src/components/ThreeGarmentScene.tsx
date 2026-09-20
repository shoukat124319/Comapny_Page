import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Rotate3d, 
  Layers, 
  Eye, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut,
  Shirt
} from 'lucide-react';

interface ThreeGarmentSceneProps {
  theme: 'dark' | 'light';
  onRequestSample?: () => void;
}

interface HoodieColorOption {
  name: string;
  hex: number;
  bgClass: string;
  textClass: string;
}

const HOODIE_COLORS: HoodieColorOption[] = [
  { name: 'Noir Black', hex: 0x121215, bgClass: 'bg-zinc-900 border-zinc-700', textClass: 'text-zinc-100' },
  { name: 'Champagne Gold', hex: 0xc5a880, bgClass: 'bg-[#c5a880] border-amber-300', textClass: 'text-slate-950' },
  { name: 'Heather Grey', hex: 0x64748b, bgClass: 'bg-slate-500 border-slate-400', textClass: 'text-white' },
  { name: 'Chalk White', hex: 0xf4f4f6, bgClass: 'bg-zinc-100 border-zinc-300', textClass: 'text-zinc-900' },
  { name: 'Deep Maroon', hex: 0x7f1d1d, bgClass: 'bg-red-900 border-red-700', textClass: 'text-white' },
  { name: 'Military Olive', hex: 0x365314, bgClass: 'bg-lime-950 border-lime-800', textClass: 'text-white' },
];

export default function ThreeGarmentScene({ theme, onRequestSample }: ThreeGarmentSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'solid' | 'techpack' | 'weave'>('solid');
  const [selectedColor, setSelectedColor] = useState<HoodieColorOption>(HOODIE_COLORS[0]);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // References to communicate with Three.js scene outside effect
  const sceneStateRef = useRef<{
    updateColor: (hex: number) => void;
    updateMode: (mode: 'solid' | 'techpack' | 'weave') => void;
    toggleRotate: () => void;
    resetView: () => void;
    zoom: (delta: number) => void;
  } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 7.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = theme === 'dark' ? 1.25 : 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Root Group
    const hoodieGroup = new THREE.Group();
    hoodieGroup.position.y = -0.2;
    scene.add(hoodieGroup);

    // 2. Lighting System (High Fashion Studio Rig)
    const ambientLight = new THREE.AmbientLight(0xffffff, theme === 'dark' ? 0.9 : 1.4);
    scene.add(ambientLight);

    // Key Light (Warm Champagne)
    const keyLight = new THREE.DirectionalLight(0xfff3d6, 2.4);
    keyLight.position.set(4, 5, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Fill Light (Cool Soft)
    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 1.2);
    fillLight.position.set(-4, 2, 4);
    scene.add(fillLight);

    // Rim / Edge Light (High Contrast Silhouette)
    const rimLight = new THREE.PointLight(0xf59e0b, 3.2, 18);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Bottom Bounce Light
    const bounceLight = new THREE.DirectionalLight(0xd4af37, 0.6);
    bounceLight.position.set(0, -5, 2);
    scene.add(bounceLight);

    // 3. Procedural 3D Hoodie Construction
    // Materials
    const hoodieMaterial = new THREE.MeshStandardMaterial({
      color: selectedColor.hex,
      roughness: 0.72,
      metalness: 0.08,
      bumpScale: 0.05,
    });

    const ribMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(selectedColor.hex).multiplyScalar(0.9),
      roughness: 0.88,
      metalness: 0.04,
    });

    const goldAgletMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.15,
    });

    const cordMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      roughness: 0.7,
      metalness: 0.1,
    });

    // Wireframe / Tech-pack materials
    const techWireMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
      roughness: 0.5,
      metalness: 0.4,
    });

    const stitchLineMat = new THREE.LineDashedMaterial({
      color: 0xf59e0b,
      dashSize: 0.08,
      gapSize: 0.04,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.85,
    });

    // A. Torso (Main Hoodie Body - Relaxed Streetwear Oversized Cut)
    const torsoHeight = 2.4;
    const torsoTopWidth = 2.1;
    const torsoBottomWidth = 1.9;
    const torsoDepth = 1.2;

    const torsoGeo = new THREE.CylinderGeometry(
      torsoTopWidth * 0.5,
      torsoBottomWidth * 0.5,
      torsoHeight,
      32,
      12,
      false
    );
    torsoGeo.scale(1, 1, torsoDepth / torsoTopWidth);
    const torsoMesh = new THREE.Mesh(torsoGeo, hoodieMaterial);
    torsoMesh.position.y = 0.1;
    hoodieGroup.add(torsoMesh);

    // B. Ribbed Bottom Hem / Waistband
    const hemHeight = 0.35;
    const hemRadius = (torsoBottomWidth * 0.5) * 0.98;
    const hemGeo = new THREE.CylinderGeometry(hemRadius, hemRadius, hemHeight, 32, 4);
    hemGeo.scale(1, 1, (torsoDepth / torsoTopWidth) * 0.95);
    const hemMesh = new THREE.Mesh(hemGeo, ribMaterial);
    hemMesh.position.y = torsoMesh.position.y - (torsoHeight * 0.5) - (hemHeight * 0.5);
    hoodieGroup.add(hemMesh);

    // C. Kangaroo Front Pouch Pocket
    const pocketShape = new THREE.Shape();
    // Front trapezoid silhouette with curved hand entrances
    pocketShape.moveTo(-0.65, -0.4);
    pocketShape.lineTo(0.65, -0.4);
    pocketShape.lineTo(0.5, 0.3);
    pocketShape.lineTo(-0.5, 0.3);
    pocketShape.closePath();

    const extrudeSettings = {
      depth: 0.14,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    };
    const pocketGeo = new THREE.ExtrudeGeometry(pocketShape, extrudeSettings);
    const pocketMesh = new THREE.Mesh(pocketGeo, hoodieMaterial);
    pocketMesh.position.set(0, -0.25, 0.55);
    hoodieGroup.add(pocketMesh);

    // Kangaroo Pocket Left & Right Slanted Hand Insets (Visual cut-outs)
    const pocketRibLeftGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.72, 8);
    const pocketRibLeft = new THREE.Mesh(pocketRibLeftGeo, ribMaterial);
    pocketRibLeft.position.set(-0.56, -0.3, 0.62);
    pocketRibLeft.rotation.z = -0.24;
    hoodieGroup.add(pocketRibLeft);

    const pocketRibRight = new THREE.Mesh(pocketRibLeftGeo, ribMaterial);
    pocketRibRight.position.set(0.56, -0.3, 0.62);
    pocketRibRight.rotation.z = 0.24;
    hoodieGroup.add(pocketRibRight);

    // D. Volumetric 3D Anatomical Hood
    const hoodGroup = new THREE.Group();
    hoodGroup.position.set(0, 1.35, -0.08);

    // Outer Hood Dome (curved backwards with face opening)
    const hoodOuterGeo = new THREE.SphereGeometry(1.05, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.75);
    hoodOuterGeo.scale(0.9, 1.15, 1.1);
    const hoodOuterMesh = new THREE.Mesh(hoodOuterGeo, hoodieMaterial);
    hoodOuterMesh.rotation.x = 0.35;
    hoodOuterMesh.position.set(0, 0.2, -0.15);
    hoodGroup.add(hoodOuterMesh);

    // Inner Hood Cavity (darker shade for realistic depth)
    const hoodInnerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(selectedColor.hex).multiplyScalar(0.75),
      roughness: 0.9,
      side: THREE.BackSide,
    });
    const hoodInnerGeo = new THREE.SphereGeometry(1.0, 24, 18, 0, Math.PI * 2, 0, Math.PI * 0.75);
    hoodInnerGeo.scale(0.86, 1.1, 1.05);
    const hoodInnerMesh = new THREE.Mesh(hoodInnerGeo, hoodInnerMat);
    hoodInnerMesh.rotation.x = 0.35;
    hoodInnerMesh.position.set(0, 0.2, -0.15);
    hoodGroup.add(hoodInnerMesh);

    // Hood Rim Hem (Tubular rim framing the face opening)
    const hoodRimCurve = new THREE.EllipseCurve(0, 0, 0.8, 0.95, 0, Math.PI, false, 0);
    const hoodRimPoints = hoodRimCurve.getPoints(32).map(p => new THREE.Vector3(p.x, p.y * 1.1, 0.3));
    const hoodRimGeo = new THREE.BufferGeometry().setFromPoints(hoodRimPoints);
    const hoodRimLine = new THREE.Line(hoodRimGeo, new THREE.LineBasicMaterial({ color: 0xd4af37, linewidth: 2 }));
    hoodRimLine.position.set(0, 0.15, 0.2);
    hoodGroup.add(hoodRimLine);

    hoodieGroup.add(hoodGroup);

    // E. Dropped-Shoulder Sleeves & Ribbed Cuffs
    // Left Sleeve
    const sleeveLength = 2.4;
    const sleeveTopRadius = 0.52;
    const sleeveBottomRadius = 0.32;

    const leftSleeveGeo = new THREE.CylinderGeometry(sleeveTopRadius, sleeveBottomRadius, sleeveLength, 24);
    const leftSleeveMesh = new THREE.Mesh(leftSleeveGeo, hoodieMaterial);
    leftSleeveMesh.position.set(-1.45, 0.15, 0);
    leftSleeveMesh.rotation.z = 0.58; // relaxed natural arm hang
    leftSleeveMesh.rotation.x = 0.08;
    hoodieGroup.add(leftSleeveMesh);

    // Left Ribbed Cuff
    const cuffGeo = new THREE.CylinderGeometry(sleeveBottomRadius * 1.02, sleeveBottomRadius * 0.95, 0.32, 24);
    const leftCuffMesh = new THREE.Mesh(cuffGeo, ribMaterial);
    leftCuffMesh.position.set(-2.06, -0.9, 0.12);
    leftCuffMesh.rotation.z = 0.58;
    hoodieGroup.add(leftCuffMesh);

    // Right Sleeve
    const rightSleeveMesh = new THREE.Mesh(leftSleeveGeo, hoodieMaterial);
    rightSleeveMesh.position.set(1.45, 0.15, 0);
    rightSleeveMesh.rotation.z = -0.58;
    rightSleeveMesh.rotation.x = 0.08;
    hoodieGroup.add(rightSleeveMesh);

    // Right Ribbed Cuff
    const rightCuffMesh = new THREE.Mesh(cuffGeo, ribMaterial);
    rightCuffMesh.position.set(2.06, -0.9, 0.12);
    rightCuffMesh.rotation.z = -0.58;
    hoodieGroup.add(rightCuffMesh);

    // F. Hoodie Drawstrings & Metallic Gold Aglets
    const cordCurveLeft = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.25, 1.25, 0.5),
      new THREE.Vector3(-0.28, 0.9, 0.58),
      new THREE.Vector3(-0.22, 0.5, 0.62),
      new THREE.Vector3(-0.26, 0.2, 0.64),
    ]);
    const cordLeftGeo = new THREE.TubeGeometry(cordCurveLeft, 32, 0.022, 8, false);
    const cordLeftMesh = new THREE.Mesh(cordLeftGeo, cordMaterial);
    hoodieGroup.add(cordLeftMesh);

    const agletGeo = new THREE.CylinderGeometry(0.026, 0.022, 0.14, 16);
    const leftAglet = new THREE.Mesh(agletGeo, goldAgletMaterial);
    leftAglet.position.set(-0.26, 0.12, 0.64);
    hoodieGroup.add(leftAglet);

    // Right Cord & Aglet
    const cordCurveRight = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.25, 1.25, 0.5),
      new THREE.Vector3(0.28, 0.9, 0.58),
      new THREE.Vector3(0.22, 0.5, 0.62),
      new THREE.Vector3(0.25, 0.22, 0.64),
    ]);
    const cordRightGeo = new THREE.TubeGeometry(cordCurveRight, 32, 0.022, 8, false);
    const cordRightMesh = new THREE.Mesh(cordRightGeo, cordMaterial);
    hoodieGroup.add(cordRightMesh);

    const rightAglet = new THREE.Mesh(agletGeo, goldAgletMaterial);
    rightAglet.position.set(0.25, 0.14, 0.64);
    hoodieGroup.add(rightAglet);

    // G. Technical Seam Lines (Tech Pack Stitch Guides)
    const seamGroup = new THREE.Group();

    // Shoulder Drop Seams
    const shoulderLeftPoints = [
      new THREE.Vector3(-0.55, 1.3, 0),
      new THREE.Vector3(-1.15, 1.15, 0)
    ];
    const shoulderLineLeft = new THREE.Line(new THREE.BufferGeometry().setFromPoints(shoulderLeftPoints), stitchLineMat);
    shoulderLineLeft.computeLineDistances();
    seamGroup.add(shoulderLineLeft);

    const shoulderRightPoints = [
      new THREE.Vector3(0.55, 1.3, 0),
      new THREE.Vector3(1.15, 1.15, 0)
    ];
    const shoulderLineRight = new THREE.Line(new THREE.BufferGeometry().setFromPoints(shoulderRightPoints), stitchLineMat);
    shoulderLineRight.computeLineDistances();
    seamGroup.add(shoulderLineRight);

    // Kangaroo Pocket Stitch Contour
    const pocketStitchPoints = [
      new THREE.Vector3(-0.65, -0.4, 0.66),
      new THREE.Vector3(0.65, -0.4, 0.66),
      new THREE.Vector3(0.5, 0.3, 0.66),
      new THREE.Vector3(-0.5, 0.3, 0.66),
      new THREE.Vector3(-0.65, -0.4, 0.66)
    ];
    const pocketStitchLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pocketStitchPoints), stitchLineMat);
    pocketStitchLine.computeLineDistances();
    seamGroup.add(pocketStitchLine);

    // Hem Border Stitch
    const hemStitchCircle = new THREE.EllipseCurve(0, 0, hemRadius * 1.01, (hemRadius * 1.01) * 0.6, 0, Math.PI * 2);
    const hemStitchGeo = new THREE.BufferGeometry().setFromPoints(
      hemStitchCircle.getPoints(48).map(p => new THREE.Vector3(p.x, -1.05, p.y))
    );
    const hemStitchLine = new THREE.Line(hemStitchGeo, stitchLineMat);
    hemStitchLine.computeLineDistances();
    seamGroup.add(hemStitchLine);

    hoodieGroup.add(seamGroup);

    // H. Textile Thread Particle Field (Weave Matrix)
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const goldColor = new THREE.Color(0xd4af37);
    const whiteColor = new THREE.Color(0xffffff);
    const amberColor = new THREE.Color(0xf59e0b);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 5.5;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 3.5;

      const pick = Math.random();
      const col = pick < 0.5 ? goldColor : pick < 0.8 ? amberColor : whiteColor;
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });
    const threadParticles = new THREE.Points(particleGeo, particleMat);
    hoodieGroup.add(threadParticles);

    // Floor Fashion Pedestal Shadow Disc
    const discGeo = new THREE.CircleGeometry(2.2, 48);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: theme === 'dark' ? 0.45 : 0.18,
    });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.rotation.x = -Math.PI / 2;
    discMesh.position.y = -1.65;
    scene.add(discMesh);

    // Floating Gold Brand Halo Ring
    const haloGeo = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const haloMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      emissive: 0xd4af37,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.2,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.rotation.x = Math.PI / 3;
    haloMesh.position.y = -0.1;
    scene.add(haloMesh);

    // Mouse Tracking / Orbit
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let manualRotY = 0;
    let manualRotX = 0;
    let autoSpinActive = true;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = normX * 0.4;
      targetY = normY * 0.3;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        manualRotY += deltaX * 0.008;
        manualRotX += deltaY * 0.008;
        manualRotX = Math.max(-0.4, Math.min(0.4, manualRotX));
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Visibility Updater
    const applyViewMode = (mode: 'solid' | 'techpack' | 'weave') => {
      if (mode === 'solid') {
        torsoMesh.material = hoodieMaterial;
        pocketMesh.material = hoodieMaterial;
        hoodOuterMesh.material = hoodieMaterial;
        leftSleeveMesh.material = hoodieMaterial;
        rightSleeveMesh.material = hoodieMaterial;
        seamGroup.visible = true;
        threadParticles.visible = false;
      } else if (mode === 'techpack') {
        torsoMesh.material = techWireMat;
        pocketMesh.material = techWireMat;
        hoodOuterMesh.material = techWireMat;
        leftSleeveMesh.material = techWireMat;
        rightSleeveMesh.material = techWireMat;
        seamGroup.visible = true;
        threadParticles.visible = true;
      } else {
        // Weave / Semi-translucent mode
        const weaveMat = new THREE.MeshStandardMaterial({
          color: selectedColor.hex,
          roughness: 0.3,
          metalness: 0.2,
          transparent: true,
          opacity: 0.65,
          wireframe: false,
        });
        torsoMesh.material = weaveMat;
        pocketMesh.material = weaveMat;
        hoodOuterMesh.material = weaveMat;
        leftSleeveMesh.material = weaveMat;
        rightSleeveMesh.material = weaveMat;
        seamGroup.visible = true;
        threadParticles.visible = true;
      }
    };

    applyViewMode(viewMode);

    // Color updater
    const updateMeshColor = (hex: number) => {
      hoodieMaterial.color.setHex(hex);
      ribMaterial.color.setHex(new THREE.Color(hex).multiplyScalar(0.9).getHex());
      hoodInnerMat.color.setHex(new THREE.Color(hex).multiplyScalar(0.75).getHex());
    };

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      if (autoSpinActive && !isDragging) {
        manualRotY += 0.007;
      }

      hoodieGroup.rotation.y = manualRotY + mouseX;
      hoodieGroup.rotation.x = manualRotX - mouseY;

      // Subtle breathing floating motion
      hoodieGroup.position.y = -0.2 + Math.sin(elapsedTime * 1.8) * 0.06;

      // Gentle drawstring natural sway
      const swayLeft = Math.sin(elapsedTime * 2.2) * 0.03;
      leftAglet.position.x = -0.26 + swayLeft;
      const swayRight = Math.cos(elapsedTime * 2.2) * 0.03;
      rightAglet.position.x = 0.25 + swayRight;

      // Halo ring rotation
      haloMesh.rotation.z = elapsedTime * 0.3;
      haloMesh.rotation.y = elapsedTime * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // Scene State Exposure to React Buttons
    sceneStateRef.current = {
      updateColor: (hex: number) => {
        updateMeshColor(hex);
      },
      updateMode: (mode: 'solid' | 'techpack' | 'weave') => {
        applyViewMode(mode);
      },
      toggleRotate: () => {
        autoSpinActive = !autoSpinActive;
        setIsAutoRotate(autoSpinActive);
      },
      resetView: () => {
        manualRotX = 0;
        manualRotY = 0;
        camera.position.set(0, 0.4, 7.8);
      },
      zoom: (delta: number) => {
        const nextZ = camera.position.z + delta;
        if (nextZ >= 5.0 && nextZ <= 11.0) {
          camera.position.z = nextZ;
        }
      }
    };

    // Responsive Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torsoGeo.dispose();
      hemGeo.dispose();
      pocketGeo.dispose();
      hoodOuterGeo.dispose();
      hoodInnerGeo.dispose();
      leftSleeveGeo.dispose();
      cuffGeo.dispose();
      cordLeftGeo.dispose();
      cordRightGeo.dispose();
      agletGeo.dispose();
      particleGeo.dispose();
      discGeo.dispose();
      haloGeo.dispose();
    };
  }, [theme]);

  // Handle color change from UI
  const handleColorSelect = (color: HoodieColorOption) => {
    setSelectedColor(color);
    if (sceneStateRef.current) {
      sceneStateRef.current.updateColor(color.hex);
    }
  };

  // Handle mode change from UI
  const handleModeSelect = (mode: 'solid' | 'techpack' | 'weave') => {
    setViewMode(mode);
    if (sceneStateRef.current) {
      sceneStateRef.current.updateMode(mode);
    }
  };

  return (
    <div
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border border-amber-500/30 shadow-2xl shadow-black/80 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D WebGL Canvas */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Click & drag to rotate 3D Hoodie in 360°" 
      />

      {/* Top Bar: Brand Pill & View Mode Switcher */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/40 text-xs font-semibold text-amber-400 shadow-lg">
          <Shirt className="w-3.5 h-3.5" />
          <span className="tracking-wide">3D Luxury Oversized Hoodie</span>
        </div>

        <div className="flex items-center gap-1 pointer-events-auto bg-black/80 backdrop-blur-md p-1 rounded-2xl border border-zinc-700 shadow-lg">
          <button
            type="button"
            onClick={() => handleModeSelect('solid')}
            className={`px-2.5 py-1 text-xs rounded-xl flex items-center gap-1.5 transition-all ${
              viewMode === 'solid'
                ? 'bg-amber-400 text-black font-bold shadow-sm'
                : 'text-zinc-300 hover:text-white'
            }`}
            title="Photorealistic 3D Fabric"
          >
            <Layers className="w-3 h-3" />
            <span className="hidden sm:inline">Fabric</span>
          </button>
          <button
            type="button"
            onClick={() => handleModeSelect('techpack')}
            className={`px-2.5 py-1 text-xs rounded-xl flex items-center gap-1.5 transition-all ${
              viewMode === 'techpack'
                ? 'bg-amber-400 text-black font-bold shadow-sm'
                : 'text-zinc-300 hover:text-white'
            }`}
            title="Technical Seams & Wireframe"
          >
            <Eye className="w-3 h-3" />
            <span className="hidden sm:inline">Tech Pack</span>
          </button>
          <button
            type="button"
            onClick={() => handleModeSelect('weave')}
            className={`px-2.5 py-1 text-xs rounded-xl flex items-center gap-1.5 transition-all ${
              viewMode === 'weave'
                ? 'bg-amber-400 text-black font-bold shadow-sm'
                : 'text-zinc-300 hover:text-white'
            }`}
            title="Fiber Weave / X-Ray"
          >
            <Sparkles className="w-3 h-3" />
            <span className="hidden sm:inline">Weave</span>
          </button>
        </div>
      </div>

      {/* Left Floating Controls: Fabric Color Palette */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-2 rounded-2xl bg-black/85 backdrop-blur-md border border-zinc-800 shadow-xl z-10">
        <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-mono text-center pb-1 border-b border-zinc-800">
          Color
        </span>
        {HOODIE_COLORS.map((col) => {
          const isSelected = selectedColor.name === col.name;
          return (
            <button
              key={col.name}
              type="button"
              onClick={() => handleColorSelect(col)}
              title={`Switch to ${col.name}`}
              className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-125 ${col.bgClass} ${
                isSelected ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-black scale-110' : 'opacity-80'
              }`}
            />
          );
        })}
      </div>

      {/* Right Floating Controls: Zoom, Spin Toggle, Reset */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 p-1.5 rounded-2xl bg-black/85 backdrop-blur-md border border-zinc-800 shadow-xl z-10">
        <button
          type="button"
          onClick={() => sceneStateRef.current?.toggleRotate()}
          title={isAutoRotate ? 'Pause 360° spin' : 'Auto 360° spin'}
          className="p-2 rounded-xl text-zinc-300 hover:text-amber-400 hover:bg-zinc-800/60 transition-colors"
        >
          {isAutoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={() => sceneStateRef.current?.zoom(-0.8)}
          title="Zoom In"
          className="p-2 rounded-xl text-zinc-300 hover:text-amber-400 hover:bg-zinc-800/60 transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => sceneStateRef.current?.zoom(0.8)}
          title="Zoom Out"
          className="p-2 rounded-xl text-zinc-300 hover:text-amber-400 hover:bg-zinc-800/60 transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => sceneStateRef.current?.resetView()}
          title="Reset Camera View"
          className="p-2 rounded-xl text-zinc-300 hover:text-amber-400 hover:bg-zinc-800/60 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Bar: Instructions + Direct Sample CTA */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs pointer-events-none z-10">
        <div className="flex items-center gap-2 bg-black/80 px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-300">
          <Rotate3d className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="hidden sm:inline">
            {isHovered ? 'Drag to rotate 360°' : 'Hover & drag 3D hoodie'}
          </span>
          <span className="text-amber-400 font-semibold">• {selectedColor.name}</span>
        </div>

        {onRequestSample && (
          <button
            type="button"
            onClick={onRequestSample}
            className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold shadow-lg shadow-amber-400/20 active:scale-95 transition-all text-xs"
          >
            <span>Request Sample</span>
          </button>
        )}
      </div>
    </div>
  );
}
