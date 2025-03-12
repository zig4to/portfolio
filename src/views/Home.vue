<template>
    <HeroSection />
    <AboutMe />
    <TestFile />
    <SkillSlider /> 
    <Contact />
    
  </template>
  
  <script>
  import HeroSection from '../components/HeroSection.vue';
  import AboutMe from '../components/AboutMe.vue';
  import SkillSlider from '../components/SkillSlider.vue'; // Fixed the component import
  import Projects from '../components/Projects.vue';
  import Contact from '../components/Contact.vue';
  import TestFile from '../components/TestFile.vue';
  export default {
    components: {
      HeroSection,
      AboutMe,
      SkillSlider,
      Projects,
      Contact,
      TestFile,
    }
  };
  </script>
  