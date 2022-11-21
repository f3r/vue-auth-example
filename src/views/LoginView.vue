<template>
  <main>
    <h1>LOGIN</h1>

    <form class="form">
      <label>
        EMAIL
        <input type="email" v-model="newUser.email"/>
      </label>

      <label>
        PASSWORD
        <input type="password" v-model="newUser.password" />
      </label>

      <button @click.prevent="loginUser()">LOGIN</button>
    </form>
  </main>
</template>

<script>
import { useAuthStore } from '../stores/store'

import API from '../services/api.js';

export default {
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      },
      authStore: useAuthStore()
    }
  },
  methods: {
    async loginUser() {
      const data = await API.login(this.newUser)
      if (data.error) {
        alert('wrong username/password')
      } else {
        this.authStore.login(data.token, data.email)
        this.$router.push({name: 'checkAvailableRooms'})
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  background-color: rgb(181, 229, 255);
  padding: 15px;
  label {
    display: block;
    padding: 5px;
    margin-top: 10px;
  }
}
</style>
