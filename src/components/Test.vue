<template>
    <div id="projects" class="relative container mx-auto px-5 py-16">
      <!-- Grid Structure -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full max-w-4xl mx-auto">
        
        <!-- Row 1: "my recent." (Title) -->
        <div class="relative text-3xl font-bold text-gray-900 md:self-center">
          <span class="whitespace-nowrap text-primary-stroke text-transparent md:text-6xl lg:text-6xl">
            my <span class="text-primary">recent</span>.
          </span>
        </div>
  
        <!-- Row 1: Top Right Image -->
        <div class="relative">
          <div class="shadow-custom w-full max-w-[250px] aspect-square bg-gray-200">
            <a href="https://yourwebsite.com/project1" target="_blank" class="shadow-custom mx-auto w-full max-w-[400px] aspect-[3/2] sm:mx-4 flex items-center justify-center rounded-2xl overflow-hidden">
            <img src="/src/assets/images/projects/image3.png" alt="Project 1" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
            </a>
          </div>
        </div>
  
        <!-- Row 2: Left - Yellow Box (Overlapping "my recent.") -->
        <div class="relative w-full">
          <div class="absolute -top-10 left-0 z-10 shadow-custom w-full max-w-[250px] aspect-square bg-yellow-200"></div>
        </div>
  
        <!-- Row 2: Right - "design." Text -->
        <div class="relative text-5xl font-bold text-gray-900 -mt-6">
          <span class="text-primary-stroke text-transparent">design</span>.
        </div>
  
        <!-- Row 3: "projects." Text -->
        <div class="text-5xl font-bold text-gray-900">
          <span class="text-primary">projects</span>.
        </div>
  
        <!-- Row 3: Green Image -->
        <div class="relative">
          <div class="shadow-custom w-full max-w-[250px] aspect-square bg-green-100"></div>
        </div>
  
        <!-- Row 4: Blue Image -->
        <div class="relative">
          <div class="shadow-custom w-full max-w-[250px] aspect-square bg-blue-100"></div>
        </div>
  
        <!-- Row 4: "Web." Rotated Text -->
        <div class="relative flex items-center justify-center h-full">
          <span class="text-5xl font-bold text-gray-900 rotate-90 opacity-100">Web.</span>
        </div>
  
        <!-- Bottom Right: "more projects" -->
        <div class="absolute bottom-0 right-0 text-lg text-primary flex flex-col items-end">
          <span class="text-4xl font-bold text-primary">more</span> projects
        </div>
  
      </div>
    </div>
  </template>
  