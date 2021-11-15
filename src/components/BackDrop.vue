<template>
  <div class="backdrop" @click="toggle"></div>
</template>

<script>
export default {
  name: "BackDrop",
  methods: {
    toggle() {
      this.$emit("toggleSidebar");
    },
  },
};
</script>

<style scoped>
.backdrop {
  z-index: 60;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>