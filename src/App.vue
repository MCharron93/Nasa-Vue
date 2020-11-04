<template>
  <div class="container-fluid text-center">
    <h1 class="mainHeading">
      <img id="vueLogo" alt="Vue logo" src="./assets/logo.png">isit the Beauty of Space
    </h1>
    <div class="row justify-content-center">
      <query />
      <result />
      <div class="col-12">
        Photos go here
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Result from './components/Results'
import Query from './components/Query'

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Query, Result }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mainHeading{
  font-size: 32pt;
}
#vueLogo{
  height: 8vh;
}
</style>
