import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
    constructor(scene, renderer) {
        this.perspectiveCamera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.perspectiveCamera.position.set(0, 0, 10);

        // Add orbit controls
        const controls = new OrbitControls(this.perspectiveCamera, renderer.domElement);

        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 1;
        controls.maxDistance = 500;
    }
}
