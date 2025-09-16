
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//typing animation
  const text = "MERN Stack Developer | AI/ML (JavaScript) | Web Automation | Three.js";
  const element = document.getElementById("typing-text");
  let index = 0;
  const speed = 100; // milliseconds per character

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type(); 


const container = document.querySelector('.globe-canvas');
console.log(container.clientHeight, container.clientWidth);

const globeScene = new THREE.Scene();
const globeCamera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
globeCamera.position.set(0, 0, 3);

const globeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
globeRenderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(globeRenderer.domElement); // append to container

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

function animateGlobe() {
  requestAnimationFrame(animateGlobe);
  globe.rotation.y += 0.001;
  globeControls.update();
  globeRenderer.render(globeScene, globeCamera);
}
animateGlobe();

window.addEventListener('resize', () => {
  globeCamera.aspect = container.clientWidth / container.clientHeight;
  globeCamera.updateProjectionMatrix();
  globeRenderer.setSize(container.clientWidth, container.clientHeight);
});


// Initialize Three.js scene
    let scene, camera, renderer, laptop;

    function initThreeJS() {
      // Create scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0f172a);

      // Create camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Create renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('laptop-container').appendChild(renderer.domElement);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      //texture loader
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load('/desktop.png');
      

      // Add a placeholder cube (replace with your GLB model)
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
      // screen.rotation.x = Math.PI;

      laptop.add(body);
      laptop.add(screen);
      scene.add(laptop);

      // Handle window resize
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Start animation loop
      animate();
    }


    function animate() {
      requestAnimationFrame(animate);

      // if (laptop) {
      //   laptop.rotation.y += 0.005;
      // }

      renderer.render(scene, camera);
    }

    // Initialize GSAP animations
    function initGSAP() {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Set up scroll animations
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

      // Show desktop interface when scrolled to laptop
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

      // Animate content sections on scroll
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

      // Update progress bar on scroll
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

    // Initialize everything when page loads
    document.addEventListener('DOMContentLoaded', () => {
      initThreeJS();
      initGSAP();

      // CTA button click
      document.querySelector('.cta-button').addEventListener('click', () => {
        document.querySelector('.laptop-section').scrollIntoView({ behavior: 'smooth' });
      });

      // Smooth scrolling for navigation links
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
