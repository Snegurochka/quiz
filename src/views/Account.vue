<template>
  <div>Account</div>
</template>

<script>
import store from "@/store";

export default {
  name: "Account",
  beforeRouteEnter(to, from, next) {
    if (store.state.isUserLoggedIn) {
      next();
    } else {
      next({ name: "auth" });
    }
  },
};
</script>

<style>
</style>