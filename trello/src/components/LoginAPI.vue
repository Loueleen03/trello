<template>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    />
    <form id="form" @submit.prevent="loginUser">
      <div class="form-floating mb-3">
        <input
          v-model="newEmail"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          v-model="newPassword"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button id="login" type="submit" class="btn btn-light mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check-square-fill"
          viewBox="0 0 16 16"
        ><path
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
        />
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: "LoginAPI",
  data() {
    return {
      newEmail: "",
      newPassword: "",
    };
  },
  props: ["login"],
  methods: {
    loginUser() {
      console.log(this);
      this.login(this.newEmail, this.newPassword);
    },
  },
};
</script>
