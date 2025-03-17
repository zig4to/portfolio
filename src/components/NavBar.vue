<template>
  <header class="fixed text-bela text-lg top-0 left-0 w-full bg-modernblack shadow-sm z-50">
    <div class="container mx-auto flex justify-between items-center h-16 px-6 max-w-[1350px]">
      
      <!-- Logo -->
      <router-link to="/" class="text-xl text-bela font-bold text-primary" @click="scrollToTop">
        MyPortfolio.site
      </router-link>

      <!-- Desktop Navigation (Hidden on Mobile & Tablet) -->
      <nav class="hidden lg:flex space-x-6">
        <template v-for="link in links" :key="link.id">
          <router-link
            v-if="link.id === 1"
            :to="link.href"
            class="nav-link"
            @click="scrollToTop"
          >
            {{ link.text }}
          </router-link>
          <a
            v-else
            :href="link.href"
            class="nav-link"
          >
            {{ link.text }}
          </a>
        </template>
      </nav>

      <!-- Mobile Menu Button -->
      <button id="menu-button" @click="toggleMenu" class="lg:hidden text-2xl">
        ☰
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="menuOpen"
      id="mobile-menu"
      class="absolute top-16 right-0 w-[200px] bg-modernblack opacity-95 shadow-2xl rounded-bl-lg p-4 lg:hidden"
    >
      <ul class="flex flex-col space-y-4">
        <li v-for="link in links" :key="link.id">
          <router-link
            v-if="link.id === 1"
            :to="link.href"
            class="nav-link"
            @click="closeMenuAndScroll"
          >
            {{ link.text }}
          </router-link>
          <a
            v-else
            :href="link.href"
            class="nav-link"
            @click="toggleMenu"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";

// Vue Router instance
const router = useRouter();

// Function to smoothly scroll to the top when clicking "Home"
const scrollToTop = async (event) => {
  event.preventDefault(); // Prevent default link behavior

  if (router.currentRoute.value.path === "/") {
    await nextTick(); // Ensure reactivity updates
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  } else {
    router.push("/").then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    });
  }
};

// Close menu and scroll when Home is clicked on mobile
const closeMenuAndScroll = (event) => {
  scrollToTop(event);
  menuOpen.value = false; // Close menu
};

// Navigation Links
const links = ref([
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "About", href: "#about" },
  { id: 3, text: "Skills", href: "#skills" },
  { id: 4, text: "Projects", href: "#projects" },
  { id: 5, text: "Contact", href: "#contact" },
]);

// Mobile Menu State
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Function to close menu when clicking outside
const closeMenuOnClickOutside = (event) => {
  const menu = document.getElementById("mobile-menu");
  const button = document.getElementById("menu-button");

  if (menuOpen.value && menu && !menu.contains(event.target) && button !== event.target) {
    menuOpen.value = false;
  }
};

// Add event listener when the component is mounted
onMounted(() => {
  document.addEventListener("click", closeMenuOnClickOutside);
});

// Remove event listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener("click", closeMenuOnClickOutside);
});
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
