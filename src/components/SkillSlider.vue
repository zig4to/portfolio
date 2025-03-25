<template>
  <section id="skills" class="flex-center flex-col mx-auto  text-primary bg-modernblack scroll-mt-16 py-12 lg:h-screen">
    
    <!-- Title in a single line -->
    <div class="flex items-center py-5 text-5xl lg:text-6xl 2xl:text-7xl font-medium">
      <span class="text-primary-stroke-light text-transparent">my</span>
      <span class="text-bela">skills</span>
      <span class="text-primary-stroke-light text-transparent">.</span>
    </div>

    <!-- Skills Sliders -->
    <div class="flex justify-center items-center w-full">
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
import HtmlSlider from "./SkillSliders/HtmlSlider.vue"; 
import FigmaSlider from "./SkillSliders/FigmaSlider.vue"; 
import AdobeSlider from "./SkillSliders/AdobeSlider.vue"; 
import JavaScriptSlider from "./SkillSliders/JavaScriptSlider.vue"; 
import WordpressSlider from "./SkillSliders/WordpressSlider.vue"; 
import WebflowSlider from "./SkillSliders/WebflowSlider.vue"; 
import NumberChart from "./SkillSliders/NumberChart.vue";
</script>
