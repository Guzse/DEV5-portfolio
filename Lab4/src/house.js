import * as THREE from 'three';
export default class House {
    constructor(scene) {
        this.scene = scene;
        this.createStructure();
    }
    
    textureLoader = new THREE.TextureLoader();

    // Textures
    tBricks = this.textureLoader.load('../textures/stonewall/Stone_Wall_007_COLOR.jpg');
    nmBricks = this.textureLoader.load('../textures/stonewall/Stone_Wall_007_NRM.jpg');
    
    // Brick material texture
    mBricks = new THREE.MeshLambertMaterial({ color: 0xffffff, map: this.tBricks, lightMap: this.nmBricks });
    mRoof = new THREE.MeshLambertMaterial({ color: 0x993333 });
    mDoor = new THREE.MeshLambertMaterial({ color: 0x332211 });

    createStructure() {
        let geometry = new THREE.BoxGeometry(8, 4, 8);
        let material = this.mBricks;
        let cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        console.log('createStructure');
    }
}