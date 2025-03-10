<template>
  <div id="projects" class="container mx-auto px-5 py-8 scroll-mt-16 -mb-80 max-w-[900px] my-12">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 lg:space-y-20 text-center w-full place-items-center"> 

      <!-- Row 1 -->
      <div class="text-5xl font-bold text-gray-900 md:self-end mx-4 md:mb-20">
        <span class="whitespace-nowrap text-primary-stroke text-transparent md:text-6xl lg:text-8xl relative lg:-left-20">
          my <span class="text-primary">recent</span>
        </span>
      </div>
      <div class="flex justify-center shadow-custom mx-auto w-full max-w-[400px] aspect-[3/2] sm:mx-4">
        <img src="/src/assets/images/projects/image3.png" alt="Description" class="w-full h-full object-cover rounded-2xl">
      </div>

      <!-- Row 2 -->
      <div class="flex justify-center shadow-custom mx-auto w-full max-w-[400px] aspect-[3/2] sm:mx-4 rounded-lg relative md:-top-24">
        <img src="/src/assets/images/projects/image4.png" alt="Description" class="w-full h-full object-cover rounded-2xl">
      </div> 
      <div class="text-5xl font-bold md:self-start text-gray-900 md:text-7xl lg:text-8xl">
        <span class="text-primary-stroke text-transparent">design</span>.
      </div>

      <!-- Row 3 -->
      <div class="text-5xl text-primary font-bold relative md:self-start md:-top-20 -top-6 md:text-7xl lg:text-8xl">
        projects
      </div>
      <div class="flex justify-center shadow-custom mx-auto w-full max-w-[400px] aspect-[3/2] sm:mx-4 rounded-lg relative md:-top-40 lg:-top-40">
        <img src="/src/assets/images/projects/image5.png" alt="Description" class="w-full h-full object-cover rounded-2xl">
      </div> 

      <!-- Row 4 -->
      <div class="flex justify-center shadow-custom mx-auto w-full max-w-[400px] aspect-[3/2] sm:mx-4 rounded-lg relative md:self-start md:-top-60 lg:-top-60">
        <img src="/src/assets/images/projects/image6.png" alt="Description" class="w-full h-full object-cover rounded-2xl">
      </div> 

      <div class="grid grid-cols-2 md:grid-cols-2 sm:mx-4 md:max-w-[550px] md:aspect-[3/2] relative md:self-start md:-top-[200px] lg:-top-[200px]">
        <!-- Align "Web." to the left-bottom -->
        <div class="flex items-center justify-start h-full">
          <span class="text-5xl font-bold text-gray-900 rotate-90 opacity-10 pt-28 lg:text-7xl">Web.</span>
        </div> 
        <!-- Align "moreprojects" to the right-bottom -->
        <div class="flex items-end justify-end h-full text-lg pr-3 text-primary pb-10 lg:text-2xl">
          <span class="text-4xl font-bold text-primary lg:text-4xl">more</span> projects
        </div> 
      </div>
    </div>
  </div>
</template>
