<template>
    <!-- Column Layout for Bar + Logo -->
    <div ref="rectangleContainer" class="flex flex-col items-center justify-end mb-18 space-y-1">
      
      <!-- Top Text (100) -->
      <div class="text-[9px]">100</div>
  
      <!-- Progress Bar Container -->
      <div class="h-[145px] w-[2px] flex items-center justify-start overflow-hidden">
        <div class="h-full w-full bg-[#002C41] opacity-85 transition-all duration-[3000ms]"></div>
      </div>
  
      <!-- Bottom Text (10) -->
      <div class="text-[9px]">10</div>
  
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
                  rectangle.value.classList.add("h-[100%]"); // Expands after delay
                }, 100); // Delay for 2000ms (1 second)
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