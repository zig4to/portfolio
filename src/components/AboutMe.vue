<template>
  <div class="bg-modernblack w-full">
    <div id="about" class="mx-auto p-8 scroll-mt-16 max-w-[800px] lg:max-w-[1200px] lg:h-screen-fit">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center text-center gap-10">
        <h2 class="about-me-title text-5xl lg:text-7xl font-medium text-bela md:hidden">
            About <span class="text-primary-stroke-light">me</span>
          </h2>
        <!-- Left Column (Cropped Avatar) -->
        <div class="flex-center md:justify-start">
          <div class="w-[200px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden 
                     border-purple-500 shadow-[0_0_20px_6px_rgba(168,85,247,0.7)]">
            <img src="/src/assets/images/aboutme/avatar4.avif" 
                alt="Profile Image" 
                class="w-full h-full object-cover object-center">
          </div>
        </div>

        <!-- Right Column (Text Content) -->
        <div class="text-center md:text-left font-light lg:leading-[1.1] lg:text-[30px] 2xl:space-y-14 text-lg text-bela max-w-xl md:max-w-md lg:max-w-2xl mx-auto space-y-8">
          <h2 class="about-me-title text-5xl lg:text-7xl font-medium text-bela hidden md:block">
            About <span class="text-primary-stroke-light">me</span>
          </h2>

          <p class="animated-text">
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
        { opacity: 0, x: 100 }, // Start off-screen to the right
        {
          opacity: 1,
          x: 0, // Slide into position
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-me-title",
            start: "top 80%", // Starts when 80% of the element is in viewport
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
              start: "top 85%", // Animation starts when in viewport
              toggleActions: "play none none none",
            },
          }
        );
      });
    });
  },
};
</script>
