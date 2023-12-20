<template>
  <navBar/>
  <main class="container-fluid">
    <router-view />
  </main>
  <Footer/>
</template>

<script>
import navBar from '@/components/Navbar.vue'
import Footer from './components/Footer.vue';

export default {
  
  components: {
    navBar,
    Footer

  }

}
</script>


<style src=".//assets/css/style.css"></style>
