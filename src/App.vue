<template>
  <NavBar></NavBar>
  <router-view />  <!-- Dynamically renders pages like Home.vue -->
  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  }
};

</script>

<style>

</style>