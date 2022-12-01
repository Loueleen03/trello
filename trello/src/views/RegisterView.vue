<script>
import RegisterAPI from "../components/RegisterAPI.vue";
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
        user_nicename: user_nicename,
        user_email: user_email,
        user_pass: user_pass,
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
          username: user_nicename,
          email: user_email,
          password: user_pass,
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
  components: { RegisterAPI },
};
</script>
<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  />
  <div>
    <RegisterAPI :register="register" />
  </div>
</template>