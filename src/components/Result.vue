<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title[currentLocale] }}</div>
    <div class="desc">{{ results[resultIndex].desc[currentLocale] }}</div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    results: {
      type: Array,
    },
    totalCorrect: {
      type: Number,
    },
  },
  computed: {
    resultIndex() {
      let index = 0;

      this.results.forEach((el, ind) => {
        if (el.min <= this.totalCorrect && el.max >= this.totalCorrect) {
          index = ind;
        }
      });

      return index;
    },
    currentLocale() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style>
.result {
  width: 100%;
}

.title {
  width: 100%;
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #12cbc4;
  color: #fff;
  box-sizing: border-box;
}
.desc {
  padding: 28px;
  margin: 28px 0;
  border: dotted 3px var(--lightGrey);
  font-size: 18px;
  width: 100%;
  transition: 0.4s linear all;
  text-align: center;
}
</style>