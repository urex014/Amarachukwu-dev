import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// typing animation (unchanged)
const text = "MERN Stack Developer | AI/ML (JavaScript) | Web Automation | Three.js";
const element = document.getElementById("typing-text");
let index = 0;
const speed = 100; // ms per character
function type() {
  if (!element) return;
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}
type();

// --------------------
// Utility: glowing star texture + starfield generator
// --------------------
function createStarTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(255,255,255,0.8)");
  gradient.addColorStop(0.4, "rgba(200,200,255,0.4)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createStarPoints(count = 2000, rMin = 20, rMax = 200, size = 0.55, color = 0xffffff) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = THREE.MathUtils.randFloat(rMin, rMax);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color,
    size,
    map: createStarTexture(),
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });
  return new THREE.Points(geom, mat);
}

// --------------------
// Globe scene (keeps original behavior, with glowing stars)
// --------------------
const globeContainer = document.querySelector('.globe-canvas');
if (globeContainer) {
  console.log('Globe container', globeContainer.clientWidth, globeContainer.clientHeight);

  const globeScene = new THREE.Scene();

  const globeCamera = new THREE.PerspectiveCamera(
    75,
    globeContainer.clientWidth / globeContainer.clientHeight,
    0.1,
    2000
  );
  globeCamera.position.set(0, 0, 3);

  const globeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  globeRenderer.setPixelRatio(window.devicePixelRatio);
  globeRenderer.setSize(globeContainer.clientWidth, globeContainer.clientHeight);
  globeContainer.appendChild(globeRenderer.domElement);

  const globeAmbientLight = new THREE.AmbientLight(0xffffff, 0.5);
  globeScene.add(globeAmbientLight);

  const globeDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  globeDirectionalLight.position.set(5, 3, 5);
  globeScene.add(globeDirectionalLight);

  const globeTextureLoader = new THREE.TextureLoader();
  const globeTexture = globeTextureLoader.load('/texture.jpg');

  const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
  const globeMaterial = new THREE.MeshStandardMaterial({ map: globeTexture });
  const globe = new THREE.Mesh(globeGeometry, globeMaterial);
  globeScene.add(globe);

  const globeControls = new OrbitControls(globeCamera, globeRenderer.domElement);
  globeControls.enableDamping = true;
  globeControls.dampingFactor = 0.05;

  // Add glowing starfield
  const globeStars = createStarPoints(5000, 40, 250, 0.32, 0xffffff); //increase startcount, size or whatever here
  globeStars.renderOrder = 0;
  globeScene.add(globeStars);

  const globeClock = new THREE.Clock();
  function animateGlobe() {
    requestAnimationFrame(animateGlobe);
    const delta = globeClock.getDelta();

    globe.rotation.y += 0.005;
    globeStars.rotation.y += 0.02 * delta;

    globeControls.update();
    globeRenderer.render(globeScene, globeCamera);
  }
  animateGlobe();

  window.addEventListener('resize', () => {
    if (!globeContainer) return;
    globeCamera.aspect = globeContainer.clientWidth / globeContainer.clientHeight;
    globeCamera.updateProjectionMatrix();
    globeRenderer.setSize(globeContainer.clientWidth, globeContainer.clientHeight);
  });
} else {
  console.warn('No .globe-canvas element found. Skipping globe setup.');
}

// --------------------
// Laptop scene (with glowing stars)
// --------------------
let scene, camera, renderer, laptop;
let laptopStars;

function initThreeJS() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('laptop-container').appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/desktop.png');

  const geometry = new THREE.BoxGeometry(2, 1.2, 0.1);
  const material = new THREE.MeshPhongMaterial({
    color: 0x3b82f6,
    specular: 0x555555,
    shininess: 30
  });

  const screenGeometry = new THREE.PlaneGeometry(1.8, 1);
  const screenMaterial = new THREE.MeshStandardMaterial({ map: texture });

  laptop = new THREE.Group();
  const body = new THREE.Mesh(geometry, material);
  body.position.z = -0.05;

  const screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.z = 0.05;
  laptop.add(body);
  laptop.add(screen);
  scene.add(laptop);

  // Add glowing starfield behind laptop
  laptopStars = createStarPoints(1500, 30, 220, 0.12, 0xffffff);
  laptopStars.position.set(0, 0, -50);
  laptopStars.renderOrder = -1;
  scene.add(laptopStars);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  if (laptopStars) laptopStars.rotation.y += 0.0008;

  renderer.render(scene, camera);
}

// --------------------
// GSAP animations
// --------------------
function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(camera.position, {
    z: 0.5,
    scrollTrigger: {
      trigger: ".laptop-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
    }
  });

  gsap.to(laptop.rotation, {
    x: -0.5,
    scrollTrigger: {
      trigger: ".laptop-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
    }
  });

  ScrollTrigger.create({
    trigger: ".laptop-section",
    start: "center center",
    onEnter: () => {
      document.querySelector('.desktop-interface').classList.add('active');
    },
    onLeaveBack: () => {
      document.querySelector('.desktop-interface').classList.remove('active');
    }
  });

  gsap.utils.toArray('.content-section').forEach(section => {
    gsap.fromTo(section,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  gsap.to('.progress-bar', {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
    }
  });
}

// --------------------
// Initialize
// --------------------
document.addEventListener('DOMContentLoaded', () => {
  initThreeJS();
  initGSAP();

  const cta = document.querySelector('.cta-button');
  if (cta) {
    cta.addEventListener('click', () => {
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
