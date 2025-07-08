<template>
  <footer class="w-full bg-modernblack shadow-inner relative">
    <div class="container mx-auto flex flex-col items-center px-6 py-6 lg:max-w-[950px] max-w-[1350px]">

      <!-- Footer Navigation -->
      <nav :class="footerClass">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          class="footer-link"
        >
          {{ link.text }}
        </a>
      </nav>

      <!-- Social + Copyright -->
      <div class="flex space-x-4 mt-4 relative">
        <p class="text-sm text-center text-bela mt-2">
          © 2025 site.zigatomse. All rights reserved.
        </p>

        <!-- Bird Icon -->
        <div
          class="text-bela hover:text-bela text-2xl cursor-pointer select-none"
          @click="showCloud"
        >
          🐦
        </div>

        <!-- Cloud Message -->
        <transition name="fade">
          <div
            v-if="isCloudVisible"
            class="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-bela text-md px-8 py-3 rounded-3xl shadow-xl min-w-[220px]"
          >
            Made by me with
            <img
              src="/src/assets/logos/footer/vue.svg"
              alt="Vue Logo"
              class="w-5 h-5 transition-transform hover:scale-110 inline-block"
            />
          </div>
        </transition>
      </div>

    </div>
  </footer>
</template>


<script setup>
import { ref, computed } from "vue";

const isCloudVisible = ref(false);

const showCloud = () => {
  if (isCloudVisible.value) return;

  isCloudVisible.value = true;

  setTimeout(() => {
    isCloudVisible.value = false;
  }, 2500);
};

const links = ref([
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "Aboutme", href: "#about" },
  { id: 3, text: "Skills", href: "#skills" },
  { id: 4, text: "Projects", href: "#projects" },
  { id: 5, text: "Contact", href: "#contact" },
]);

const footerClass = computed(() =>
  "flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 text-center text-md"
);
</script>

<style scoped>
.footer-link {
  @apply transition duration-300 px-4 py-2 text-bela;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>