import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';


// =========================
// CANVAS
// =========================

const canvas = document.querySelector('#three-canvas');


// =========================
// SCENE
// =========================

const scene = new THREE.Scene();


// =========================
// CAMERA
// =========================

const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
);

camera.position.z = 5;


// =========================
// RENDERER
// =========================

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    canvas.clientWidth,
    canvas.clientHeight,
    false
);


// =========================
// OBJECT
// =========================

const geometry = new THREE.IcosahedronGeometry(1.2, 2);

const material = new THREE.MeshBasicMaterial({
    wireframe: true
});

const object = new THREE.Mesh(
    geometry,
    material
);

scene.add(object);


// =========================
// ANIMATION
// =========================

function animate() {

    requestAnimationFrame(animate);

    object.rotation.x += 0.003;
    object.rotation.y += 0.006;

    renderer.render(scene, camera);
}

animate();


// =========================
// RESIZE
// =========================

function resize() {

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (width === 0 || height === 0) {
        return;
    }

    camera.aspect = width / height;

    camera.updateProjectionMatrix();

    renderer.setSize(
        width,
        height,
        false
    );
}

window.addEventListener('resize', resize);

resize();