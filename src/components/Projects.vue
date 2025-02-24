<template>
  <div id="projects" class="flex-center container mx-auto px-5 py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-center w-full px-4"> 
      <!-- Added px-4 for extra horizontal spacing -->

      <!-- Row 1 -->
      <div class="text-5xl font-bold text-gray-900 md:self-center mx-4">
        <span class="text-primary-stroke text-white">
          my <span class="text-black">recent</span>
        </span>
      </div>
      <div class="mx-auto bg-gray-200 w-full max-w-[550px] aspect-[3/2] sm:mx-4 flex items-center justify-center">
        <img src="/src/assets/images/projects/image3.png" alt="Description" class="w-full h-full object-cover rounded-lg p-2">
      </div>

      <!-- Row 2 -->
      <div class="mx-auto bg-amber-100 w-full max-w-[550px] aspect-[3/2] sm:mx-4">
        <img src="/src/assets/images/projects/image4.png" alt="Description" class="w-full h-full object-cover rounded-lg p-2">
      </div> <!-- Brownish image -->
      <div class="text-5xl font-bold text-gray-900 md:self-center mx-4">
        <span class="text-primary-stroke text-white">design</span>.
      </div>

      <!-- Row 3 -->
      <div class="text-5xl font-bold text-gray-900 md:self-center mx-4">
        <span class="">projects.</span>
      </div>
      <div class="mx-auto bg-green-100 w-full max-w-[550px] aspect-[3/2] sm:mx-4">
        <img src="/src/assets/images/projects/image5.png" alt="Description" class="w-full h-full object-cover rounded-lg p-2">
      </div> <!-- Green image -->

      <!-- Row 4 -->
      <div class="mx-auto bg-blue-100 w-full max-w-[550px] aspect-[3/2] sm:mx-4">
        <img src="/src/assets/images/projects/image6.png" alt="Description" class="w-full h-full object-cover rounded-lg p-2">
      </div> <!-- Blue image -->
      <div class="grid grid-cols-2 md:grid-cols-2 sm:mx-4">
        <div class="flex items-center justify-start h-40 pt-20">
          <span class="text-5xl font-bold text-gray-900 md:self-center rotate-90 opacity-30">Web.</span>
        </div> 
        <div class="flex items-center justify-end h-40 pt-20">
          <span class="text-3xl font-bold text-gray-900 md:self-center">more</span>projects
        </div> 
      </div >

    </div>
  </div>
</template>
