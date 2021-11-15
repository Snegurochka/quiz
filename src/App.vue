<template>
  <section>
    <side-bar />
    <back-drop v-if="isMenuOpen" @toggleBackDrop="toggleBackDrop" />
    <main>
      <router-view />
    </main>
  </section>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import BackDrop from "./components/BackDrop.vue";
export default {
  name: "App",
  components: { SideBar, BackDrop },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleBackDrop() {
      console.log("ok toggleBackDrop");
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
  --lightGrey: #f2f3f5;
  --darkGrey: #3f4d67;
  --primary: #f5c332;
  --hover: #a3daa4;
}

body {
  font-size: 20px;
  font-family: sans-serif;
  padding-top: 20px;
  background: var(--bg);
}

.field_error {
  color: #c01818;
}
</style>
