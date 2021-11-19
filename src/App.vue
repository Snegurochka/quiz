<template>
  <section>
    <side-bar :isMenuOpen="isMenuOpen" />
    <back-drop v-if="isMenuOpen" @toggleSidebar="toggleSidebar" />
    <menu-toggle :isMenuOpen="isMenuOpen" @toggleSidebar="toggleSidebar" />
    <main>
      <router-view />
    </main>
  </section>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import BackDrop from "./components/BackDrop.vue";
import MenuToggle from "./components/MenuToggle.vue";
export default {
  name: "App",
  components: { SideBar, BackDrop, MenuToggle },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  created() {
    this.$store.dispatch("init_login");
  },
  methods: {
    toggleSidebar() {
      this.isMenuOpen = !this.isMenuOpen;
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
  background: var(--bg);
  padding: 0;
  margin: 0;
}

.field_error,
.error {
  color: #c01818;
}

.error {
  border: 1px solid #c01818;
  padding: 14px;
  margin-bottom: 14px;
}

form {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
}

.form-control {
  width: 100%;
  height: 2.75rem;
  padding: 0.75rem 1rem;
  margin-top: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--darkGrey);
}
</style>
