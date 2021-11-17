<template>
  <section>
    <side-bar :isMenuOpen="isMenuOpen" />
    <back-drop v-if="isMenuOpen" @toggleSidebar="toggleSidebar" />
    <menu-toggle :isMenuOpen="isMenuOpen" @toggleSidebar="toggleSidebar"/>
    <main>
      <router-view />
    </main>
  </section>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import BackDrop from "./components/BackDrop.vue";
import MenuToggle from './components/MenuToggle.vue';
export default {
  name: "App",
  components: { SideBar, BackDrop, MenuToggle },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isMenuOpen = !this.isMenuOpen;
    }
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
