<template>
  <div class="home mt-2">
    <div class="container">
      <div v-for="question in questions" :key="question.pk">
        <div class="card shadow p-2 mb-3 bg-body rounded">
          <div class="card-body">
            <p class="mb-0">Posted by: <span class="question-author">{{ question.author }}</span></p>
            <h1>{{ question.content }} </h1>
            <p class="mb-0">Answers: {{ question.answers_count }}</p>
          </div>
        </div>
      </div>
    </div>
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
  },
  created() {
    console.log('created lifecycle hook')
    this.getQuestions();

  }

}
</script>


<style>

.question-author {
  font-weight: bold;
  color: #dc3545;
}

</style>