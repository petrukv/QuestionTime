<template>
    <div class="mt-3">
        <router-link :to="{name:'question-editor', params: {slug: slug}}" class="btn btn-sm btn-warning" >Edit</router-link>
        <button class="btn btn-sm btn-danger mx-1" @click="showDeleteConfirmationBtn = !showDeleteConfirmationBtn" >Delete</button>
        <button v-show="showDeleteConfirmationBtn" class="btn btn-sm btn-outline-danger" @click="deleteQuestion" >Yes, Delete my question!</button>
    </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
export default {
    name: 'QuestionActions',
    props: {
        slug: {
            type: String,
            required: true
        }
    },

    data(){
        return {
            showDeleteConfirmationBtn: false
        }
    },

    methods: {
        async deleteQuestion() {
            const endpoint = `http://127.0.0.1:8000/api/v1/questions/${this.slug}/`;
            try {
                await axios.delete(endpoint,  {
                    headers: {
                    'Authorization': 'token 44878bbd1715cd56ffe65543f775be71e7bf0635'
                    }});
                this.$router.push({
                    name: "home"
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
