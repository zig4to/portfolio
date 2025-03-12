<template>
    <section id="home" class="flex-center min-h-fit lg:min-h-screen bg-modernblack">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-6 max-w-[500px] md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1350px] md:min-h-[500px]">
        <!-- Left Column (Text Content) -->
        <div class="flex flex-col justify-center text-bela my-10 md:mt-18">
          <p class="flex text-center flex-col text-xl font-light py-6 ml-1
          md:text-left md:text-2xl 2xl:text-3xl">hello. I'm Žiga</p>
          <h1 class="
          text-5xl font-bold text-center
          md:text-6xl md:text-left
          lg:text-[80px] 
          2xl:text-[100px] 
          text-primary tracking-wide leading-[1.1] lg:leading-[1.1]">
            Building 
            <span id="changing-text" class="text-primary-stroke-light text-transparent">Digital</span> 
            Solutions
        </h1>
        </div>
        <!-- Right Column (Image or Additional Content) -->
        <div class="flex-center
        md:mt-16">
        <div class="bg-gif flex-center w-full min-h-[280px] 
        md:min-h-[250px] 
        lg:min-h-[400px] lg:my-10 lg:rounded-xl">
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
  let index = 0;
  let loopCount = 0;

  const animateText = () => {
    if (loopCount >= 2) {
      // Stop after 2 loops and keep "Digital"
      document.getElementById("changing-text").textContent = "Digital";
      return;
    }

    gsap.to("#changing-text", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.getElementById("changing-text").textContent = words[index];
        index = (index + 1) % words.length;

        gsap.fromTo("#changing-text", { opacity: 0 }, { opacity: 1, duration: 0.5 });

        if (index === 0) {
          loopCount++; // Increment loop count when a full cycle is completed

          if (loopCount === 1) {
            // After the first loop, show "Digital" for 5 seconds
            setTimeout(() => {
              gsap.to("#changing-text", {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                  document.getElementById("changing-text").textContent = "Digital";
                  gsap.fromTo("#changing-text", { opacity: 0 }, { opacity: 1, duration: 0.5 });

                  setTimeout(animateText, 5000); // Restart after 5 seconds
                },
              });
            }, 2000); // Wait 3 seconds after the last word before switching back to "Digital"
            return;
          }
        }

        setTimeout(animateText, 2000); // Continue changing words every 3 seconds
      },
    });
  };

  // Start with "Digital" visible for 3 seconds before animation begins
  setTimeout(animateText, 2000);
});
</script>



<style>
.pizza {
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(4,9,10,1) 73%, rgba(31,29,54,1) 100%);
}

</style>