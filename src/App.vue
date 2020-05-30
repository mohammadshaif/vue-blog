<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "../src/components/Header";
export default {
  components: {
    Header
  }
}
</script>


<style>

body{
  background: #00A59C;
}
#app {
  color: #ffffff;
}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
