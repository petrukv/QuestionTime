<template>
  <div class="home">
    <h1>home page</h1>
    <button @click="getQuestions">LOAD QUESTIONS</button>
    <div v-if="this.questions">{{ this.questions }}</div>
  </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
export default {
  name: 'HomeView',
  data() {
    return {
      questions: []
    }
  },

  methods: {
    async getQuestions() {
      let endpoint = 'http://localhost:8000/api/v1/questions/'
      try {
        const response = await axios.get(endpoint, {
          headers: {
            'Authorization': 'token 84cd27cc12cebf03e1232702e43acfb5bb1b41d4'
          }
        });
        console.log(response);
        this.questions = response.data;
        console.log(this.questions)
      } catch(error) {
        console.log(error.response);
        alert(error.response.statusText);
      }
    }
  }

}
</script>
