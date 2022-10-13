import * as THREE from "three";

export default class Light {
    constructor(scene, showHelper) {
        scene.add(this.ambientLight);

        this.directionalLight.position.set(0, 10, 0);
        scene.add(this.directionalLight);

        if (showHelper) scene.add(this.directionalLightHelper);
    }
    // Add ambient light
    ambientLight = new THREE.AmbientLight(0xccccff, 1);

    // Add directional light
    directionalLight = new THREE.DirectionalLight(0xffeecc, 2);

    // Add directional light helper
    directionalLightHelper = new THREE.DirectionalLightHelper(
        this.directionalLight,
        5
    );

    animate(t) {
        this.directionalLight.position.x = 1000 * Math.sin(t);
        this.directionalLight.position.y = 1000 * Math.cos(t);
        this.directionalLight.position.z = 500 * Math.cos(t);
    }
}
