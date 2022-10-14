import * as THREE from 'three';
export default class Textures {
    constructor() {
        this.tSand.repeat.set(10, 10);
        this.tSand.wrapS = THREE.RepeatWrapping;
        this.tSand.wrapT = THREE.RepeatWrapping;
        this.nSand.repeat.set(10, 10);
        this.nSand.wrapS = THREE.RepeatWrapping;
        this.nSand.wrapT = THREE.RepeatWrapping;
        this.rSand.repeat.set(10, 10);
        this.rSand.wrapS = THREE.RepeatWrapping;
        this.rSand.wrapT = THREE.RepeatWrapping;
        this.aoSand.repeat.set(10, 10);
        this.aoSand.wrapS = THREE.RepeatWrapping;
        this.aoSand.wrapT = THREE.RepeatWrapping;
        this.hSand.repeat.set(10, 10);
        this.hSand.wrapS = THREE.RepeatWrapping;
        this.hSand.wrapT = THREE.RepeatWrapping;
        
        this.tBricks.wrapS = THREE.RepeatWrapping;
        this.tBricks.wrapT = THREE.RepeatWrapping;
        this.nBricks.wrapS = THREE.RepeatWrapping;
        this.nBricks.wrapT = THREE.RepeatWrapping;
        this.rBricks.wrapS = THREE.RepeatWrapping;
        this.rBricks.wrapT = THREE.RepeatWrapping;
        this.aoBricks.wrapS = THREE.RepeatWrapping;
        this.aoBricks.wrapT = THREE.RepeatWrapping;
        this.hBricks.wrapS = THREE.RepeatWrapping;
        this.hBricks.wrapT = THREE.RepeatWrapping;
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
    hBricks = this.textureLoader.load(
        "../textures/stonewall/Stone_Wall_007_DISP.jpg"
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
    hRoof = this.textureLoader.load(
        "../textures/roof/Roof_Tiles_Terracota_002_height.png"
    );

    // Concrete textures
    tConcrete = this.textureLoader.load(
        "../textures/concrete/Concrete_019_BaseColor.jpg"
    );
    nConcrete = this.textureLoader.load(
        "../textures/concrete/Concrete_019_Normal.jpg"
    );
    rConcrete = this.textureLoader.load(
        "../textures/concrete/Concrete_019_Roughness.jpg"
    );
    aoConcrete = this.textureLoader.load(
        "../textures/concrete/Concrete_019_AmbientOcclusion.jpg"
    );
    hConcrete = this.textureLoader.load(
        "../textures/concrete/Concrete_019_Height.png"
    );

    // Concrete textures
    tSand = this.textureLoader.load(
        "../textures/sand/Stylized_Sand_001_BaseColor.jpg"
    );
    nSand = this.textureLoader.load(
        "../textures/sand/Stylized_Sand_001_Normal.jpg"
    );
    rSand = this.textureLoader.load(
        "../textures/sand/Stylized_Sand_001_Roughness.jpg"
    );
    aoSand = this.textureLoader.load(
        "../textures/sand/Stylized_Sand_001_AmbientOcclusion.jpg"
    );
    hSand = this.textureLoader.load(
        "../textures/sand/Stylized_Sand_001_Height.png"
    );  
}