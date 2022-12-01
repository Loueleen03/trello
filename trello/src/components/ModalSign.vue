<script></script>
<template>
  <div
    class="modal fade"
    id="modalsign"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form id="form" @submit.prevent="register">
          <div class="modal-body">
            <div class="mb-3">
              <label for="name" class="form-label">Name :</label>
              <input
                v-model="user_nicename"
                type="text"
                class="form-control"
                id="name"
                placeholder=" Your Name"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address :</label>
              <input
                v-model="user_email"
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password :</label>
              <input
                v-model="user_pass"
                type="password"
                class="form-control"
                id="password"
                placeholder=" Your Password"
              />
            </div>
            <div class="mb-3">
              <label for="Cpassword" class="form-label"
                >Confirm Password :</label
              >
              <input
                type="text"
                class="form-control"
                id="Cpassword"
                placeholder="Confirme your Password"
              />
            </div>
          </div>
          <div class="modal-footer">
            <div class="textmodal">
              Already Registered ?
              <a
                data-bs-toggle="modal"
                data-bs-target="#modallogin"
                class="textmodalbtn"
              >
                Login here</a
              >
            </div>
            <button
              @click="register"
              id="register"
              type="button"
              class="btn btn-primary btn-modal"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import WPAPI from "wpapi";
export default {
  data: () => {
    return {
      count: 0,
      user_nicename: "",
      user_email: "",
      user_pass: "",
      Users: [],
    };
  },
  //   mounted() {
  //     fetch("http://5.135.119.239:3090/n")
  //       .then((response) => response.json())
  //       .then((data) => (this.Users = data.notes));
  //   },
  methods: {
    register(user_nicename, user_email, user_pass) {
      // console.log(user_nicename, user_email, user_pass)
      this.count++;
      this.Users.push({
        user_nicename: this.user_nicename,
        user_email: this.user_email,
        user_pass: this.user_pass,
        ID: this.count,
      });
      console.log(this.Users);
      // You must authenticate to be able to POST (create) a post
      var wp = new WPAPI({
        endpoint: "http://localhost:8888/wordpress/wp-json",
        // This assumes you are using basic auth, as described further below
        username: "alexandrebecretnyc@gmail.com",
        // email: "alexandrebecretnyc@gmail.com",
        password: "fMt56KVNJD@KuYhUzkKp^xLX",
        // "oodXz51cC%jx#qcdMm"
      });
      wp.users()
        .create({
          // "name", "email" and "password" are the only required properties
          username: this.user_nicename,
          email: this.user_email,
          password: this.user_pass,
          // Users will be created as a draft by default if a specific "status"
          // is not specified
          status: "publish",
        })
        .then(function (response) {
          // "response" will hold all properties of your newly-created post,
          // including the unique `id` the post was assigned on creation
          console.log(response.id);
        });
      //   .then(() => window.location.reload());
    },
  },
};
</script>