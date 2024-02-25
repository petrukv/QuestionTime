<template>
    <div class="mt-3">
        <router-link :to="{name:'question-editor', params: {slug: slug}}" class="btn btn-sm btn-warning" >Edit</router-link>
        <button class="btn btn-sm btn-danger">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'QuestionActions',
    props: {
        slug: {
            type: String,
            required: true
        }
    }
}
</script>
