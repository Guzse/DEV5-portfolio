import './style.css';
import * as THREE from 'three';
import { WebGL1Renderer } from 'three';
import Light from './src/light';
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
let light = new Light(scene);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

function animate() {
    requestAnimationFrame(animate);
    light.animate();
    renderer.render(scene, camera.perspectiveCamera);
}

animate();