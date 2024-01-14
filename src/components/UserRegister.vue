<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'UserRegister',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async register() {
        try {
          const response = await this.$axios.post('/register', {
            username: this.username,
            password: this.password
          });
          console.log(response.data);
          // Handle registration success
        } catch (error) {
          console.error(error);
          // Handle registration error
        }
      }
    }
  }
  </script>

  <style scoped>
div {
  background-color: #f3e0dc; /* jasny, ciepły kolor tła */
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
}

h2 {
  color: #5a2a27; /* ciemniejszy kolor tekstu */
  font-family: 'Cookie', cursive; /* stylowy font, jeśli dostępny */
}

input[type="text"], input[type="password"] {
  border: 2px solid #5a2a27;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  width: 90%;
}

button {
  background-color: #5a2a27; /* kolor przycisku */
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  text-transform: uppercase;
}

button:hover {
  background-color: #7a3b34; /* kolor przycisku po najechaniu */
}
</style>
  