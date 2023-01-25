<template>
  <div>
    <nav>
      <router-link to="/">Welcome</router-link> |
      <router-link to="/servicio">Servicio</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <button class="btn btn-success"  id="principal" v-if="showPage"  @click="changePage">Calcular</button>
    <button class="btn btn-danger" id="secundario" v-else @click="welcomePage"> Volver </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPage: true
    }
  },
  methods: {
    changePage() {
      this.$router.replace({ path: 'servicio' });
      this.showPage = !this.showPage;
    },
    welcomePage() {
      this.$router.replace({ path: '/' });
      this.showPage = !this.showPage;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#principal {
  margin: 0 auto;
  display: block;
}

#secundario {
  margin: 0 auto;
  display: block;
}
</style>
