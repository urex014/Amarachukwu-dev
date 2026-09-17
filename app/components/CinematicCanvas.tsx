'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CinematicCanvasProps {
  scrollProgress: number; // 0.0 to 1.0
}

export default function CinematicCanvas({ scrollProgress }: CinematicCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(scrollProgress);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create 3D Depth Particle Field (Architectural Dust in Outreachly Signal Green)
    const particleCount = window.innerWidth < 768 ? 160 : 450;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1600;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2400;
      opacities[i] = Math.random() * 0.4 + 0.1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Luminous Outreachly Acid Lime Particles
    const material = new THREE.PointsMaterial({
      color: 0xB8FF00,
      size: 2.8,
      transparent: true,
      opacity: 0.55,
      blending: THREE.NormalBlending,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Perspective Depth Grid Plane in Outreachly Acid Lime
    const gridHelper = new THREE.GridHelper(2400, 24, 0xB8FF00, 0xB8FF00);
    gridHelper.position.y = -400;
    gridHelper.position.z = -400;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.15;
    scene.add(gridHelper);

    // Mouse movement tracking for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 60;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 60;
    };

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Continuous Render Loop
    let animationFrameId: number;

    const render = () => {
      const progress = scrollRef.current;

      const targetCameraZ = 600 - progress * 2000;
      camera.position.z += (targetCameraZ - camera.position.z) * 0.08;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX;
      camera.position.y = -mouseY + progress * 80;
      camera.lookAt(0, progress * 40, camera.position.z - 500);

      gridHelper.rotation.y = progress * 0.4;
      gridHelper.position.z = -400 + progress * 600;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-90"
      aria-hidden="true"
    />
  );
}
