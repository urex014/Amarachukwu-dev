import * as THREE from 'three';

// Setup
const container = document.getElementById('3d-model');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // full black bg

const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Stars (small refined points)
const stars = [];
function addStar() {
  const geometry = new THREE.SphereGeometry(0.03, 8, 8); // much smaller
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  // spread stars across a large z range (so they "fly by" on scroll)
  const [x, y, z] = [
    THREE.MathUtils.randFloatSpread(200), // wide space
    THREE.MathUtils.randFloatSpread(200),
    THREE.MathUtils.randFloat(-500, -10) // push stars far into z-space
  ];

  star.position.set(x, y, z);
  scene.add(star);
  stars.push(star);
}
Array(3000).fill().forEach(addStar);

// Moon (kept subtle so it doesn't ruin "travel" effect)
const textureLoader = new THREE.TextureLoader();
const moonTexture = textureLoader.load('/moon.jpg');
const normalTexture = textureLoader.load('/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);
moon.position.set(-10, 0, -40);
scene.add(moon);

// Scroll Animation
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  // Camera moves forward into space as you scroll
  camera.position.z = 10 + t * 0.05; 
  camera.rotation.y = t * -0.0005;

  // Slight parallax effect on moon
  moon.rotation.y += 0.002;
}
document.body.onscroll = moveCamera;

// Animate stars moving toward camera continuously
function animate() {
  requestAnimationFrame(animate);

  stars.forEach(star => {
    star.position.z += 0.5; // stars move closer every frame

    // recycle star once it passes camera
    if (star.position.z > camera.position.z) {
      star.position.z = THREE.MathUtils.randFloat(-500, -50);
      star.position.x = THREE.MathUtils.randFloatSpread(200);
      star.position.y = THREE.MathUtils.randFloatSpread(200);
    }
  });

  renderer.render(scene, camera);
}
animate();

// Responsive resize
window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});


