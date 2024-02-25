<template>
    <div class="container my-2">
        <h1 class="mb-3">Ask a question</h1>
        <form @submit.prevent="onSubmit" >
            <textarea v-model="questionBody" class="form-control" placeholder="What do you want to ask?" rows="5"></textarea>
            <button type="submit" class="btn btn-success mt-3">Publish</button>
        </form>
        <p v-if="error" class="muted mt-2" >{{ error }}</p>
    </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
export default {
    name: 'QuestionEditor',
    data() {
        return {
            questionBody: null,
            error: null,
        }
    },
    methods: {

        async performNetworkRequest() {
            let endpoint = "http://localhost:8000/api/v1/questions/";
            let method = 'POST';
            try {
                const response = await axios({
                    method: method,
                    url: endpoint,
                    data: {content: this.questionBody},
                    headers: {
                        'Authorization': 'token 44878bbd1715cd56ffe65543f775be71e7bf0635'
                    }
                })
                this.$router.push({name: 'question', params: {slug: response.data.slug}})
                
            } catch (error) {
                this.error = error.response.statusText;
            }
        },

        onSubmit() {
            if (!this.questionBody) {
                this.error = "YOu cant send an empty question!"
            } else if (this.questionBody.length > 240) {
                this.error = "Ensure this field has no more than 240 characters! ";
            } else {
                this.performNetworkRequest();
            }
        }
    }
}
</script>