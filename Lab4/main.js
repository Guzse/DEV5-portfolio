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
const ambientLight = new THREE.AmbientLight(0xccccff, 0.2);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffeecc, 2);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

// Add directional light helper
const directionalLightHelper = new THREE.DirectionalLightHelper(
    directionalLight,
    5
);
scene.add(directionalLightHelper);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

let t = 0;
function animate() {
    requestAnimationFrame(animate);
    t+=0.005;
    directionalLight.position.x = 100 * Math.sin(t);
    directionalLight.position.y = 100 * Math.cos(t);  
    directionalLight.position.z = 50 * Math.cos(t);  


    renderer.render(scene, camera.perspectiveCamera);
}

animate();