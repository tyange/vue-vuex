<template>
  <!-- <button v-if="!isAuthenticated" @click="login">Login</button>
  <button v-else @click="logout">Logout</button> -->
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
// import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    // ...mapGetters(['isAuthenticated'])
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {
    // ...mapMutations(['login', 'logout'])
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>
