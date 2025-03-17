<template>
    <div class="relative bg-dark-pattern w-full h-screen flex items-center justify-center">
      
      <!-- Content -->
      <div class="text-center text-white">
        <h1 class="text-5xl md:text-6xl font-semibold">Technical <br> Specifications</h1>
      </div>
  
      <!-- Floating Image Elements -->
      <img src="" alt="Camera"
        class="absolute bottom-10 right-20 w-48 md:w-60 drop-shadow-2xl">
      
      <img src="" alt="Cable"
        class="absolute bottom-5 right-40 w-36 md:w-52 rotate-12 drop-shadow-xl">
  
    </div>
    <img src="" alt="Neon Image"
     class="w-40 h-40 rounded-full ring-4 ring-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">

  </template>
  
  <style scoped>
  /* Background Grid Pattern */
  .bg-dark-pattern {
    background-color: #0D0D0D; /* Dark theme */
    background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(to right, rgba(255,255,255,0.02), rgba(0,0,0,0.1));
    background-size: 25px 25px, 100% 100%;
    background-blend-mode: multiply;
  }
  
  /* Soft Light Overlay */
  .bg-dark-pattern::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 10%, transparent 70%);
    transform: translate(-50%, -50%);
    z-index: 0;
  }
  
  /* Ensure the content is above the lighting */
  .text-center {
    position: relative;
    z-index: 10;
  }
  </style>
  