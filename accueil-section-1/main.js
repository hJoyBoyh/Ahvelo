/*
import * as THREE from '../node_modules/three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from '../node_modules/three/examples/jsm/loaders/OBJLoader.js';
*/

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
//import { OBJLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/OBJLoader.js";
//import { FBXLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/FBXLoader.js";
//import { HemisphereLight } from "three";

//import * as THREE from '../node_modules/three';
//Create a Three.JS Scene
let scene , camera, renderer;
function init(){
scene = new THREE.Scene();


//create a new camera with positions and angles
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer({antialias:true})

camera.position.z =2;

//hemisphereLight = new THREE.HemisphereLight(0xffffff,0x444444,1.0)
//hemisphereLight.position.set(0,1,0);
//scene.add(hemisphereLight)


//light = new THREE.DirectionalLight(0xffffff,1.0)
//light.position.set(0,1,0);
//scene.add(light)



renderer.setSize(window.innerWidth,window.innerHeight)
document.querySelector("#container3D").appendChild(renderer.domElement);


controls = new THREE.OrbitControls(camera,renderer.domElement) 

controls.addEventListener('change',renderer)


const fbxLoader= new THREE.FBXLoader();

fbxLoader.load('models/eye/bicybleFbx.fbx',(object)=>{
    scene.add(object)
    animate()
})





}
function animate(){
    renderer.render(scene,camera)
    requestAnimationFrame(animate)

    
}
init()