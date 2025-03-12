<template>
  <div class="bg-modernblack w-full">
    <div id="about" class="flex-center mx-auto p-8 scroll-mt-16 max-w-[1000px] lg:h-screen">
      <div class="flex flex-col gap-8 text-center w-full px-4 space-y-2">
        
        <!-- About Me Title -->
        <div class="text-5xl lg:text-7xl font-medium text-bela mx-4">
          about
          <span class="text text-primary-stroke-light">me</span>
        </div>
        
        <!-- Profile Image -->
        <div class="flex-center">
          <div class="w-full max-w-[150px] aspect-square rounded-2xl overflow-hidden">
            <img src="/src/assets/images/aboutme/avatar4.avif" alt="Profile Image" class="w-full h-full object-cover">
          </div>
        </div>

        <!-- Description with Line-by-Line Animation -->
        <div class="lg:text-2xl 2xl:text-3xl 2xl:space-y-14 text-lg text-bela max-w-3xl md:max-w-md lg:max-w-3xl mx-auto p-2 space-y-8">
          <p class="animated-text">
            <span>I am passionate about web development and eager to create modern and user-friendly websites.</span>
          </p>
          <p class="animated-text">
            <span>My interests lie in both design and development, constantly striving for excellence, aesthetics,</span>
            <span>and an exceptional user experience.</span>
          </p>
          <p class="animated-text">
            <span>Currently, I am focusing on <strong>WordPress</strong> and <strong>Elementor</strong>, while also</span>
            <span>expanding my skills in design tools like <strong>Figma</strong> to enhance my projects.</span>
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

      const mm = gsap.matchMedia();

      mm.add("(max-width: 768px)", () => {
        // Mobile-specific settings
        document.querySelectorAll(".animated-text").forEach((textBlock) => {
          let lines = textBlock.querySelectorAll("span");
          
          gsap.from(lines, {
            opacity: 0,
            y: 20,
            duration: 1.5,
            stagger: 0.3,
            ease: "power1.out",
            scrollTrigger: {
              trigger: textBlock,
              start: "top 65%", // Later trigger for mobile
              toggleActions: "play none none none",
            },
          });
        });
      });

      mm.add("(min-width: 769px)", () => {
        // Desktop-specific settings
        document.querySelectorAll(".animated-text").forEach((textBlock) => {
          let lines = textBlock.querySelectorAll("span");
          
          gsap.from(lines, {
            opacity: 0,
            y: 20,
            duration: 2,
            stagger: 0.3,
            ease: "power1.out",
            scrollTrigger: {
              trigger: textBlock,
              start: "top 80%", // Sooner trigger for desktop
              toggleActions: "play none none none",
            },
          });
        });
      });
    });
  },
};
</script>
