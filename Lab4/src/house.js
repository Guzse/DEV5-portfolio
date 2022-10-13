import * as THREE from 'three';
import Textures from './textures';
export default class House {
    constructor(scene) {
        this.scene = scene;
        this.createStructure();
    }

    textures = new Textures();

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
        let geometry1 = new THREE.BoxGeometry(8, 4, 0.2);
        let wall1 = new THREE.Mesh(geometry1, this.mBricks);
        wall1.position.set(0, 2, 0);

        let geometry2 = new THREE.BoxGeometry(0.2, 4, 8);
        let wall2 = new THREE.Mesh(geometry2, this.mBricks);
        wall2.position.set(4, 2, 4);

        let geometry3 = new THREE.BoxGeometry(8, 4, 0.2);
        let wall3 = new THREE.Mesh(geometry3, this.mBricks);
        wall3.position.set(0, 2, 8);
        
        let geometry4 = new THREE.BoxGeometry(0.2, 4, 8);
        let wall4 = new THREE.Mesh(geometry4, this.mBricks);
        wall4.position.set(-4, 2, 4);

        let geometry5 = this.createRoofPoint();
        let wallPoint1 = new THREE.Mesh(geometry5, this.mBricks);
        wallPoint1.position.set(-4, 4, -0.1);

        let geometry6 = this.createRoofPoint();
        let wallPoint2 = new THREE.Mesh(geometry6, this.mBricks);
        wallPoint2.position.set(-4, 4, 7.9);

        let cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        let cube = new THREE.Mesh(cubeGeometry, new THREE.MeshLambertMaterial({ color: 0xff00ff }));
        this.scene.add(cube);

        this.scene.add(wall1);
        this.scene.add(wall2);
        this.scene.add(wall3);
        this.scene.add(wall4);
        this.scene.add(wallPoint1);
        this.scene.add(wallPoint2);
        
        console.log("createStructure");
    }
}