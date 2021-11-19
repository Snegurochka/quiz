<template>
  <base-card
    ><h3>Profile</h3>
    <div class="profile__wrapp">
      <div class="avatar">
        <img src="@/assets/avatar.png" alt="" />
      </div>
      <div class="profile__info">
        <h3>Demo Demo</h3>
        <span>{{ email }}</span>
      </div>
    </div>
    <base-button @click="start_quiz">Start quiz</base-button>
  </base-card>
</template>

<script>
import store from "@/store";
import { auth } from "@/plugins/firebase";
import BaseCard from "../components/BaseCard.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  components: { BaseCard, BaseButton },
  name: "Account",
  beforeRouteEnter(to, from, next) {
    if (store.state.isUserLoggedIn) {
      next();
    } else {
      next({ name: "auth" });
    }
  },
  computed: {
    email() {
      return auth.currentUser.email;
    },
  },
  created() {
    console.log(auth.currentUser.email);
  },
  methods: {
    start_quiz() {
      this.$router.push({ name: "quiz" });
    },
  },
};
</script>

<style scoped>
.profile__wrapp {
  display: flex;
  gap: 20px;
  margin-bottom: 48px;
}

.avatar {
  height: 5rem;
  width: 5rem;
}

.avatar img {
  border-radius: 50%;
  max-width: 100%;
}

.profile__info {
  margin-top: 0;
}
</style>