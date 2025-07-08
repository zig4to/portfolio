<template>
  <section
    id="skills"
    class="flex-center flex-col mx-auto text-primary bg-modernblack scroll-mt-16 px-8 pt-8 pb-14 lg:h-screen"
  >
    <!-- Section Title -->
    <div class="flex items-center text-5xl lg:text-6xl 2xl:text-7xl font-medium">
      <span class="text-primary-stroke-light text-transparent">my</span>
      <span class="text-bela">skills</span>
      <span class="text-primary-stroke-light text-transparent">.</span>
    </div>

    <!-- Skills Sliders -->
    <div class="flex justify-center items-center w-full">
      <div class="flex w-full max-w-6xl justify-center py-10 space-x-2 md:space-x-3 lg:space-x-5 xl:space-x-6">
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
import NumberChart from "./SkillSliders/NumberChart.vue";
import HtmlSlider from "./SkillSliders/HtmlSlider.vue";
import FigmaSlider from "./SkillSliders/FigmaSlider.vue";
import AdobeSlider from "./SkillSliders/AdobeSlider.vue";
import JavaScriptSlider from "./SkillSliders/JavaScriptSlider.vue";
import WordpressSlider from "./SkillSliders/WordpressSlider.vue";
import WebflowSlider from "./SkillSliders/WebflowSlider.vue";
</script>
