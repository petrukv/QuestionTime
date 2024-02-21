<template>
  <div id="nav">
    <NavbarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    NavbarComponent
  }
}
</script>

<style scoped>
/* App component styles */
</style>
