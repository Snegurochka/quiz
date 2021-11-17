<template>
  <aside class="sidebar" :class="{ close: !isMenuOpen }">
    <div class="auth">
      <router-link v-if="!isUserLoggedIn" :to="{ name: 'auth' }">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user"
          width="15"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
          ></path>
        </svg>
        Login / Register
      </router-link>
      <template v-else>
        <span @click.prevent="signout">Logout</span>
      </template>
    </div>

    <nav class="navbar">
      <router-link v-if="isUserLoggedIn" :to="{ name: 'account' }">Account</router-link>
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
import { mapState, mapActions } from "vuex";
const links = [
  { route: "home", label: "Home" },
  { route: "quiz", label: "Start Quiz" },
];

export default {
  name: "SideBar",
  props: {
    isMenuOpen: {
      type: Boolean,
    },
  },
  data() {
    return {
      links,
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"]),
  },
  methods: {
    ...mapActions(["signout"]),
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
  background: var(--white);
  transform: translateX(0px);
  transition: transform 0.22s ease-in;
  z-index: 90;
}

.sidebar.close {
  transform: translateX(-300px);
}

.auth {
  margin: 24px 0 0 45px;
}

.auth a {
  color: var(--darkGrey);
  display: flex;
  text-decoration: none;
  gap: 8px;
}

.navbar {
  margin-top: 64px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
}

.navbar a {
  color: var(--darkGrey);
  font-size: 30px;
  text-decoration: none;
  background-color: var(--white);
  position: relative;
  padding: 0 20px 10px 20px;
  transition: opacity 0.3s;
}

.sidebar a:hover,
.router-link-active {
  opacity: 0.7;
}
</style>