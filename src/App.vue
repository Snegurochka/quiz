<template>
  <div>
    <aside>
      sidebar
    </aside>
    <main>
      <home />
    </main>
  <div class="card">
    <transition name="fade" mode="out-in">
      <questions
        :questions="questions"
        :questionsAnswered="questionsAnswered"
        @setAnswer="setAnswer"
        v-if="questionsAnswered < questions.length"
      />
      <result v-else :results="results" :totalCorrect="totalCorrect" />
    </transition>
    <button
      type="button"
      v-if="questionsAnswered === questions.length"
      class="reset-btn"
      @click="reset"
    >
      Reset
    </button>
  </div>
  </div>

</template>

<script>
import Home from './views/Home.vue';
import Questions from "./components/Questions.vue";
import Result from "./components/Result.vue";
// data
import { questions, results } from "./moc";

export default {
  components: { Questions, Result, Home },
  name: "App",
  data() {
    return {
      questionsAnswered: 0,
      totalCorrect: 0,
      questions,
      results,
    };
  },
  methods: {
    setAnswer(isCorrect) {
      if (isCorrect) {
        this.totalCorrect++;
      }
      this.questionsAnswered++;
    },
    reset() {
      this.totalCorrect = 0;
      this.questionsAnswered = 0;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
:root {
  --bg: #f9fafc;
  --white: #fff;
  --lightGrey: #F2F3F5;
  --darkGrey: #3f4d67;
  --primary: #F5C332;
  --hover: #a3daa4;
}

body {
  font-size: 20px;
  font-family: sans-serif;
  padding-top: 20px;
  background: var(--bg);
}

.card {
  margin: 120px auto;
  padding-bottom: 24px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background: var(--white);
  box-shadow: 0 0 8px -2px rgb(0 0 0 / 10%);
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s linear;
}
.fade-leave-active {
  transition: all 0.3s linear;
  opacity: 0;
  position: absolute;
}

.reset-btn {
  background-color: var(--primary);
  border: 0;
  font-size: 22px;
  color: var(--white);
  padding: 10px 25px;
  margin: 10px auto;
  display: block;
  cursor: pointer;
  transition: all .25s linear;
}

.reset-btn:active,
.reset-btn:focus,
.reset-btn:hover {
  border: 0;
  outline: 0;
  transform: scale(1.1);
}
</style>
