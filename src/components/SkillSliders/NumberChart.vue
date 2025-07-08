<template>
  <!-- Column Layout for Bar + Logo -->
  <div 
    ref="rectangleContainer" 
    class="flex flex-col items-center justify-end mb-16 space-y-1"
    :class="{
      'space-y-1': isSmallScreen,
      'md:mb-20 md:space-y-2': isMediumScreen,
      'lg:mb-20 lg:space-y-2': isLargeScreen,
      'xl:mb-24 xl:space-y-3': isXLargeScreen
    }"
  >
    
    <!-- Top Text (100) -->
    <div 
      class="font-semibold text-bela"
      :class="{
        'text-[9px]': isSmallScreen,
        'md:text-[12px]': isMediumScreen,
        'lg:text-[14px]': isLargeScreen,
        'xl:text-[16px]': isXLargeScreen
      }"
    >
      100
    </div>

    <!-- Progress Bar Container -->
    <div 
      class="flex items-center justify-start overflow-hidden"
      :class="{
        'h-[180px] w-[2px]': isSmallScreen,
        'md:h-[280px] md:w-[3px]': isMediumScreen,
        'lg:h-[300px] lg:w-[3.5px]': isLargeScreen,
        'xl:h-[380px] xl:w-[4px]': isXLargeScreen
      }"
    >
      <div 
        ref="rectangle" 
        class="bg-bela opacity-85 transition-all duration-[3000ms]"
        :class="{
          'h-[0px] w-full': true // Start hidden and animate in
        }"
      ></div>
    </div>

    <!-- Bottom Text (10) -->
    <div 
      class="font-semibold text-bela"
      :class="{
        'text-[9px]': isSmallScreen,
        'md:text-[12px]': isMediumScreen,
        'lg:text-[14px]': isLargeScreen,
        'xl:text-[16px]': isXLargeScreen
      }"
    >
      10
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

    // Screen Breakpoints
    const isSmallScreen = computed(() => screenWidth.value < 768); // Mobile
    const isMediumScreen = computed(() => screenWidth.value >= 768 && screenWidth.value < 1024); // Tablet
    const isLargeScreen = computed(() => screenWidth.value >= 1024 && screenWidth.value < 1280); // Desktop
    const isXLargeScreen = computed(() => screenWidth.value >= 1280); // XL desktop

    // Update screen size on resize
    const updateScreenSize = () => {
      screenWidth.value = window.innerWidth;
    };

    // Animate progress bar when visible
    onMounted(() => {
      window.addEventListener("resize", updateScreenSize);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                if (rectangle.value) {
                  rectangle.value.style.height = "100%";
                }
              }, 100);
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
