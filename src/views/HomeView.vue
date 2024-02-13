<template>
  <div class="home">
  <div v-if="error" class="error"> Could not fetch the data</div>
  <div v-if="documents">
    <div v-for="playlist in documents" :key="playlist.id"> {{ playlist.title }}</div>
  </div>
  <p v-else> {{ error }}</p>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';

export default {
  name: 'HomeView',
  components: {
    
  },
  setup(){
    const { documents, error } = getCollection('playlists');

    return { documents, error }
  }
}
</script>
