import * as THREE from 'three';
export default class House {
    constructor() {

    }

    createStructure() {
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    }
}