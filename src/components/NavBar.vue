<template>
    <header class="fixed top-0 left-0 w-full bg-highlight shadow-sm z-50">
      <div class="container mx-auto flex justify-between items-center h-16 px-6">
        
        <!-- Logo -->
        <a href="#" class="text-xl font-bold text-primary">MyPortfolio</a>
  
        <!-- Desktop Navigation (Hidden on Mobile & Tablet) -->
        <nav class="hidden lg:flex space-x-6">
          <a v-for="link in links" :key="link.id" :href="link.href" class="nav-link">
            {{ link.text }}
          </a>
        </nav>
  
        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="lg:hidden text-2xl">
          ☰
        </button>
      </div>
  
      <!-- Mobile Dropdown Menu -->
      <div v-if="menuOpen" class="absolute top-16 right-0 w-[200px] bg-highlight opacity-90 shadow-2xl rounded-bl-lg p-4 lg:hidden">
        <ul class="flex flex-col space-y-4">
          <li v-for="link in links" :key="link.id">
            <a :href="link.href" class="nav-link" @click="toggleMenu">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Navigation Links
  const links = ref([
    { id: 1, text: "Home", href: "#home" },
    //{ id: 2, text: "About", href: "#about" },
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
  </style>
  