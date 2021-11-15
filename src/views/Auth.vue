<template>
  <base-card>
    <h2>Log in to your account</h2>
    <div v-if="error" className="error">There was an error!</div>
    <vee-form :validation-schema="schema_login" @submit="login">
      <label
        ><span>Email address</span>
        <vee-field
          type="text"
          name="username"
          placeholder="example@example.com"
        />
        <ErrorMessage class="field_error" name="username" />
      </label>
      <label
        ><span>Password</span>
        <vee-field type="password" name="password" />
        <ErrorMessage class="field_error" name="password" />
      </label>
      <submit-button>Send</submit-button>
    </vee-form>
  </base-card>
</template>

<script>
import SubmitButton from '../components/SubmitButton.vue';
export default {
  components: { SubmitButton },
  name: "Auth",
  data() {
    return {
      error: false,
      schema_login: {
        username: "required|min:3|max:100|email",
        password: "required|min:3|max:100",
      },
    };
  },
  methods: {
    login(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
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
  border-radius: 0.5rem;
  border: 1px solid var(--darkGrey);
}
</style>