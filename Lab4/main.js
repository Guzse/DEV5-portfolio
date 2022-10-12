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

let house = new House();
let terrain = new Terrain();