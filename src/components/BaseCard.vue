<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style scoped>
.card {
  margin: 40px auto 0;
  padding: 48px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background: var(--white);
  box-shadow: 0 0 8px -2px rgb(0 0 0 / 10%);
}
</style>