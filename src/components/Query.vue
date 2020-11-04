<template>
  <div class="Query col-6">
    <form @submit.prevent="getPicture()">
      <label for="query"></label>
      <input type="text"
             class="form-control"
             name="query"
             placeholder="Search YYYY-MM-DD"
             v-model="state.query"
      >
      <button type="submit" class="btn btn-info btn-block">
        Search
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { pictureService } from '../services/PictureService'

export default {
  name: 'Query',
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      getPicture() {
        pictureService.getPicture(state.query)
      }
    }
  }

}
</script>

<style>

</style>
