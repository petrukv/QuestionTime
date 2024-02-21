<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light my-navbar">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name:'home' } "> QuestionTime </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button class="btn btn-logout btn-outline-success-secondary" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  methods: {
    logout() {
      fetch("/api-auth/logout/", {
        method: "POST",
        headers: {
          "X-CSRFToken": this.getCookie("csrftoken")
        }
      })
      .then(response => {
        if (response.ok) {
          window.location.href = "/accounts/login/";
        } else {
          console.error("Failed to logout");
        }
      })
      .catch(error => {
        console.error("Error during logout:", error);
      });
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
  }
};
</script>

<style>
.my-navbar {
  border-bottom: 1px solid #ddd;
}

.navbar-brand {
  font-weight: bold;
  font-size: 150%;
}

.navbar-brand:hover {
  color: #dc3545 !important;
}

.btn-logout:hover {
  color: #dc3545 !important;
}
</style>