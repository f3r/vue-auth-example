<template>
  <main>
    <h1>SIGNUP</h1>
    <form class="form">
      <label>
        NAME
        <input type="text" v-model="newUser.name" />
      </label>

      <label>
        EMAIL
        <input type="email" v-model="newUser.email"/>
      </label>

      <label>
        PASSWORD
        <input type="password" v-model="newUser.password" />
      </label>

      <button @click.prevent="signupUser()">SIGNUP</button>
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
        name: '',
        email: '',
        password: ''
      },
      authStore: useAuthStore()
    }
  },
  methods: {
    async signupUser() {
      const data = await API.signup(this.newUser)
      if (data.error) {
        alert('Error creating account')
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
  padding: 15px;
  background-color: rgb(181, 229, 255);
  label {
    display: block;
    padding: 5px;
    margin-top: 10px;
  }
}
</style>
