<template>
  <nav id="nav" class="navbar navbar-expand-lg">
      <div class="container">
          <router-link class="navbar-brand" to="/">Mohammad Shaif</router-link>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link class="nav-link " to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link  " to="/about">About</router-link>
              </li>
            </ul>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar{
      background: black;
    }
</style>
