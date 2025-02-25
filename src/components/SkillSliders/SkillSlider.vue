<template>
  <div id="skills" class="flex-center text-5xl text-primary font-medium bg-background pt-7 scroll-mt-16">
    <span class="text-primary-stroke text-transparent">my</span>skills.
  </div>
  <div class="flex bg-background justify-center items-center h-min-fit w-full">
    <div class="flex justify-center w-full max-w-6xl py-10 space-x-2
    md:space-x-3 lg:space-x-6">
        <NumberChart />
        <HtmlSlider />
        <FigmaSlider />
        <AdobeSlider />
        <JavaScriptSlider />
        <WordpressSlider />
        <WebflowSlider />
      </div>
    </div>
  </template>
  
  <script setup>
  import HtmlSlider from "./HtmlSlider.vue"; // ✅ Ensure the import path is correct!
  import FigmaSlider from "./FigmaSlider.vue"; 
  import AdobeSlider from "./AdobeSlider.vue"; 
  import JavaScriptSlider from "./JavaScriptSlider.vue"; 
  import WordpressSlider from "./WordpressSlider.vue"; 
  import WebflowSlider from "./WebflowSlider.vue"; 
  import NumberChart from "./NumberChart.vue";


  </script>
  