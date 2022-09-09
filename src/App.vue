<template>
  <div id="app">
    <nav>
      <router-link to="/">Esileht</router-link> |
      <router-link to="/account">Minu konto</router-link> |
      <router-link to="/addEvent">Ürituse lisamine</router-link> |
      <router-link to="/admin">Admin vaade</router-link> |
      <router-link to="/allEvents">Sündmused</router-link> |
      <router-link to="/event">Sündmus X</router-link> |
      <router-link to="/logIn">Logi sisse/Loo konto</router-link> |
      <router-link to="/organizer">Korraldajale</router-link> |
      <router-link to="/register">Registreerumine üritusele</router-link> |
      <router-link to="/volunteer">Vabatahtlikule</router-link> |

    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  background-image: url('../src/assets/picture_volunteers.jpg');
  background-attachment: fixed;
  background-size: cover;
}
</style>
<script>export default {
  components: {}
}
</script>