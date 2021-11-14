<template>
  <div class="questions__card">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <div class="questions__wrap">
      <transition-group name="fade">
        <div
          class="single-question"
          v-for="(q, ind) in questions"
          :key="ind"
          v-show="ind === questionsAnswered"
        >
          <div class="question">{{ q.q }}</div>
          <div class="answers">
            <div
              class="answer"
              v-for="(answer, ind) in q.answers"
              :key="ind"
              @click="setAnswer(answer.is_correct)"
            >
              {{ answer.text }}
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questions",
  props: {
    questions: {
      type: Object,
    },
    questionsAnswered: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      //currentIndex: 0,
    };
  },
  methods: {
    setAnswer(isCorrect) {
      this.$emit("setAnswer", isCorrect);
    },
  },
};
</script>

<style>
.questions__card {
  position: relative;
  width: 100%;
}

.questions__wrap {
  padding: 28px;
  margin: 28px 0;
  border: dotted 3px var(--lightGrey);
}
.question {
  padding: 20px;
  font-size: 28px;
  text-align: center;
  background-color: var(--primary);
  color: var(--white);
  box-sizing: border-box;
}
.single-question {
  position: relative;
  max-width: 482px;
}
.answer {
  border-bottom: 1px solid var(--lightGrey);
  color: var(--darkGrey);
  padding: 20px;
  font-size: 18px;
  transition: 0.2s linear all;
}
.answer span {
  display: inline-block;
  margin-left: 5px;
  font-size: 0.75em;
  font-style: italic;
}
.progress {
  height: 50px;
  background-color: var(--darkGrey);
  position: relative;
}
.bar {
  height: 50px;
  background-color: #45c4d4;
  transition: all 0.3s linear;
}
.status {
  position: absolute;
  color: var(--white);
  top: 15px;
  left: 0;
  text-align: center;
  width: 100%;
}
.answer:not(.is-answered) {
  cursor: pointer;
}
.answer:not(.is-answered):hover {
  background-color: var(--hover);
  border-color: var(--hover);
  transform: scale(1.02);
  box-shadow: 0px 0px 3px 2px var(--hover);
}
</style>