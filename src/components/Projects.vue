<template>
  <!-- Full-width background wrapper -->
  <div class="bg-modernblack w-full">
    <div id="projects" class="container bg-modernblack mx-auto px-5 scroll-mt-16 xl:max-w-[1200px] py-12 md:py-20 lg:py-30">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 text-center w-full place-items-center"> 

        <!-- Row 1 -->
        <div class="text-5xl font-medium lg:font-bold text-primary md:self-center lg:self-end lg:mr-[100px] lg:mb-12 mx-4">
          <span class="whitespace-nowrap text-primary-stroke-light text-transparent md:text-7xl lg:-mr-20 lg:text-[100px] 2xl:text-[130px] 2xl:-ml-40">
            my <span class="text-bela font-medium lg:font-bold">recent <br> 
              <span class="block md:hidden">projects</span>
            </span>
          </span>
        </div>

        <div class="flex-center mx-auto neon-purple-small w-full max-w-[400px] 2xl:max-w-[500px] aspect-[3/2] sm:mx-4 rounded-[100px] img-slide-right ">
          <img src="/src/assets/images/projects/image3.png" alt="Description" class="w-full h-full object-cover rounded-md">
        </div>

        <!-- Row 2 -->
        <div class="flex-center mx-auto neon-purple-small w-full max-w-[400px] 2xl:max-w-[500px] aspect-[3/2] sm:mx-4 rounded-[100px] img-slide-left">
          <img src="/src/assets/images/projects/image4.png" alt="Description" class="w-full h-full object-cover rounded-md">
        </div> 
        <div class="hidden md:block text-5xl font-bold md:self-center md:text-7xl lg:text-8xl 2xl:text-9xl">
          <span class="text-primary-stroke-light">design</span>.
        </div>

        <div class="hidden md:block text-5xl text-primary-stroke-light2 opacity-30 font-bold 
        md:self-center md:text-[180px] md:-mr-[400px] lg:text-[200px] xl:-mr-[500px] xl:text-[350px]">
          projects
        </div>

        <div class="flex justify-center neon-purple-small mx-auto w-full max-w-[400px] 2xl:max-w-[500px] aspect-[3/2] sm:mx-4 rounded-[100px] img2-slide-right">
          <img src="/src/assets/images/projects/image5.png" alt="Description" class="w-full h-full object-cover rounded-md">
        </div> 

        <!-- Row 4 -->
        <div class="flex justify-center mx-auto neon-purple-small w-full max-w-[400px] 2xl:max-w-[500px] aspect-[3/2] sm:mx-4 rounded-[100px] img2-slide-left">
          <img src="/src/assets/images/projects/image7.png" alt="Description" class="w-full h-full object-cover rounded-md">
        </div> 

        <div class="flex justify-between items-end w-full md:max-w-[550px] md:aspect-[3/2]">
          <div class="flex items-center">
            <span class="text-5xl font-bold text-white rotate-90 opacity-10 pt-28 lg:text-7xl">Web.</span>
          </div> 
          <router-link to="/projects" 
            class="flex neon-text items-center text-lg text-bela pb-10 lg:text-2xl 2xl:text-4xl 
                  cursor-pointer hover:scale-110 transition-transform duration-300 ease-out">
            <span class="text-4xl font-bold opacity-80 lg:text-4xl 2xl:text-6xl">more</span> projects
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Ensure images start hidden before animation */

</style>

<script>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Function to animate images sliding from the bottom
      const animateImagesFromBottom = (selector) => {
        gsap.fromTo(
          selector,
          { y: 200, opacity: 0, visibility: "visible" }, // Start from below
          {
            y: 0, // Move to normal position
            opacity: 1, // Fade in
            duration: 2, // Animation duration
            ease: "power2.out", // Smooth easing
            scrollTrigger: {
              trigger: selector,
              start: "top 80%", // Start when 80% in viewport
              toggleActions: "play none none none", // Only play once
            },
          }
        );
      };

      // Apply animation to all images
      animateImagesFromBottom(".img-slide-right");
      animateImagesFromBottom(".img-slide-left");
      animateImagesFromBottom(".img2-slide-right");
      animateImagesFromBottom(".img2-slide-left");
    });
  },
};
</script>
