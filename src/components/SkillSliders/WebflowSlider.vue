<template>
  <!-- Column Layout for Bar + Logo -->
  <div ref="rectangleContainer" class="flex flex-col items-center justify-end">
    
    <!-- Progress Bar Container -->
    <div 
      class="flex items-end justify-start overflow-hidden"
      :class="{
        'h-[200px] w-[20px]': isSmallScreen,
        'md:h-[300px] md:w-[25px]': isMediumScreen,
        'lg:h-[400px] lg:w-[40px]': isLargeScreen
      }"
    >
      <div 
        ref="rectangle" 
        class="bg-[#002C41] opacity-85 transition-all duration-[3000ms] rounded-sm"
        :class="{
          'h-[0%] w-[20px]': isSmallScreen,
          'md:h-[0%] md:w-[35px]': isMediumScreen,
          'lg:h-[0%] lg:w-[50px]': isLargeScreen
        }"
      >
      </div>
    </div>

    <!-- Logo Below Progress Bar -->
    <div class="mt-4">
      <img src="/src/assets/logos/skillslider/webflow.svg" alt="Logo" class="w-7 h-7 mt-5
      md:w-9 md:h-9 
      lg:w-14 lg:h-14 object-contain">
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, onUnmounted } from "vue";

export default {
setup() {
  const rectangle = ref(null);
  const rectangleContainer = ref(null);
  const screenWidth = ref(window.innerWidth);

  // 🔥 Compute screen breakpoints
  const isSmallScreen = computed(() => screenWidth.value < 768);
  const isMediumScreen = computed(() => screenWidth.value >= 768 && screenWidth.value < 1024);
  const isLargeScreen = computed(() => screenWidth.value >= 1024);

  // Function to update screen width
  const updateScreenSize = () => {
    screenWidth.value = window.innerWidth;
  };

  // Observe intersection and animate progress bar
  onMounted(() => {
    window.addEventListener("resize", updateScreenSize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (rectangle.value) {
                if (isSmallScreen.value) {
                  rectangle.value.style.height = "40%"; // Mobile height
                } else if (isMediumScreen.value) {
                  rectangle.value.style.height = "40%"; // Tablet height
                } else if (isLargeScreen.value) {
                  rectangle.value.style.height = "40%"; // Large screen height
                }
              }
            }, 2400);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (rectangleContainer.value) {
      observer.observe(rectangleContainer.value);
    }
  });

  // Cleanup event listener on unmount
  onUnmounted(() => {
    window.removeEventListener("resize", updateScreenSize);
  });

  return { rectangle, rectangleContainer, isSmallScreen, isMediumScreen, isLargeScreen };
},
};
</script>
