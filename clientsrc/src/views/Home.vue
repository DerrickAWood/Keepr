<template>
  <div class="home">
    <h1>Welcome, Check out the dashboard and add some cool stuff to your vaults!</h1>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  // methods: {
  //   logout() {
  //     this.$store.dispatch("logout");
  //   }
  // }
};
</script>
