<template>
    <div class="flex bg-background justify-center items-center h-[380px] w-full">
      <div class="flex space-x-2 justify-center w-full max-w-6xl py-10">
        <NumberChart />

        <!-- ✅ Ensure this component is used correctly -->
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
  import ChartSlider from "./ChartSlider.vue";
  import NumberChart from "./NumberChart.vue";


  </script>
  