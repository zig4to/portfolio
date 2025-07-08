<template>
  <!-- Column Layout for Bar + Logo -->
  <div ref="rectangleContainer" class="flex flex-col items-center justify-end">
    
    <!-- Progress Bar Container -->
    <div 
      class="flex items-end justify-start overflow-hidden"
      :class="{
        'h-[200px] w-[20px]': isSmallScreen,
        'md:h-[300px] md:w-[25px]': isMediumScreen,
        'lg:h-[300px] lg:w-[30px]': isLargeScreen,
        'xl:h-[400px] xl:w-[40px]': isXLargeScreen
      }"
    >
      <div 
        ref="rectangle" 
        class="bg-[#38BDF8] opacity-85 transition-all duration-[3000ms] rounded-sm"
        :class="{
          'h-[0%] w-[20px]': isSmallScreen,
          'md:h-[0%] md:w-[25px]': isMediumScreen,
          'lg:h-[0%] lg:w-[35px]': isLargeScreen,
          'xl:h-[0%] xl:w-[40px]': isXLargeScreen
        }"
      >
      </div>
    </div>

    <!-- Logo Below Progress Bar -->
    <div class="mt-4">
      <img src="/src/assets/logos/skillslider/logo/tailwind.svg" 
      alt="Logo" 
        class="w-7 h-7 mt-5
               md:w-9 md:h-9 
               lg:w-12 lg:h-12 
               xl:w-14 xl:h-14 object-contain">
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
    const isLargeScreen = computed(() => screenWidth.value >= 1024 && screenWidth.value < 1280);
    const isXLargeScreen = computed(() => screenWidth.value >= 1280);

  // Function to update screen width
  const updateScreenSize = () => {
      screenWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", updateScreenSize);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                if (rectangle.value) {
                  if (isSmallScreen.value) {
                    rectangle.value.style.height = "40%";
                  } else if (isMediumScreen.value) {
                    rectangle.value.style.height = "40%";
                  } else if (isLargeScreen.value) {
                    rectangle.value.style.height = "40%";
                  } else if (isXLargeScreen.value) {
                    rectangle.value.style.height = "40%";
                  }
                }
              }, 1800);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (rectangleContainer.value) {
        observer.observe(rectangleContainer.value);
      }
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateScreenSize);
    });

    return {
      rectangle,
      rectangleContainer,
      isSmallScreen,
      isMediumScreen,
      isLargeScreen,
      isXLargeScreen
    };
  },
};
</script>