<template>
  <div class="result col-12">
    <h3>Result: </h3>
    <div>{{ photo.date }}</div>
    <div>{{ photo.explanation }}</div>
    <img :src="photo.hdurl" alt="cool space photo">
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'Result',
  setup() {
    return {
      photo: computed(() => AppState.photo)
    }
  },
  components: { }

}
</script>

<style>

</style>
