import * as THREE from "three";

export default class Light {
    constructor(scene, showHelper) {
        scene.add(this.ambientLight);

        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.mapSize.width = 512; // default
        this.directionalLight.shadow.mapSize.height = 512; // default
        this.directionalLight.shadow.camera.near = 0.5; // default
        this.directionalLight.shadow.camera.far = 500; // default
        this.directionalLight.position.set(100, 100, 100);
        scene.add(this.directionalLight);

        if (showHelper) scene.add(this.directionalLightHelper);
    }
    // Add ambient light
    ambientLight = new THREE.AmbientLight(0xccccff, 0.5);

    // Add directional light
    directionalLight = new THREE.DirectionalLight(0xffeecc, 1.5);

    // Add directional light helper
    directionalLightHelper = new THREE.DirectionalLightHelper(
        this.directionalLight,
        5
    );
}
