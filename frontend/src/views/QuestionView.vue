<template>
    <div class="container mt-3">
        <div v-if="question">
            <h1>{{ question.content }}</h1>
            <p class="mb-0">Posted by: <span class="author-name">{{ question.author }}</span></p>
            <p>{{ question.created_at }}</p>
            <hr>
        </div>
        <div v-else>
            <h1 class="error text-center">404 question not found</h1>
        </div>
        <div v-if="question" >
            <AnswerComponent v-for="answer in answers"
            :key="answer.uuid"
            :answer="answer" />
        </div>

        <div class="my-4">
            <p v-show="loadingAnswers">...loading...</p>
            <button v-show="next" @click="getQuestionAnswers" class="btn btn-sm btn-outline-success">Load More</button>
        </div>
    </div>
</template>

<script>
import AnswerComponent from '@/components/Answer.vue';
import axios from 'axios';

export default {
    name: 'QuestionView',
    props: {
        slug: {
            type: String,
            required: true,
        },
    },

    components:{
        AnswerComponent,
    },

    data() {
        return {
            question: null,
            answers: [],
            next: null,
            loadingAnswers: false,
        };
    },
    methods: {
        setPageTitle(title){
            document.title = title
        },

        async getQuestionData() {
            const endpoint = `http://localhost:8000/api/v1/questions/${this.slug}/`;
            try {
                const response = await axios.get(endpoint, {
                    headers: {
                        'Authorization': 'token 44878bbd1715cd56ffe65543f775be71e7bf0635'
                    }
                });
                this.question = response.data;
                this.setPageTitle(response.data.content)
            } catch(error) {
                console.log(error.response);
                const title = '404 - Not Found'
                this.setPageTitle(title)
            }
        },

        async getQuestionAnswers() {
            let endpoint = `http://localhost:8000/api/v1/questions/${this.slug}/answers/`;
            if (this.next) {
                endpoint = this.next
            }
            this.loadingAnswers = true;
            try {
                const response = await axios.get(endpoint, {
                headers: {
                    'Authorization': 'token 44878bbd1715cd56ffe65543f775be71e7bf0635'
                    }
                });

                this.answers.push(...response.data.results)
                console.log(this.answers)
                this.loadingAnswers = false;

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
        this.getQuestionData();
        this.getQuestionAnswers()
    }
}
</script>

<style>

.author-name {
    font-weight: bold;
    color: #dc3545;
}

.error{
    color: red
}

</style>
