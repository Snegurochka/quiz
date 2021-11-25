<template>
  <base-card>
    <ul class="tabs">
      <li
        class="tabs__item"
        :class="{
          'tabs__item--active': tab === 'login',
        }"
      >
        <a href="#" @click.prevent="togleTab('login')">
          {{ $t("auth.login") }}
        </a>
      </li>
      <li
        class="tabs__item"
        :class="{
          'tabs__item--active': tab === 'register',
        }"
      >
        <a @click.prevent="togleTab('register')" href="#">
          {{ $t("auth.register") }}
        </a>
      </li>
    </ul>

    <login-form v-show="tab === 'login'" />
    <registration-form v-show="tab === 'register'" />
  </base-card>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import RegistrationForm from "../components/RegistrationForm.vue";

export default {
  name: "Auth",
  components: { LoginForm, RegistrationForm },
  data() {
    return {
      tab: "login",
    };
  },
  methods: {
    togleTab(val) {
      this.tab = val;
    },
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 8px;
  padding: 0;
}

.tabs__item {
  list-style: none;
  flex: auto;
  color: var(--darkGrey);
}

.tabs__item a {
  text-decoration: none;
  color: var(--darkGrey);
  display: block;
  padding: 14px 24px;
}

.tabs__item--active {
  background-color: var(--primary);
  transition: all 0.3s linear;
}

.tabs__item--active a {
  color: var(--white);
}
</style>
