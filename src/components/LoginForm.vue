<template>
  <div>
    <h2>{{ $t("login_form.title") }}</h2>
    <div v-if="error" class="error">{{ $t("login_form.error") }}</div>
    <vee-form :validation-schema="schema_login" @submit="login">
      <label
        ><span>{{ $t("login_form.email") }}</span>
        <vee-field
          type="text"
          name="email"
          class="form-control"
          placeholder="example@example.com"
        />
        <ErrorMessage class="field_error" name="email" />
      </label>
      <label
        ><span>{{ $t("login_form.password") }}</span>
        <vee-field type="password" class="form-control" name="password" />
        <ErrorMessage class="field_error" name="password" />
      </label>
      <submit-button>{{ $t("login_form.send_btn") }}</submit-button>
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