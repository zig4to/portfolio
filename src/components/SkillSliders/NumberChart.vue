<template>
  <!-- Column Layout for Bar + Logo -->
  <div 
    ref="rectangleContainer" 
    class="flex flex-col items-center justify-end mb-16 space-y-1"
    :class="{
      'space-y-1': isSmallScreen,
      'md:mb-20 md:space-y-2': isMediumScreen,
      'lg:mb-24 lg:space-y-3': isLargeScreen
    }"
  >
    
    <!-- Top Text (100) -->
    <div 
      class="font-semibold"
      :class="{
        'text-[9px]': isSmallScreen,
        'md:text-[12px]': isMediumScreen,
        'lg:text-[16px]': isLargeScreen
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
        'lg:h-[380px] lg:w-[4px]': isLargeScreen
      }"
    >
      <div 
        ref="rectangle" 
        class="bg-[#002C41] opacity-85 transition-all duration-[3000ms]"
        :class="{
          'h-[0px] w-full': true // Start hidden and animate in
        }"
      ></div>
    </div>

    <!-- Bottom Text (10) -->
    <div 
      class="font-semibold"
      :class="{
        'text-[9px]': isSmallScreen,
        'md:text-[12px]': isMediumScreen,
        'lg:text-[16px]': isLargeScreen
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

  // **Screen Breakpoints**
  const isSmallScreen = computed(() => screenWidth.value < 768); // <768px (Mobile)
  const isMediumScreen = computed(() => screenWidth.value >= 768 && screenWidth.value < 1024); // 768px - 1023px (Tablet)
  const isLargeScreen = computed(() => screenWidth.value >= 1024); // >=1024px (Large Screens)

  // Function to update screen width on resize
  const updateScreenSize = () => {
    screenWidth.value = window.innerWidth;
  };

  // **Intersection Observer for Animation**
  onMounted(() => {
    window.addEventListener("resize", updateScreenSize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (rectangle.value) {
                // Scale progress bar height dynamically
                if (isSmallScreen.value) {
                  rectangle.value.style.height = "100%";
                } else if (isMediumScreen.value) {
                  rectangle.value.style.height = "100%";
                } else if (isLargeScreen.value) {
                  rectangle.value.style.height = "100%";
                }
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

  // Cleanup event listener
  onUnmounted(() => {
    window.removeEventListener("resize", updateScreenSize);
  });

  return { rectangle, rectangleContainer, isSmallScreen, isMediumScreen, isLargeScreen };
},
};
</script>
