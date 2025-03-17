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
        <div class="flex-center md:mt-16">
          <div class="bg-gif flex-center w-full min-h-[300px] 
                      md:min-h-[250px] 
                      lg:min-h-[400px] lg:my-10 lg:rounded-xl
                      neon-glow-small2
                       hover:shadow-[0_0_25px_8px_rgba(168,85,247,0.8)] transition duration-300">
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
  const changingText = document.getElementById("changing-text");

  const animateText = () => {
    gsap.to("#changing-text", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        changingText.textContent = words[index];
        index = (index + 1) % words.length;

        gsap.fromTo("#changing-text", { opacity: 0 }, { opacity: 1, duration: 0.5 });

        if (index === 0) {
          loopCount++;

          if (loopCount === 2) {
            // Show "Digital" for 5 seconds after the second loop
            setTimeout(() => {
              gsap.to("#changing-text", {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                  changingText.textContent = "Digital";
                  gsap.fromTo("#changing-text", { opacity: 0 }, { opacity: 1, duration: 0.5 });

                  // After "Digital", Start Infinite Loop Including Digital
                  setTimeout(startInfiniteLoop, 5000);
                },
              });
            }, 2000);
            return;
          }
        }

        setTimeout(animateText, 2000);
      },
    });
  };

  // Function to Start Infinite Loop (Including "Digital")
  const startInfiniteLoop = () => {
    const infiniteWords = ["Creative", "Modern", "Awesome", "Digital"];
    let infiniteIndex = 0;

    const loopText = () => {
      gsap.to("#changing-text", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          changingText.textContent = infiniteWords[infiniteIndex];
          infiniteIndex = (infiniteIndex + 1) % infiniteWords.length;

          gsap.fromTo("#changing-text", { opacity: 0 }, { opacity: 1, duration: 0.5 });

          setTimeout(loopText, infiniteWords[infiniteIndex - 1] === "Digital" ? 5000 : 2000); // Show "Digital" for 5s
        },
      });
    };

    loopText();
  };

  // Start with "Digital" visible for 3 seconds before animation begins
  setTimeout(animateText, 2000);
});
</script>
