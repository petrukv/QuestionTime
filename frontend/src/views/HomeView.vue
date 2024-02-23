<template>
  <div class="home mt-2">
    <div class="container">
      <div v-for="question in questions" :key="question.uuid">
        <div class="card shadow p-2 mb-3 bg-body rounded">
          <div class="card-body">
            <p class="mb-0">Posted by: <span class="question-author">{{ question.author }}</span></p>
            <h2><router-link :to="{name:'question', params: {slug: question.slug}}">
              {{ question.content }}
              </router-link>
            </h2>
            <p class="mb-0">Answers: {{ question.answers_count }}</p>
          </div>
        </div>
      </div>
      <div class="my-4">
        <p v-show="loadingQuestion">...loading...</p>
        <button v-show="next" @click="getQuestions" class="btn btn-sm btn-outline-success">Load More</button>
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
      questions: [],
      next: null,
      loadingQuestion: false,
    }
  },

  methods: {
    async getQuestions() {
      let endpoint = 'http://localhost:8000/api/v1/questions/'
      if (this.next) {
        endpoint = this.next
      }
      this.loadingQuestion = true;
      try {
        const response = await axios.get(endpoint, {
          headers: {
            'Authorization': 'token 44878bbd1715cd56ffe65543f775be71e7bf0635'
          }
        });
        this.questions.push(...response.data.results)
        this.loadingQuestion = false;
        if(response.data.next) {
          this.next = response.data.next;
        } else {
          this.next = null;
        }
      } catch(error) {
        console.log(error.response);
        alert(error.response.statusText);
      }
    }
  },
  created() {
    document.title = 'QuestionTime';
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