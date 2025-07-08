<template>
  <div class="bg-modernblack w-full">
    <div
      id="projects"
      class="container mx-auto p-5 scroll-mt-12 bg-modernblack xl:max-w-[1200px] md:py-20 lg:py-30"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-center place-items-center w-full">

        <!-- Title -->
        <div class="text-5xl md:text-7xl lg:text-[100px] 2xl:text-[130px] font-medium lg:font-bold text-primary md:self-center lg:self-end lg:mr-[100px] lg:mb-12 mx-4">
          <span class="text-primary-stroke-light text-transparent whitespace-nowrap lg:-mr-20 2xl:-ml-40">
            my <span class="text-bela">recent<br><span class="block md:hidden">projects</span></span>
          </span>
        </div>

        <!-- Project 1 -->
        <div class="flex-center mx-auto neon-glow-small img-animate w-full max-w-[400px] 2xl:max-w-[500px] aspect-[3/2] sm:mx-4 rounded-[80px] relative group">
          <img src="/src/assets/images/projects/3dgarage.png" alt="3DGarage Project" class="w-full h-full object-cover rounded-md">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p class="text-bela text-2xl font-semibold">Webstore - 3DGarage</p>
            <p class="text-bela text-lg font-semibold">offline</p>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="flex-center mx-auto neon-glow-small img-animate w-full max-w-[400px] 2xl:max-w-[500px] aspect-[3/2] sm:mx-4 rounded-[80px] relative group">
          <img src="/src/assets/images/projects/janez.png" alt="Painting Company Project" class="w-full h-full object-cover rounded-md">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p class="text-bela text-2xl font-semibold">Webpage for Painting company</p>
            <p class="text-bela text-lg font-semibold">offline</p>
          </div>
        </div>

        <!-- Decorative Text: design -->
        <div class="hidden md:block text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold md:self-center">
          <span class="text-primary-stroke-light">design</span>.
        </div>

        <!-- Decorative Text: projects -->
        <div class="hidden md:block text-primary-stroke-light2 opacity-30 font-bold md:text-[180px] md:-mr-[400px] lg:text-[200px] xl:-mr-[500px] xl:text-[250px] md:self-center">
          projects
        </div>

        <!-- Project 3 -->
        <div class="flex-center mx-auto neon-glow-small img-animate img-slide-right w-full max-w-[400px] 2xl:max-w-[500px] aspect-[3/2] sm:mx-4 rounded-[80px] relative group">
          <img src="/src/assets/images/projects/business.png" alt="Business Project" class="w-full h-full object-cover rounded-md">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p class="text-bela text-2xl font-semibold">Webpage for personal business</p>
            <p class="text-bela text-md font-semibold">Work in progress</p>
          </div>
        </div>

        <!-- Project 4 Placeholder -->
        <div class="flex-center mx-auto neon-glow-small img-animate img-slide-right w-full max-w-[250px] 2xl:max-w-[500px] aspect-[3/2] sm:mx-4 rounded-[60px] relative group">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex-center opacity-0 rounded-[60px] transition-opacity duration-300 group-hover:opacity-100">
            <p class="text-bela text-2xl 2xl:text-4xl font-medium">More projects coming soon...</p>
          </div>
        </div>

        <!-- More Projects Link -->
        <div class="flex justify-between items-end w-full md:max-w-[550px] md:aspect-[3/2]">
          <div class="flex items-center">
            <span class="text-5xl lg:text-7xl font-bold text-white opacity-10 rotate-90 pt-28">Web.</span>
          </div>
          <router-link to="/projects" class="flex neon-text items-center text-lg lg:text-2xl 2xl:text-4xl text-bela pb-10 cursor-pointer">
            <span class="text-4xl lg:text-4xl 2xl:text-6xl font-bold opacity-80">more</span> projects
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      document.querySelectorAll(".img-animate").forEach((box) => {
        gsap.fromTo(
          box,
          { y: 150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });
  },
};
</script>

<style scoped>
/* Add custom animations or styles here if needed */
</style>
