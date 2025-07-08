<template>
  <div  id="about" class="relative flex-center flex-col items-center bg-modernblack min-h-fit py-32 px-8 scroll-mt-16">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center text-center gap-10">
        <h2 class="about-me-title text-4xl lg:text-5xl xl:text-7xl font-medium text-bela md:hidden">
            About <span class="text-primary-stroke-light">me</span>
          </h2>
        <!-- Left Column (Cropped Avatar) -->
        <!-- Avatar 2: visible on md and up, hidden on small -->
        <div class="hidden md:flex md:justify-center ml-20">
          <div class="w-[150px] h-[180px] md:w-[250px] md:h-[280px] lg:w-[280px] lg:h-[400px] xl:w-[280px] xl:h-[400px] overflow-hidden rounded-md">
            <img src="/src/assets/images/aboutme/avatar1.png" 
                alt="Profile Image" 
                class="w-full h-full object-cover object-center opacity-75">
          </div>
        </div>

        <!-- Avatar 4: visible only on small screens -->
        <div class="flex md:hidden justify-center">
          <div class="w-[150px] h-[180px] overflow-hidden">
            <img src="/src/assets/images/aboutme/avatar4.png" 
                alt="Profile Image" 
                class="w-full h-full object-cover object-center opacity-70 animate-spin " 
                style="animation-duration: 50s">
          </div>
        </div>



        <!-- Right Column (Text Content) -->
        <div class="text-center md:text-left font-light lg:leading-[1.1] lg:text-[25px] 2xl:space-y-14 text-lg text-bela max-w-xl md:max-w-md lg:max-w-2xl mx-auto space-y-8">
          <h2 class="about-me-title text-5xl lg:text-7xl font-medium text-bela hidden md:block">
            About <span class="text-primary-stroke-light">me</span>
          </h2>

          <p class="animated-text text">
            <span>I am passionate about web development and eager to create modern and user-friendly websites.</span>
          </p>
          <p class="animated-text">
            <span>My interests lie in both design and development, constantly striving for excellence, aesthetics, and an exceptional user experience.</span>
          </p>
          <p class="animated-text">
            <span>Currently, I am focusing on <strong>WordPress</strong> and <strong>Elementor</strong>, while also
            expanding my skills in design tools like <strong>Figma</strong> to enhance my projects.</span>
          </p>
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

      // Animate "About Me" heading (Slide from Right)
      gsap.fromTo(
        ".about-me-title",
        { opacity: 0, y: 80 }, // 👈 Slide up from bottom
        {
          opacity: 1,
          y: 0, // Settle into place
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-me-title",
            start: "top 90%", // Triggers when element hits 80% of viewport
            toggleActions: "play none none none",
          },
        }
      );

      // Animate paragraph text (Reveal Line by Line)
      document.querySelectorAll(".animated-text").forEach((textBlock) => {
        let lines = textBlock.querySelectorAll("span");

        gsap.fromTo(
          lines,
          { opacity: 0, y: 20 }, // Start invisible & slightly lower
          {
            opacity: 1,
            y: 0, // Slide up
            duration: 2,
            stagger: 0.5, // Delays between lines
            ease: "power2.out",
            scrollTrigger: {
              trigger: textBlock,
              start: "top 80%", // Animation starts when in viewport
              toggleActions: "play none none none",
            },
          }
        );
      });
    });
  },
};
</script>
