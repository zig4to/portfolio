<template>
  <section id="skills" class="flex-center flex-col mx-auto text-5xl lg:text-6xl text-primary font-medium bg-background scroll-mt-16 lg:h-screen">
    
    <!-- Title in a single line -->
    <div class="flex items-center py-5">
      <span class="text-primary-stroke text-transparent">my</span>
      <span class="text-primary">skills.</span>
    </div>

    <!-- Skills Sliders -->
    <div class="flex bg-background justify-center items-center w-full">
      <div class="flex justify-center w-full max-w-6xl py-10 space-x-2 md:space-x-3 lg:space-x-6">
        <NumberChart />
        <HtmlSlider />
        <FigmaSlider />
        <AdobeSlider />
        <JavaScriptSlider />
        <WordpressSlider />
        <WebflowSlider />
      </div>
    </div>
  </section>
</template>

<script setup>
import HtmlSlider from "./HtmlSlider.vue"; 
import FigmaSlider from "./FigmaSlider.vue"; 
import AdobeSlider from "./AdobeSlider.vue"; 
import JavaScriptSlider from "./JavaScriptSlider.vue"; 
import WordpressSlider from "./WordpressSlider.vue"; 
import WebflowSlider from "./WebflowSlider.vue"; 
import NumberChart from "./NumberChart.vue";
</script>
