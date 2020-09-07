<template>
  <div id="app">
    <h1>what up</h1>
    <Header></Header>

    <b-container>
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
                  v-if="questions.length"
                  :currentQuestion="questions[index]"
                  :next="next"
          />
        </b-col>
      </b-row>
    </b-container>




    <p>
    <router-link to="/onePlace">Go to One Place</router-link>
    <router-link to="/anotherPlace">Go to Another Place</router-link>
    </p>
    <RouterView></RouterView>
  </div>
</template>

<script>
// import onePlace from "@/components/onePlace";
// import anotherPlace from "@/components/anotherPlace";
import Header from "@/components/Header";
import QuestionBox from "@/components/QuestionBox";

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox,
  },
  data(){
    return{
      questions: [],
      index: 0,
    }
  },
  methods: {
    next(){
      this.index++;
    }
  },
  mounted: function(){
    fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple', {
      method: 'get'})
    .then(response => {
      return response.json();
    })
    .then((jsonData) => {
      this.questions = jsonData.results;
    })
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
