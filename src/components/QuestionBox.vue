<template>
    <div class = "q-box-container">
        <b-jumbotron>
            <div>
                    <template>
                     {{ currentQuestion.question }}
                    </template>

                    <hr class="my-4">

                    <p>
                        Something Something Dark Answers
                    </p>

                    <b-button variant="primary" href="#">Submit</b-button>
                    <b-button @click = "next" variant="success" href="#">Next</b-button>
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: "QuestionBox",
        props: {
            currentQuestion: Object,
            next: Function
        }
    }
</script>

<style scoped>

</style>
