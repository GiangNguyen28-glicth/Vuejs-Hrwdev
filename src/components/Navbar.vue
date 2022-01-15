<template>
  <div class="navbar">
    <h1>Hmmm To do something ....!!</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="isAuthenticated">Total Todos:{{ todos.length }}
          <button @click="loginOrLogout">Logout</button>
      </li>
      <button v-else @click="loginOrLogout">Login</button>
    </ul>
   
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "Navbar",
  computed:{...mapGetters(['isAuthenticated','todos'])},
//   methods:mapMutations(['TOGGLE_AUTH'])
  methods:{
    loginOrLogout(){
        this.$store.commit('TOGGLE_AUTH')
    }
  }
};
</script>

<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>