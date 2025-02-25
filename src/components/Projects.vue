<template>
  <div id="projects" class="flex-center container mx-auto px-5 py-8 scroll-mt-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-center w-full px-4"> 
      <!-- Added px-4 for extra horizontal spacing -->

      <!-- Row 1 -->
      <div class="text-5xl font-bold text-gray-900 md:self-center mx-4">
        <span class="text-primary-stroke text-transparent">
          my <span class="text-primary">recent</span>
        </span>
      </div>
      <div class="shadow-custom mx-auto w-full max-w-[550px] aspect-[3/2] sm:mx-4 flex items-center justify-center">
        <img src="/src/assets/images/projects/image3.png" alt="Description" class="w-full h-full object-cover rounded-2xl">
      </div>

      <!-- Row 2 -->
      <div class="shadow-custom mx-auto w-full max-w-[550px] aspect-[3/2] sm:mx-4 rounded-lg">
        <img src="/src/assets/images/projects/image4.png" alt="Description" class="w-full h-full object-cover rounded-2xl">
      </div> <!-- Brownish image -->
      <div class="text-5xl font-bold text-gray-900 md:self-center -mb-8">
        <span class="text-primary-stroke text-transparent">design</span>.
      </div>

      <!-- Row 3 -->
      <div class="text-5xl text-primary font-bold md:self-center">
        projects
      </div>
      <div class="shadow-custom mx-auto w-full max-w-[550px] aspect-[3/2] sm:mx-4 rounded-lg">
        <img src="/src/assets/images/projects/image5.png" alt="Description" class="w-full h-full object-cover rounded-2xl">
      </div> <!-- Green image -->

      <!-- Row 4 -->
      <div class="shadow-custom mx-auto w-full max-w-[550px] aspect-[3/2] sm:mx-4 rounded-lg">
          <img src="/src/assets/images/projects/image6.png" alt="Description" class="w-full h-full object-cover rounded-2xl">
      </div> <!-- Blue image -->
      <div class="grid grid-cols-2 md:grid-cols-2 sm:mx-4 md:max-w-[550px] md:aspect-[3/2] -mt-12">
          <!-- Align "Web." to the left-bottom -->
          <div class="flex items-center justify-start h-full">
              <span class="text-5xl font-bold text-gray-900 rotate-90 opacity-10 pl-10 pt-28 pr-5">Web.</span>
          </div> 
          <!-- Align "moreprojects" to the right-bottom -->
          <div class="flex items-end justify-end h-full text-lg pr-3 text-primary pb-10">
              <span class="text-4xl font-bold text-primary">more</span> projects
          </div> 
      </div>
    </div>
  </div>
</template>
