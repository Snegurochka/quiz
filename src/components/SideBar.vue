<template>
  <aside class="sidebar" :class="{close: !isMenuOpen}">
    <nav class="navbar">
      <router-link
        v-for="link in links"
        :key="link.route"
        :to="{ name: link.route }"
      >
        {{ link.label }}
      </router-link>
    </nav>
  </aside>
</template>

<script>
const links = [
  { route: "home", label: "Home" },
  { route: "auth", label: "Login" },
  { route: "quiz", label: "Start Quiz" },
];

export default {
  name: "SideBar",
  props: {
      isMenuOpen: {
          type: Boolean
      }
  },
  data() {
    return {
      links,
    };
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  padding: 20px 10px;
  box-sizing: border-box;
  background: #fff;
  transform: translateX(0px);
  transition: transform 0.22s ease-in;
  z-index: 90;
}

.sidebar.close {
  transform: translateX(-300px);
}

.navbar {
  margin-top: 64px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
}

.navbar a {
  color: #363d54;
  font-size: 30px;
  text-decoration: none;
  background-color: #fff;
  position: relative;
  padding: 0 20px 10px 20px;
  transition: opacity 0.3s;
}

.navbar a:hover,
.active {
  opacity: 0.7;
}
</style>