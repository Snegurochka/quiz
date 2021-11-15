<template>
  <div class="menu-toggle" :class="{ open: isMenuOpen }" @click="toggle">
    ---
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