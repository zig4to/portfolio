<template>
    <!-- Column Layout for Bar + Logo -->
    <div ref="rectangleContainer" class="flex flex-col items-center justify-end">
      
      <!-- Progress Bar Container -->
      <div class="h-[200px] w-[20px] flex items-end justify-start overflow-hidden">
        <div ref="rectangle" class="h-[0px] w-[20px] bg-[#EACD37] opacity-85 transition-all duration-[3000ms] rounded-sm"></div>
      </div>

      <!-- Logo Below Progress Bar -->
      <div class="mt-4">
        <img src="/public/logos/skillslider/javascript.svg" alt="Logo" class="w-7 h-7 mt-5 object-contain">
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    setup() {
      const rectangle = ref(null);
      const rectangleContainer = ref(null);
  
      onMounted(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // 🔥 Add a delay before animation starts
                setTimeout(() => {
                  rectangle.value.classList.add("h-[30%]"); // Expands after delay
                }, 1600); // Delay for 2000ms (1 second)
              }
            });
          },
          { threshold: 0.5 } // Trigger animation when 50% of the text is visible
        );
  
        if (rectangleContainer.value) {
          observer.observe(rectangleContainer.value);
        }
      });
  
      return { rectangle, rectangleContainer };
    },
  };
  </script>