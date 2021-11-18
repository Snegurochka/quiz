<template>
  <div>
    <h2>Log in to your account</h2>
    <div v-if="error" class="error">There was an error!</div>
    <vee-form :validation-schema="schema_login" @submit="login">
      <label
        ><span>Email address</span>
        <vee-field
          type="text"
          name="email"
          placeholder="example@example.com"
        />
        <ErrorMessage class="field_error" name="email" />
      </label>
      <label
        ><span>Password</span>
        <vee-field type="password" name="password" />
        <ErrorMessage class="field_error" name="password" />
      </label>
      <submit-button>Send</submit-button>
    </vee-form>
  </div>
</template>

<script>
import SubmitButton from "../components/SubmitButton.vue";
export default {
  components: { SubmitButton },
  name: "LoginForm",
  data() {
    return {
      error: false,
      schema_login: {
        email: "required|min:3|max:100|email",
        password: "required|min:3|max:100",
      },
    };
  },
  methods: {
    async login(val) {
      this.error = false;
      try {
        await this.$store.dispatch("login", val);
      } catch (e) {
        console.log(e);
        this.error = true;
      }

      this.$router.push({ name: "account" });
    },
  },
};
</script>

<style>
</style>