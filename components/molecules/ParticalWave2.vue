<template>
    <div ref="container"></div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import * as THREE from 'three';
  
  const container = ref(null);
  let camera, scene, renderer, particles;
  let count = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;
  let amountX = 40, amountY = 40;
  let SEPARATION = window.innerWidth / amountX;
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  
  onMounted(() => {
    init();
    animate();
  
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize);
    document.removeEventListener('mousemove', onDocumentMouseMove);
  });


  
  function init() {
    

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    camera.position.z = 800;
    camera.position.y = 100;
  
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x171616); // Set the background color
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.value.appendChild(renderer.domElement);
  
    let numParticles = amountX * amountY;
    let positions = new Float32Array(numParticles * 3);
    let colors = new Float32Array(numParticles * 3);
    let color = new THREE.Color();
  
    for (let ix = 0, i = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        positions[i] = ix * SEPARATION - (amountX * SEPARATION) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION - (amountY * SEPARATION) / 2;
        i += 3;
      }
    }
  
    let geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    // geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
    let material = new THREE.PointsMaterial({
        size: 10,
        map: createCircleTexture('#ffe600', 100),
        transparent: true,
        depthWrite: false,
    });
  
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
  }
  
  function createCircleTexture(color, size) {
    let matCanvas = document.createElement('canvas');
    matCanvas.width = matCanvas.height = size;
    let matContext = matCanvas.getContext('2d');
    let texture = new THREE.Texture(matCanvas);
    let center = size / 2;
    matContext.beginPath();
    matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
    matContext.closePath();
    matContext.fillStyle = color;
    matContext.fill();
    texture.needsUpdate = true;
    return texture;
  }
  
  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 1; // Reduced division factor
    mouseY = (event.clientY - windowHalfY) / 1; // Reduced division factor
  }
  
  function animate() {
    requestAnimationFrame(animate);
  
    targetX = mouseX * 0.1; // Adjust multiplier for X-axis
    targetY = mouseY * 0.1; // Adjust multiplier for Y-axis

    camera.position.x += (targetX - camera.position.x) * 0.5; // Faster movement
    camera.position.y += (-targetY - camera.position.y) * 0.5; // Faster movement
    
    
    camera.lookAt(scene.position);

    let positions = particles.geometry.attributes.position.array;
  let i = 0;
  let waveFrequency = 0.2;
  let waveLength = 0.5;
  let waveHeightFTB = 50;
  let waveHeightRTL = 50;

  for (let ix = 0; ix < amountX; ix++) {
    for (let iy = 0; iy < amountY; iy++) {
      positions[i + 1] =
        Math.sin((ix + count) * waveFrequency) * waveHeightRTL +
        Math.sin((iy + count) * waveLength) * waveHeightFTB;
      i += 3;
    }
  }
  particles.geometry.attributes.position.needsUpdate = true;

  count += 0.1;
  renderer.render(scene, camera);
  }
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  