<template>
  <button type="submit" class="button">
    <slot />
  </button>
</template>

<script>
export default {
};
</script>

<style>
.button {
  background-color: var(--primary);
  border: 0;
  width: 100%;
  font-size: 22px;
  color: var(--white);
  padding: 10px 25px;
  margin: 10px auto;
  display: block;
  cursor: pointer;
  transition: all .25s linear;
}

.button:active,
.button:focus,
.button:hover {
  border: 0;
  outline: 0;
  transform: scale(1.06);
}
</style>
