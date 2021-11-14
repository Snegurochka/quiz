<template>
  <div class="wrapper">
    <h2>Log in to your account</h2>
    <div v-if="error" className="error">There was an error!</div>
    <form action="#" method="post">
      <label
        ><span>Email address</span>
        <input
          type="text"
          name="username"
          placeholder="example@example.com"
          v-model="username"
        />
      </label>
      <label
        ><span>Password</span>
        <input type="password" name="password" v-model="password" />
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      error: false,
      username: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.wrapper {
  margin: 140px auto;
  max-width: 28rem;
}

form {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
}

input {
  width: 100%;
  height: 2.75rem;
  padding: 0.75rem 1rem;
  margin-top: 0.25rem;
  border-radius: 1rem;
  border: 1px solid var(--darkGrey);
}
</style>