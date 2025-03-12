<template>
    <footer class="w-full bg-highlight shadow-inner relative">
      <div class="container mx-auto flex flex-col items-center h-auto px-6 py-6">
  
        <!-- Footer Navigation -->
        <nav class="flex flex-col space-y-2 text-center">
          <a v-for="link in links" :key="link.id" :href="link.href" class="footer-link">
            {{ link.text }}
          </a>
        </nav>
  
        <!-- Social Icons -->
        <div class="flex space-x-4 mt-4 relative">
          <!-- Bird Icon (Clickable) -->
          <div 
            class="text-gray-900 hover:text-primary text-3xl cursor-pointer select-none"
            @click="showCloud"
          >
            🐦
          </div>
  
          <!-- Cloud Message -->
          <transition name="fade">
            <div 
              v-if="isCloudVisible" 
              class="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow-md"
            >
             I ❤️ love you
            </div>
          </transition>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
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
  </script>
  
  <style scoped>
  /* 🔹 Footer Link Styling */
  .footer-link {
    @apply transition duration-300 block px-4 py-2 text-gray-900 hover:text-primary;
  }
  
  /* 🔹 Fade Transition for the Cloud */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-in-out;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  