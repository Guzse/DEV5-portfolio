import * as THREE from 'three';
import Textures from './textures';

export default class Terrain {
    constructor(scene, position = {x: 0, y: 0, z: 0}) {
        this.scene = scene;
        this.position = position;
        this.createTerrain();
        this.generateObjects();
    }

    textures = new Textures();

    mSand = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: this.textures.tSand,
        normalMap: this.textures.nSand,
        roughnessMap: this.textures.rSand,
        aoMap: this.textures.aoSand,
        displacementMap: this.textures.hSand,
    });

    applyPosition(x, y, z) {
        let X = this.position.x + x;
        let Y = this.position.y + y;
        let Z = this.position.z + z;
        return [X, Y, Z];
    }

    createTerrain() {
        const geometry = new THREE.PlaneGeometry(100, 100, 100, 100);
        const plane = new THREE.Mesh(geometry, this.mSand);
        plane.rotation.x = -Math.PI / 2;
        plane.position.set(...this.applyPosition(0, -0.1, 0));
        plane.receiveShadow = true;
        plane.castShadow = true;
        this.scene.add(plane);
    }

    generateObjects() {

    }
}