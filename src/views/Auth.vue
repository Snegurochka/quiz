<template>
  <base-card>
  <login-form />
  </base-card>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  components: { LoginForm },
  name: "Auth",
};
</script>
