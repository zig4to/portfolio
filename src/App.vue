<template>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <AboutMe></AboutMe>
    <SkillSlider></SkillSlider>
    <Projects></Projects>
    
  <!-- Other Sections 
  <section id="about" class="min-h-screen bg-terciary flex justify-center items-center">
      <h2 class="text-primary text-3xl font-semibold">About Me</h2>
    </section>
    <section id="projects" class="min-h-screen bg-terxiary flex justify-center items-center">
      <h2 class="text-richblack text-3xl font-semibold">My projects</h2>
    </section>

    <section id="contact" class="min-h-screen bg-secondary flex justify-center items-center">
      <h2 class="text-highlight text-3xl font-semibold">Contact</h2>
    </section> -->
    <Contact></Contact>
    <Footer></Footer>
</template>
  
<script setup>
  import Projects from "./components/Projects.vue";
  import HeroSection from "./components/HeroSection.vue";
  import NavBar from "./components/NavBar.vue";
  import SkillSlider from "./components/SkillSliders/SkillSlider.vue";
  import Footer from "./components/Footer.vue";
  import Contact from "./components/Contact.vue";
import AboutMe from "./components/AboutMe.vue";
import Test from "./components/Test.vue";
</script>
  
<style>
html {
    scroll-behavior: smooth;
  }
  
  /* 🔹 Section Styling */

</style>