<!-- eslint-disable prettier/prettier -->
<script>
import LoginAPI from "../components/LoginAPI.vue";
import WPAPI from "wpapi";
export default {
  components: { LoginAPI },
  data: () => {
    return {
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
    login(user_email, user_pass) {
      // console.log(user_nicename, user_email, user_pass)
      this.Users.push({
        user_email: user_email,
        user_pass: user_pass,
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
        .get(`https://example.com/wp-json/wp/v2/users/?search=${this.user_mail}`);
      //   .then(() => window.location.reload());
    },
  },
};
</script>
<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  />
  <div>
    <LoginAPI :login="login" />
  </div>
</template>