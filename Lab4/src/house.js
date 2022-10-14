import * as THREE from 'three';
import Textures from './textures';

export default class House {
    constructor(scene, position = {x: 0, y: 0, z: 0}) {
        this.scene = scene;
        this.position = position;
        this.createStructure();
    }

    textures = new Textures();

    applyPosition(x, y, z) {
        let X = this.position.x + x;
        let Y = this.position.y + y;
        let Z = this.position.z + z;
        return [X, Y, Z];
    }

    // Brick material
    mBricks = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: this.textures.tBricks,
        normalMap: this.textures.nBricks,
        roughnessMap: this.textures.rBricks,
        aoMap: this.textures.aoBricks,
    });

    // Roof material
    mRoof = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: this.textures.tRoof,
        normalMap: this.textures.nRoof,
        roughnessMap: this.textures.rRoof,
        aoMap: this.aoRoof,
    });

    mConcrete = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: this.textures.tConcrete,
        normalMap: this.textures.nConcrete,
        roughnessMap: this.textures.rConcrete,
        aoMap: this.textures.aoConcrete,
    });

    /**
     * Creates an extruded triangle shape
     * @returns {THREE.Geometry}
     */
    createRoofPoint() {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(4, 2);
        shape.lineTo(8, 0);
        shape.lineTo(0, 0);
        
        const extrudeSettings = {
            steps: 2,
            depth: 0.2,
            bevelEnabled: false,
        };

        return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    }

    createStructure() {
        let geometryWall1 = new THREE.BoxGeometry(8, 4, 0.2);
        let geometryWall2 = new THREE.BoxGeometry(0.2, 4, 8);
        let geometryRoofSupport = this.createRoofPoint();
        let geometryRoof = new THREE.BoxGeometry(8.5, 0.2, 5.5);

        // Create walls
        let wall1 = new THREE.Mesh(geometryWall1, this.mBricks);
        let wall2 = new THREE.Mesh(geometryWall2, this.mBricks);
        let wall3 = new THREE.Mesh(geometryWall1, this.mBricks);
        let wall4 = new THREE.Mesh(geometryWall2, this.mBricks);
        wall1.position.set(...this.applyPosition(0, 2, 0));
        wall2.position.set(...this.applyPosition(4, 2, 4));
        wall3.position.set(...this.applyPosition(0, 2, 8));
        wall4.position.set(...this.applyPosition(-4, 2, 4));

        // Create roof support
        let roofSupport1 = new THREE.Mesh(geometryRoofSupport, this.mBricks);
        let roofSupport2 = new THREE.Mesh(geometryRoofSupport, this.mBricks);
        roofSupport1.position.set(...this.applyPosition(-4, 4, -0.1));
        roofSupport2.position.set(...this.applyPosition(-4, 4, 7.9));

        // Create roof
        let roof1 = new THREE.Mesh(geometryRoof, this.mRoof);
        roof1.position.set(...this.applyPosition(2.4, 4.8, 4));
        roof1.rotateY(1.5708);
        roof1.rotateX(0.48);
        let roof2 = new THREE.Mesh(geometryRoof, this.mRoof);
        roof2.position.set(...this.applyPosition(-2.4, 4.8, 4));
        roof2.rotateY(-1.5708);
        roof2.rotateX(0.48);

        // Create foundation
        let foundation = new THREE.Mesh(new THREE.BoxGeometry(8, 2, 8), this.mConcrete);
        foundation.position.set(...this.applyPosition(0, -1, 4));

        this.scene.add(wall1);
        this.scene.add(wall2);
        this.scene.add(wall3);
        this.scene.add(wall4);
        this.scene.add(roofSupport1);
        this.scene.add(roofSupport2);
        this.scene.add(roof1);
        this.scene.add(roof2);
        this.scene.add(foundation);
        
        console.log("createStructure");
    }
}