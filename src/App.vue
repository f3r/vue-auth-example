<template>
  <header class="header">
    <h3>MyApp</h3>
    <nav v-if="!store.isLoggedIn">
      <RouterLink to="/">Login</RouterLink> |
      <RouterLink to="/signup">Signup</RouterLink>
    </nav>
    <nav v-else>
      Welcome {{ store.userEmail }} -
      <button @click="logout">Logout</button>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/store'
</script>

<script>

export default {
  data() {
    return {
      store: useAuthStore()
    }
  },
  methods: {
    logout() {
      this.store.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped lang="scss">
.header {

  h3,
  nav {
    display: inline-block;
    margin-right: 40px;
  }
}
</style>
