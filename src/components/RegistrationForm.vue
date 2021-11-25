<template>
  <div>
    <vee-form
      :validation-schema="schema"
      @submit="register"
      :initial-values="userData"
    >
      <!-- Name -->
      <div>
        <label>{{ $t("register.name") }}</label>
        <vee-field
          name="name"
          type="text"
          class="form-control"
          placeholder="Enter Name"
        />
        <ErrorMessage class="field_error" name="name" />
      </div>
      <!-- Email -->
      <div>
        <label>{{ $t("register.email") }}</label>
        <vee-field
          type="email"
          name="email"
          class="form-control"
          placeholder="Enter Email"
        />
        <ErrorMessage class="field_error" name="email" />
      </div>
      <!-- Password -->
      <div>
        <label>{{ $t("register.password") }}</label>
        <vee-field
          type="password"
          name="password"
          class="form-control"
          placeholder="Password"
        />
        <ErrorMessage class="field_error" name="password" />
      </div>
      <!-- Confirm Password -->
      <div>
        <label>{{ $t("register.confirm _password") }}</label>
        <vee-field
          name="confirm_password"
          type="password"
          class="form-control"
          placeholder="Confirm Password"
        />
        <ErrorMessage class="field_error" name="confirm_password" />
      </div>
      <!-- Country -->
      <div>
        <label>{{ $t("register.country") }}</label>
        <vee-field as="select" class="form-control" name="country">
          <option value="Austria">Austria</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Brazil">Brazil</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Canada">Canada</option>
          <option value="China">China</option>
          <option value="Czechia">Czechia</option>
          <option value="Denmark">Denmark</option>
          <option value="Estonia">Estonia</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="USA">USA</option>
          <option value="Mexico">Mexico</option>
        </vee-field>
        <ErrorMessage class="field_error" name="country" />
      </div>
      <!-- TOS -->
      <label>
        <vee-field type="checkbox" name="tos" value="1" />
        <i18n-t class="inline-block" keypath="register.accept" tag="label">
          <a href="#">{{ $t("register.TOS") }}</a>
        </i18n-t>
        <ErrorMessage class="field_error" name="tos" />
      </label>
      <submit-button :disabled="reg_in_submission">
        {{ $t("register.submit_btn") }}
      </submit-button>
    </vee-form>
  </div>
</template>

<script>
import SubmitButton from "./SubmitButton.vue";
export default {
  components: { SubmitButton },
  name: "RegistrationForm",
  data() {
    return {
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        password: "required|min:3|max:100",
        confirm_password: "passwords_mismatch:@password",
        country: "required|country_excluded:Mexico",
        tos: "tos",
      },
      userData: {
        country: "Germany",
      },
      reg_in_submission: false,
      error: false,
    };
  },
  methods: {
    async register(values) {
      this.reg_in_submission = true;
      try {
        await this.$store.dispatch("register", values);
      } catch (e) {
        this.reg_in_submission = false;
        this.error = true;

        return;
      }
      this.$router.push({ name: "account" });
    },
  },
};
</script>

<style>
</style>