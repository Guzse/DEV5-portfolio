import * as THREE from 'three';
export default class House {
    constructor(scene) {
        this.scene = scene;
        this.createStructure();
    }

    textureLoader = new THREE.TextureLoader();

    // Brick textures
    tBricks = this.textureLoader.load(
        "../textures/stonewall/Stone_Wall_007_COLOR.jpg"
    );
    nBricks = this.textureLoader.load(
        "../textures/stonewall/Stone_Wall_007_NORM.jpg"
    );
    rBricks = this.textureLoader.load(
        "../textures/stonewall/Stone_Wall_007_ROUGH.jpg"
    );
    aoBricks = this.textureLoader.load(
        "../textures/stonewall/Stone_Wall_007_OCC.jpg"
    );

    // Roof textures
    tRoof = this.textureLoader.load(
        "../textures/roof/Roof_Tiles_Terracota_002_basecolor.jpg"
    );
    nRoof = this.textureLoader.load(
        "../textures/roof/Roof_Tiles_Terracota_002_normal.jpg"
    );
    rRoof = this.textureLoader.load(
        "../textures/roof/Roof_Tiles_Terracota_002_roughness.jpg"
    );
    aoRoof = this.textureLoader.load(
        "../textures/roof/Roof_Tiles_Terracota_002_ambientOcclusion.jpg"
    );

    // Brick material texture
    mBricks = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: this.tBricks,
        normalMap: this.nBricks,
        roughnessMap: this.rBricks,
        aoMap: this.aoBricks,
    });
    mRoof = new THREE.MeshLambertMaterial({
        color: 0xfff,
        map: this.tRoof,
        normalMap: this.nRoof,
        roughnessMap: this.rRoof,
        aoMap: this.aoRoof,
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