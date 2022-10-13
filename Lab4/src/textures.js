import * as THREE from 'three';
export default class Textures {
    constructor() {
        this.tBricks.wrapS = this.tBricks.wrapT = THREE.RepeatWrapping;
        this.nBricks.wrapS = this.nBricks.wrapT = THREE.RepeatWrapping;
        this.rBricks.wrapS = this.rBricks.wrapT = THREE.RepeatWrapping;
        this.aoBricks.wrapS = this.aoBricks.wrapT = THREE.RepeatWrapping;
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
}