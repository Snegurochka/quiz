<template>
  <div class="menu-toggle" :class="{ open: isMenuOpen }" @click="toggle">
   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" width="30" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
  </div>
</template>

<script>
export default {
  name: "MenuToggle",
  props: {
    isMenuOpen: {
      type: Boolean,
    },
  },
  methods: {
    toggle() {
      this.$emit("toggleSidebar");
    },
  },
};
</script>

<style>
.menu-toggle {
  position: fixed;
  top: 40px;
  left: 40px;
  font-size: 20px;
  cursor: pointer;
  color: #000;
  transition: all 0.22s ease-in;
  z-index: 100;
}

.menu-toggle:hover {
  opacity: 0.7;
}

.menu-toggle.open {
  left: 320px;
  color: #fff;
}
</style>