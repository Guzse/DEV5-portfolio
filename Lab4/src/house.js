import * as THREE from 'three';
import Textures from './textures';
export default class House {
    constructor(scene) {
        this.scene = scene;
        this.createStructure();
    }

    textures = new Textures();

    // Brick material texture
    mBricks = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: this.textures.tBricks,
        normalMap: this.textures.nBricks,
        roughnessMap: this.textures.rBricks,
        aoMap: this.textures.aoBricks,
    });
    mRoof = new THREE.MeshLambertMaterial({
        color: 0xfff,
        map: this.textures.tRoof,
        normalMap: this.textures.nRoof,
        roughnessMap: this.textures.rRoof,
        aoMap: this.textures.aoRoof,
    });
    mDoor = new THREE.MeshLambertMaterial({
        color: 0xfff,
    });

    createStructure() {
        let geometry = new THREE.BoxGeometry(8, 4, 8);
        let material = this.mBricks;
        let cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        console.log("createStructure");
    }
}