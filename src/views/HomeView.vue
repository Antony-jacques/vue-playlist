<template>
  <div class="home">
    <ListView :playlists="documents"/>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import ListView from '@/components/ListView.vue';

export default {
  name: 'HomeView',
  components: {
    ListView,
  },
  setup(){
    const { documents, error } = getCollection('playlists');

    return { documents, error }
  }
}
</script>
