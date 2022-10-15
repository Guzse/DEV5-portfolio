import * as THREE from 'three';
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
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
    mBricks = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: this.textures.tBricks,
        normalMap: this.textures.nBricks,
        roughnessMap: this.textures.rBricks,
        aoMap: this.textures.aoBricks,
        //displacementMap: this.textures.hBricks,
    });

    // Roof material
    mRoof = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: this.textures.tRoof,
        normalMap: this.textures.nRoof,
        roughnessMap: this.textures.rRoof,
        aoMap: this.aoRoof,
        displacementMap: this.textures.hRoof,
        displacementScale: 0.5,
    });

    mConcrete = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: this.textures.tConcrete,
        normalMap: this.textures.nConcrete,
        roughnessMap: this.textures.rConcrete,
        aoMap: this.textures.aoConcrete,
        displacementMap: this.textures.hConcrete,
        displacementScale: 0.2,
        displacementBias: 0.3,
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
        // Create shapes for the house
        let geometryWall1 = new THREE.BoxGeometry(8, 4, 0.2, 100, 100, 100);
        let geometryWall2 = new THREE.BoxGeometry(0.2, 4, 8, 100, 100, 100);
        let geometryRoofSupport = this.createRoofPoint();
        let geometryRoof = new THREE.PlaneGeometry(8.5, 5.5, 100, 100, 100);
        let geometryFoundation = new THREE.BoxGeometry(8, 2, 8, 100, 100, 100);
        let geometryCard = new THREE.BoxGeometry(4, 1, 0.2, 100, 100, 100);
        
        // Create walls
        let object = [
            new THREE.Mesh(geometryWall1, this.mBricks),
            new THREE.Mesh(geometryWall2, this.mBricks),
            new THREE.Mesh(geometryWall1, this.mBricks),
            new THREE.Mesh(geometryWall2, this.mBricks),
            new THREE.Mesh(geometryRoofSupport, this.mBricks),
            new THREE.Mesh(geometryRoofSupport, this.mBricks),
            new THREE.Mesh(geometryRoof, this.mRoof),
            new THREE.Mesh(geometryRoof, this.mRoof),
            new THREE.Mesh(geometryFoundation, this.mConcrete),
            new THREE.Mesh(geometryCard, new THREE.MeshPhongMaterial({color: 0xffffff})),
        ];
        // Position walls
        object[0].position.set(...this.applyPosition(0, 2, 0));
        object[1].position.set(...this.applyPosition(4, 2, 4));
        object[2].position.set(...this.applyPosition(0, 2, 8));
        object[3].position.set(...this.applyPosition(-4, 2, 4));

        // Position roof support
        object[4].position.set(...this.applyPosition(-4, 4, -0.1));
        object[5].position.set(...this.applyPosition(-4, 4, 7.9));

        // Position roof
        object[6].position.set(...this.applyPosition(2.4, 4.8, 4));
        object[6].rotateY(1.5708);
        object[6].rotateX(5.16617);
        object[6].material.side = THREE.DoubleSide;
        object[7].position.set(...this.applyPosition(-2.4, 4.8, 4));
        object[7].rotateY(-1.5708);
        object[7].rotateX(5.16617);
        object[7].material.side = THREE.DoubleSide;

        // Position foundation
        object[8].position.set(...this.applyPosition(0, -1, 4));

        // Position white card
        object[9].position.set(...this.applyPosition(0, 3.5, 8.1));

        object.forEach(obj => {
            obj.castShadow = true;
            obj.receiveShadow = true;
            this.scene.add(obj);
        });

        const fontLoader = new FontLoader();
        fontLoader.load("./fonts/optimer_bold.typeface.json", (font) => {
            const textGeometry = new TextGeometry("Gilian Sterckx", {
                font: font,
                size: 0.4,
                height: 0.02,
            });
            textGeometry.center();
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
            const topText = new THREE.Mesh(textGeometry, textMaterial);
            topText.position.set(0, 3.55, 8.2);
            this.scene.add(topText);
        });
    }
}