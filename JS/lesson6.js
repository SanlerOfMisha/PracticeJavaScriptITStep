import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 1.5, 4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(3, 5, 4);
scene.add(directionalLight);

const loader = new GLTFLoader();
const info = document.getElementById("info");

loader.load(
    "../models/scene.gltf",
    (gltf) => {
        const model = gltf.scene;

        model.scale.set(2, 2, 2);
        model.position.set(0, 0, 0);
        scene.add(model);

        if (info) {
            info.textContent = "Model loaded";
        }
    },
    (progress) => {
        const loaded = progress.loaded;
        const total = progress.total;

        if (total > 0) {
            const percent = Math.round((loaded / total) * 100);
            console.log(`Loading ${percent}%`);
            if (info) {
                info.textContent = `Loading ${percent}%`;
            }
        }
    },
    (error) => {
        console.error("Model loading error:", error);
        if (info) {
            info.textContent = "Model loading error";
        }
    }
);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
