import './style.css';
import * as THREE from 'three';
import { WebGL1Renderer } from 'three';
import House from './src/house';
import Terrain from './src/terrain';
import Camera from './src/camera';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let camera = new Camera(scene, renderer);

let house = new House(scene);
let terrain = new Terrain(scene);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xcceeff, 2);
directionalLight.position.set(3, 3, 1);
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera.perspectiveCamera);
}

animate();