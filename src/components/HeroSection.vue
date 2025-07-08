<template>
  <section id="home" class="flex-center bg-modernblack min-h-fit lg:min-h-screen relative overflow-hidden">
    <div class="container relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-6 max-w-[500px] md:max-w-[750px] lg:max-w-[950px] 2xl:max-w-[1350px] md:min-h-[500px]">

      <!-- Text Content -->
      <div class="flex flex-col justify-center text-bela my-10 md:mt-18">
        <p class="text-xl md:text-2xl 2xl:text-3xl font-light py-6 ml-1 text-center md:text-left">
          Hello. I'm Žiga
        </p>
        <h1 class="text-5xl md:text-6xl lg:text-[80px] 2xl:text-[100px] font-bold text-primary tracking-wide leading-[1.1] text-center md:text-left">
          Building 
          <span id="changing-text" class="text-primary-stroke-light text-transparent">Digital</span> 
          Solutions
        </h1>
      </div>

      <!-- Right Content -->
      <div class="flex-center md:mt-16">
        <div class="bg-gif flex-center w-full min-h-[300px] md:min-h-[250px] lg:min-h-[400px] lg:my-10 lg:rounded-xl neon-glow-small2">
          <h1 class="text-5xl font-bold text-stroke-hero text-transparent">Welcome</h1>
        </div>
      </div>

    </div>
  </section>
</template>



<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const words = ["Creative", "Modern", "Awesome"];
  const changingText = document.getElementById("changing-text");
  let index = 0;
  let loopCount = 0;

  const animateText = () => {
    gsap.to(changingText, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        changingText.textContent = words[index];
        index = (index + 1) % words.length;

        gsap.fromTo(changingText, { opacity: 0 }, { opacity: 1, duration: 0.5 });

        if (index === 0) {
          loopCount++;
          if (loopCount === 2) {
            setTimeout(() => {
              gsap.to(changingText, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                  changingText.textContent = "Digital";
                  gsap.fromTo(changingText, { opacity: 0 }, { opacity: 1, duration: 0.5 });
                },
              });
            }, 4000);
            return;
          }
        }

        setTimeout(animateText, 4000);
      },
    });
  };

  // Initial text setup
  changingText.textContent = "Digital";
  gsap.fromTo(changingText, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  setTimeout(animateText, 4000);
});
</script>
