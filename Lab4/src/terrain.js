import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Textures from "./textures";

export default class Terrain {
    constructor(scene, position = { x: 0, y: 0, z: 0 }) {
        this.scene = scene;
        this.position = position;
        this.tornado = null;
        this.createTerrain();
        this.generateObjects();
        this.createTornado();
    }

    textures = new Textures();

    mSand = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: this.textures.tSand,
        normalMap: this.textures.nSand,
        roughnessMap: this.textures.rSand,
        aoMap: this.textures.aoSand,
        displacementMap: this.textures.hSand,
        displacementScale: 0.3,
    });

    applyPosition(x, y, z) {
        let X = this.position.x + x;
        let Y = this.position.y + y;
        let Z = this.position.z + z;
        return [X, Y, Z];
    }

    createTerrain() {
        const geometry = new THREE.PlaneGeometry(100, 100, 1000, 1000);
        const plane = new THREE.Mesh(geometry, this.mSand);
        plane.rotation.x = -Math.PI / 2;
        plane.position.set(...this.applyPosition(0, -0.1, 0));
        plane.receiveShadow = true;
        plane.castShadow = true;
        this.scene.add(plane);
    }

    generateObjects() {
        // Import the models
        const loader = new GLTFLoader();
        for (let i = 0; i < 25; i++) {
            loader.load("./models/stylized_cactus.glb", (gltf) => {
                const cactus = gltf.scene;
                const x = (Math.random() - 0.5) * 100;
                const z = (Math.random() - 0.5) * 100;
                const rotation = Math.random() * Math.PI * 2;
                cactus.rotateY(rotation);
                cactus.position.set(...this.applyPosition(x, 1, z));
                this.scene.add(cactus);
            });
        }
    }

    createTornado() {
        const loader = new GLTFLoader();
        loader.load("../models/scene.gltf", (gltf) => {
            this.tornado = gltf.scene;
            this.tornado.position.set(...this.applyPosition(18, 13.5, 18));
            this.tornado.scale.set(3, 3, 3);
            this.scene.add(this.tornado);
        });
    }

    animate(t) {
        if (this.tornado) {
            this.tornado.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0.5);
        }
    }
}
