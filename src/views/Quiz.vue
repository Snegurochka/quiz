<template>
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
    <base-button
      v-if="questionsAnswered === questions.length"
      @callBack="reset"
    >
      Reset
    </base-button>
  </div>
</template>

<script>
import Questions from "./../components/Questions.vue";
import Result from "./../components/Result.vue";
// data
import { questions, results } from "./../moc";

export default {
  name: "Quiz",
  components: { Questions, Result },
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

<style scoped>

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
</style>