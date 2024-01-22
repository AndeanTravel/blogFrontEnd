<template >
  <div id="app" >
      <b-nav small class="nav justify-content-center " >
        <b-nav-item active><router-link to="/Login">Login</router-link></b-nav-item>
        <b-nav-item><router-link to="/Dashboard">Dashboard</router-link></b-nav-item>
        <b-nav-item><router-link to="/comentarios">Comentarios</router-link></b-nav-item>
      </b-nav>
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login/Login.vue';
import axios from 'axios';
import Dashboard from './components/DashboardPublicaciones/Dashboard.vue';


export default {

  data() {
    return {
      username: '',
      password: '',
    };
  },

  name: 'App',
  components: {
    Login,
    Dashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav{
  background: linear-gradient(to right, #0dc444a4, #feb47b);
  display: flex;
}



</style>
