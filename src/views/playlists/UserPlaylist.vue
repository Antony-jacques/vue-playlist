<template>
  <div class="user-playlist">
    <h3>My playlist</h3>
  </div>
</template>

<script>
import getUser from '@/composables/getUser';
import getCollection from '@/composables/getCollection';
export default {
  setup() {
    const { user } = getUser()
    const { documents: playlists } = getCollection(
      'playlists',
      ['userId', '==', user.value.uid]
      )
    
    console.log(playlists)

    return { playlists }

  }

}
</script>

<style>

</style>