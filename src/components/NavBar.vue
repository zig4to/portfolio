<template>
  <header class="fixed top-0 left-0 w-full bg-highlight shadow-sm z-50">
    <div class="container mx-auto flex justify-between items-center h-16 px-6 max-w-[1250px]">
      
      <!-- Logo -->
      <router-link to="/" class="text-xl font-bold text-primary" @click="scrollToTop">
        MyPortfolio
      </router-link>

      <!-- Desktop Navigation (Hidden on Mobile & Tablet) -->
      <nav class="hidden lg:flex space-x-6">
        <template v-for="link in links" :key="link.id">
          <router-link v-if="link.id === 1" :to="link.href" class="nav-link" @click="scrollToTop">
            {{ link.text }}
          </router-link>
          <a v-else :href="link.href" class="nav-link">
            {{ link.text }}
          </a>
        </template>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="lg:hidden text-2xl">
        ☰
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="menuOpen" class="absolute top-16 right-0 w-[200px] bg-highlight opacity-95 shadow-2xl rounded-bl-lg p-4 lg:hidden">
      <ul class="flex flex-col space-y-4">
        <li v-for="link in links" :key="link.id">
          <router-link v-if="link.id === 1" :to="link.href" class="nav-link" @click="scrollToTop">
            {{ link.text }}
          </router-link>
          <a v-else :href="link.href" class="nav-link" @click="toggleMenu">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Vue Router instance
const router = useRouter();

// Function to force scroll to top when clicking "Home"
const scrollToTop = () => {
  if (router.currentRoute.value.path === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// Navigation Links
const links = ref([
  { id: 1, text: "Home", href: "/" }, // Home navigates to Home.vue
  { id: 2, text: "About", href: "#about" }, // Keep section links the same
  { id: 3, text: "Skills", href: "#skills" },
  { id: 4, text: "Projects", href: "#projects" },
  { id: 5, text: "Contact", href: "#contact" },
]);

// Mobile Menu State
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
/* 🔹 Navigation Link Styling */
.nav-link {
  @apply transition duration-300 block px-4 py-2;
}
.nav-link:hover {
  @apply scale-110;
}
</style>
