<template>
  <div id="projects" class="container bg-modernblack mx-auto px-5 py-8 scroll-mt-16 -mb-80 max-w-[900px] my-12">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 lg:space-y-20 text-center w-full place-items-center"> 

      <!-- Row 1 -->
      <div class="text-5xl font-bold text-gray-900 md:self-end mx-4 md:mb-20">
        <span class="whitespace-nowrap text-primary-stroke text-transparent md:text-6xl lg:text-8xl relative lg:-left-20">
          my <span class="text-primary">recent</span>
        </span>
      </div>
      <div class="flex-center shadow-custom mx-auto w-full max-w-[400px] aspect-[3/2] sm:mx-4 rounded-[100px] img-slide-right">
        <img src="/src/assets/images/projects/image3.png" alt="Description" class="w-full h-full object-cover rounded-md">
      </div>

      <!-- Row 2 -->
      <div class="flex justify-center mx-auto w-full max-w-[400px] aspect-[3/2] sm:mx-4 rounded-lg relative md:-top-24 img-slide-left">
        <img src="/src/assets/images/projects/image4.png" alt="Description" class="w-full h-full object-cover rounded-md">
      </div> 
      <div class="text-5xl font-bold md:self-start text-gray-900 md:text-7xl lg:text-8xl">
        <span class="text-primary-stroke text-transparent">design</span>.
      </div>

      <!-- Row 3 -->
      <div class="text-5xl text-primary font-bold relative md:self-start md:-top-20 -top-6 md:text-7xl lg:text-8xl">
        projects
      </div>
      <div class="flex justify-center shadow-custom mx-auto w-full max-w-[400px] aspect-[3/2] sm:mx-4 rounded-lg relative md:-top-40 lg:-top-40 img2-slide-right">
        <img src="/src/assets/images/projects/image5.png" alt="Description" class="w-full h-full object-cover rounded-md">
      </div> 

      <!-- Row 4 -->
      <div class="flex justify-center shadow-custom mx-auto w-full max-w-[400px] aspect-[3/2] sm:mx-4 rounded-lg relative md:self-start md:-top-60 lg:-top-60 img2-slide-left">
        <img src="/src/assets/images/projects/image6.png" alt="Description" class="w-full h-full object-cover rounded-md">
      </div> 

      <div class="flex justify-between items-end w-full md:max-w-[550px] md:aspect-[3/2] relative md:-top-[200px] lg:-top-[200px]">
        <!-- Align "Web." to the left-bottom -->
        <div class="flex items-center">
          <span class="text-5xl font-bold text-gray-900 rotate-90 opacity-10 pt-28 lg:text-7xl">Web.</span>
        </div> 
        <!-- Align "more projects" to the right-bottom -->
        <router-link to="/projects" class="flex items-center text-lg text-primary pb-10 lg:text-2xl cursor-pointer hover:underline">
          <span class="text-4xl font-bold text-primary lg:text-4xl">more</span> projects
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure images start hidden before animation */
.img-slide-right,
.img-slide-left {
  opacity: 0;
  visibility: hidden;
}
</style>

<script>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      const animateImages = (selector, xValue) => {
        gsap.fromTo(
          selector,
          { x: xValue, opacity: 0, visibility: "visible" }, // Start off-screen
          {
            x: 0, // Slide into place
            opacity: 1, // Fade in
            duration: 2, // Animation speed
            ease: "power2.out", // Smooth easing
            scrollTrigger: {
              trigger: selector,
              start: "top 70%", // Animation starts when image is 85% in viewport
              toggleActions: "play none none none", // Only plays once
            },
          }
        );
      };

      // Slide images from right
      animateImages(".img-slide-right", 200);
      animateImages(".img2-slide-right", 200);

      // Slide images from left
      animateImages(".img-slide-left", -200);
      animateImages(".img2-slide-left", -200);
    });
  },
};
</script>

<style>
html, body {
  overflow-x: hidden;
}
</style>

