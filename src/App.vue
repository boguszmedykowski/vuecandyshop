<template>
  <div id="app">
    <CandyNavBar />
    <router-view /> <!-- Tutaj będą renderowane komponenty na podstawie routingu -->
  </div>
</template>

<script>
import CandyNavBar from './components/CandyNavBar.vue';
import '@/assets/css/style.css'


export default {
  name: 'App',
  components: {
    CandyNavBar
  }
}
</script>

<style>
  /* Style globalne dla App.vue */
  #app {
  margin-top: 60px; /* Dostosuj tę wartość do wysokości twojego paska nawigacyjnego */
  /* Inne style globalne */
}
</style>
