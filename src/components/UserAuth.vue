<template>
  <button v-if="!isAuthenticated" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapMutations(['login', 'logout'])
  }
};
</script>
