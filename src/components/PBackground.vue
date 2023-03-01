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
import { onMounted, ref, watch } from "vue";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { useRoute } from "vue-router";
import { useWindowSize } from "@vueuse/core";

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
const repartitionX = ref(15);
const repartitionY = ref(15);
const count = ref(255);
const split = ref(0);
const curtains = ref(0);
const height = ref(13);
const route = useRoute();
const { height: windowHeight, width: windowWidth } = useWindowSize();

if (windowWidth.value > 1680){
    repartitionX.value = 18;
    repartitionY.value = 13;
    count.value = 400;
    split.value = 6;
    curtains.value = 10;
    height.value = 13;
}
else if (windowWidth.value <= 1680 && windowWidth.value > 1200){
    repartitionX.value = 11;
    repartitionY.value = 11;
    count.value = 240;
    split.value = 6;
    curtains.value = 10;
    height.value = 13;
}
else if (windowWidth.value <= 1200 && windowWidth.value > 800){
    repartitionX.value = 9;
    repartitionY.value = 9;
    count.value = 150;
    split.value = 6;
    curtains.value = 10;
    height.value = 13;
}
else if (windowWidth.value <= 800 && windowWidth.value > 400){
    repartitionX.value = 7;
    repartitionY.value = 8;
    count.value = 180;
    split.value = 6;
    curtains.value = 10;
    height.value = 12;
}
else {
    repartitionX.value = 6;
    repartitionY.value = 8;
    count.value = 70;
    split.value = 6;
    curtains.value = 10;
    height.value = 11;
}


const material = new THREE.MeshPhysicalMaterial({
    color: 0xe0b65c,
    metalness: 1,
    reflectivity: 0.8,
    roughness: 0
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
    const random = 1 - (Math.pow(Math.random(), 2) - 0.7);
    return sign * (random * max);
}

function getRandomX(max: number, index: number, count: number) {

    const sign = index > count / 2 ? 1 : -1;
    //const random = 1 - (Math.pow(Math.random(), 2) - 0.7);
    const random = 1 - (Math.random());
    return sign * (random * max);
}

function getRandomY(max: number, positive?: boolean) {

    const sign = positive ? 1 : Math.sign(0.5 - Math.random());
    //const random = 1 - (Math.pow(Math.random(), 2));
    const random = 1 - (Math.random());
    return sign * (random * max);
}

const meshes: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>[] = [];
const customMesh: number[] = [];
const initialX: number[] = [];
for (let i = 0; i < count.value; i++) {
    const random = Math.floor(getRandom(3));
    customMesh.push(random);
    const mesh = new THREE.Mesh(geometry, material);
    const x = getRandomX(repartitionX.value,i,count.value);
    const y = getRandomY(repartitionY.value);
    const z = -getRandom(4, true);
    initialX.push(x);
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



const camera = new THREE.PerspectiveCamera(75, windowWidth.value / windowHeight.value, 0.1, 100);
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
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera);

    const clock = new THREE.Clock();
    const tick = () => {
        // Time
        watch(() => windowWidth.value, () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.render(scene, camera);
        });
        const delta = clock.getDelta();
        const elapsedTime = clock.elapsedTime;
        let index = 0;
        for (const mesh of meshes) {
            const deltaDistance = Math.abs(initialX[index] - mesh.position.x);
            if (mesh.position.y < -height.value){
                mesh.position.y += 2 * height.value;
            }
            if (route.name !== "home" && route.name){
                const splitSpeed = curtains.value - deltaDistance;
                if (initialX[index] < 0 && Math.abs(initialX[index] - mesh.position.x) < curtains.value){
                    mesh.position.x -= delta * (splitSpeed * Math.abs(customMesh[index] * 4 + 1) / 30);
                }
                if (initialX[index] > 0 && Math.abs(initialX[index] - mesh.position.x) < curtains.value){
                    mesh.position.x += delta * (splitSpeed * Math.abs(customMesh[index] * 4 + 1) / 30);
                }
            }
            else {
                const gatherSpeed = deltaDistance;
                if (initialX[index] < 0 && mesh.position.x < initialX[index]){
                    mesh.position.x += delta * (gatherSpeed * Math.abs(customMesh[index] * 4 + 1) / 30) ;
                }
                if (initialX[index] > 0 && mesh.position.x > initialX[index]){
                    mesh.position.x -= delta * (gatherSpeed * Math.abs(customMesh[index] * 4 + 1) / 30) ;
                }
            }
            switch (customMesh[index]) {
            case -1:
                mesh.rotation.y = -elapsedTime * 0.2;
                mesh.position.y -= delta * 1.25;
                break;
            case -2:
                mesh.rotation.z = -elapsedTime * 0.3;
                mesh.position.y -= delta * 1.5;
                break;
            case -3:
                mesh.rotation.x = -elapsedTime * 0.1;
                mesh.position.y -= delta * 2.25 ;
                break;
            case 1:
                mesh.rotation.y = elapsedTime * 0.2;
                mesh.position.y -= delta * 2 ;
                break;
            case 2:
                mesh.rotation.z = elapsedTime * 0.4 ;
                mesh.position.y -= delta;
                break;
            case 3:
                mesh.rotation.x = elapsedTime * 0.3;
                mesh.position.y -= delta * 0.75 ;
                break;
            default :
                mesh.rotation.x = elapsedTime * 0.2;
                mesh.position.y -= delta * 1.25;
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

</script>

<style scoped lang="scss">
canvas {
    margin: 0;
    position: absolute;
}
</style>
