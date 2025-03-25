<template>
  <header
  :class="[
    'fixed top-0 left-0 w-full z-50 bg-modernblack shadow-sm text-bela text-lg transition-transform duration-500',
    isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
  ]"
>
    <div class="container mx-auto flex justify-between items-center h-16 px-6 lg:max-w-[950px] 2xl:max-w-[1350px]">
      
      <!-- Logo -->
      <router-link to="/" class="text-sm md:text-lg text-bela font-bold text-primary" @click="scrollToTop">
        site.zigatomse
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

// Smooth scroll to top
const scrollToTop = async (event) => {
  event.preventDefault();
  if (router.currentRoute.value.path === "/") {
    await nextTick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    router.push("/").then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    });
  }
};

// Close mobile menu and scroll
const closeMenuAndScroll = (event) => {
  scrollToTop(event);
  menuOpen.value = false;
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

// Hide navbar on scroll down, show on scroll up
const isNavbarVisible = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isNavbarVisible.value = false; // hide
  } else {
    isNavbarVisible.value = true; // show
  }

  lastScrollY = currentScrollY;
};

// Close menu if clicking outside
const closeMenuOnClickOutside = (event) => {
  const menu = document.getElementById("mobile-menu");
  const button = document.getElementById("menu-button");
  if (menuOpen.value && menu && !menu.contains(event.target) && button !== event.target) {
    menuOpen.value = false;
  }
};

// Lifecycle hooks
onMounted(() => {
  document.addEventListener("click", closeMenuOnClickOutside);
  document.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenuOnClickOutside);
  document.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.nav-link {
  @apply transition duration-300 block px-4 py-2;
}
.nav-link:hover {
  @apply scale-110;
}
</style>