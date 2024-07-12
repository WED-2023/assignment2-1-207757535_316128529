<template>
  <div class="container">
    <br><br><br><br><br>
    <h1 class="title">Login</h1>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        style="width:100px; display:block; background-color: #177d5b;"
        class="mx-auto w-100"
      >
        Login
      </b-button>
      <div class="mt-2">
        Do not have an account yet?
        <router-link to="register"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
    <b-alert
      class="mt-2"
      v-if="form.submitSuccess"
      variant="success"
      dismissible
      show
    >
      Login succeeded!
    </b-alert>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { Login } from "../services/auth.js";

export default {
  name: "Login",
  data() {
    return {
      success: true, // Change this to false to simulate login failure
      form: {
        username: "",
        password: "",
        submitError: undefined,
        submitSuccess: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        const response = await Login(this.form.username,this.form.password);
        if (response.status === 200 && response.data.success) {
          this.form.submitSuccess = true;
          this.$root.store.login(this.form.username);
          this.$router.push("/");
        } else {
          this.$root.toast("Failed to Login", "Username or Password are incorrect", "danger");
        }
      } catch (err) {
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      this.form.submitError = undefined;
      this.form.submitSuccess = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Login();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 400px;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.login-button {
  width: 100px;
  display: block;
  background-color: #1b9b70;
}
</style>
