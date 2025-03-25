<template>
  <footer class="w-full bg-modernblack shadow-inner relative ">
    <div class="container mx-auto flex flex-col items-center h-auto px-6 py-6  max-w-[1350px]">
      
      <!-- Footer Navigation (Auto Switch: Horizontal for LG+ & Vertical for MD-) -->
      <nav :class="footerClass">
        <a v-for="link in links" :key="link.id" :href="link.href" class="footer-link">
          {{ link.text }}
        </a>
      </nav>

      <!-- Social Icons -->
      <div class="flex space-x-4 mt-4 relative">
        <p class="text-sm text-center text-bela mt-2">
          © 2025 site.zigatomse. All rights reserved.
        </p>
        <!-- Bird Icon (Clickable) -->
        <div 
          class="text-bela hover:text-bela text-2xl cursor-pointer select-none"
          @click="showCloud"
        >
          🐦
        </div>

        <!-- Cloud Message -->
        <!-- Cloud Message -->
        <transition name="fade">
          <div 
            v-if="isCloudVisible" 
            class="absolute bottom-12 left-1/2 transform -translate-x-1/2 
                  bg-white text-gray-800 text-md px-8 py-3 
                  rounded-3xl shadow-xl min-w-[220px] w-auto"
          >
            Made by me with 
            <img src="/src/assets/logos/footer/vue.svg" 
                alt="GitHub Logo" 
                class="w-5 h-5 lg:w-5 lg:h-5 transition-transform hover:scale-110 inline-block">
          </div>
        </transition>

      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";

// Bird message state
const isCloudVisible = ref(false);

const showCloud = () => {
  if (isCloudVisible.value) return; // Prevent spamming while animation is running
  
  isCloudVisible.value = true;
  
  // Hide cloud after 2.5 seconds
  setTimeout(() => {
    isCloudVisible.value = false;
  }, 2500);
};

// Footer Links
const links = ref([
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "Aboutme", href: "#about" },
  { id: 3, text: "Skills", href: "#skills" },
  { id: 4, text: "Projects", href: "#projects" },
  { id: 5, text: "Contact", href: "#contact" },
]);

// Dynamically switch footer style (Horizontal for LG+, Vertical for MD-)
const footerClass = computed(() => {
  return "flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 text-center text-xl";
});
</script>

<style scoped>
/* 🔹 Footer Links - Auto Switch */
.footer-link {
  @apply transition duration-300 px-4 py-2 text-bela;
}

/* 🔹 Fade Transition for the Cloud */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
