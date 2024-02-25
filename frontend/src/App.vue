<template>
  <div id="nav">
    <NavbarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
import NavbarComponent from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    NavbarComponent
  },
  methods: {
    async setUserInfo() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/auth/users/me/", {
                    headers: {
                        'Authorization': 'token 44878bbd1715cd56ffe65543f775be71e7bf0635'
                    }
                })
        const requestUser = response.data['username']
        window.localStorage.setItem('username', requestUser)
      } catch (error) {
          console.log(error.response);
          alert(error.response.statusText);
      }
    }
  },
  created() {
    this.setUserInfo();
  }
}
</script>

<style scoped>
/* App component styles */
</style>
