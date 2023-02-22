<template>
    <canvas ref="experience" />
</template>

<script lang="ts">
export default {
    name: "PBackground"
};
</script>

<script setup lang="ts">
import * as THREE from "three";
import { onMounted, ref } from "vue";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import background from "../assets/img/background.png";

const experience = ref<HTMLCanvasElement | null>(null);

const scene = new THREE.Scene();

const positionsArray = new Float32Array([
    -1, -0.865, 0,
    1, -0.865, 0,
    0, 0.865, 0,
    -1, -0.865, 0,
    0, 0.865, 0,
    1, -0.865, 0
]);

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", positionsAttribute);
geometry.computeVertexNormals();
const loader = new THREE.TextureLoader();
const envTexture = loader.load(background);
const repartition = ref(15);
const count = ref(255);

if (window.innerWidth > 1680){
    repartition.value = 15;
    count.value = 255;
}
else if (window.innerWidth <= 1680 && window.innerWidth > 1200){
    repartition.value = 15;
    count.value = 220;
}
else if (window.innerWidth <= 1200 && window.innerWidth > 800){
    repartition.value = 10;
    count.value = 70;
}
else if (window.innerWidth <= 800 && window.innerWidth > 400){
    repartition.value = 7;
    count.value = 50;
}
else {
    repartition.value = 6;
    count.value = 30;
}

envTexture.mapping = THREE.EquirectangularReflectionMapping;

const material = new THREE.MeshPhysicalMaterial({
    color: 0xe0b65c,
    metalness: 1,
    reflectivity: 0.8,
    roughness: 0

    //wireframe: true
});

material.ior = 1.7;
material.thickness = 0.5;
material.specularIntensity = 1;
material.clearcoat = 1;

material.sheen = 1;
material.sheenColor = new THREE.Color(0xe0b65c);
material.specularColor = new THREE.Color(0xe0b65c);
material.opacity = 0.9;
material.transparent = true;

function getRandom(max: number, positive?: boolean) {

    const sign = positive ? 1 : Math.sign(0.5 - Math.random());
    const random = 1 - Math.pow(Math.random(), 2);
    return sign * (random * max);
}

const meshes: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>[] = [];
const customMesh: any[] = [];
for (let i = 0; i < count.value; i++) {
    const random = Math.floor(getRandom(3));
    customMesh.push(random);
    const mesh = new THREE.Mesh(geometry, material);
    const x = getRandom(repartition.value);
    const y = getRandom(repartition.value);
    const z = -getRandom(4, true);
    mesh.position.set(x, y, z);
    const rotationX = Math.random() * Math.PI * 2;
    const rotationY = Math.random() * Math.PI * 2;
    const rotationZ = Math.random() * Math.PI * 2;
    mesh.rotation.x = rotationX;
    mesh.rotation.y = rotationY;
    mesh.rotation.z = rotationZ;
    mesh.scale.x = 0.8;
    mesh.scale.y = 0.8;
    mesh.scale.z = 0.8;
    meshes.push(mesh);
}


for (const mesh of meshes) {
    scene.add(mesh);
}

const materialPlane = new THREE.MeshPhysicalMaterial({
    color: 0x1b1a18
    //wireframe: true
});


/*
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5000, 5000),
    materialPlane
);
plane.rotation.x = - Math.PI * 2 ;
plane.position.z = -100;

scene.add(plane);*/


const sizes = {
    height: window.innerHeight,
    width: window.innerWidth
};


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 7;
scene.add(camera);


onMounted(() => {
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: experience.value as unknown as HTMLCanvasElement
    });
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomGenerator = pmremGenerator.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = roomGenerator.texture;


    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera);

    const clock = new THREE.Clock();
    const tick = () => {
        // Time
        const elapsedTime = clock.getElapsedTime();
        let index = 0;
        for (const mesh of meshes) {
            switch (customMesh[index]) {
            case -1:
                mesh.rotation.y = -elapsedTime * 0.1;
                break;
            case -2:
                mesh.rotation.z = -elapsedTime * 0.3;
                break;
            case -3:
                mesh.rotation.x = -elapsedTime * 0.2;
                mesh.rotation.y = -elapsedTime * 0.03;
                break;
            case 1:
                mesh.rotation.y = elapsedTime * 0.2;
                break;
            case 2:
                mesh.rotation.z = elapsedTime * 0.1;
                break;
            case 3:
                mesh.rotation.x = elapsedTime * 0.3;
                mesh.rotation.y = elapsedTime * 0.03;
                break;
            default :
                mesh.rotation.x = elapsedTime * 0.2;
                mesh.rotation.y = elapsedTime * 0.03;
            }
            index++;
            //mesh.rotation.y = elapsedTime;
        }
        // Update objects
        //cube.rotation.y = elapsedTime;
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    };
    tick();
});

/*
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


camera.position.z = 5;
window.addEventListener("dblclick", () => {
    if (!document.fullscreenElement){
        renderer.domElement.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }
});
const clock = new THREE.Clock();
const tick = () => {
    // Time
    const elapsedTime = clock.getElapsedTime();
    //cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};
tick();*/

</script>

<style scoped lang="scss">
canvas {
    margin: 0;
    position: absolute;
}
</style>
