<template>
    <div class="container mt-3">
        <div v-if="question">
            <h1>{{ question.content }}</h1>
            <p class="mb-0">Posted by: <span class="author-name">{{ question.author }}</span></p>
            <p>{{ question.created_at }}</p>
        </div>
        <div v-else>
            <h1 class="error text-center">404 question not found</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'QuestionView',
    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            question: null
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
        }
    },
    created() {
        this.getQuestionData();
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
