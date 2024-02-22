<template>
  <div class="user-playlist">
    <h3>My playlist</h3>
  </div>
</template>

<script>
import getUser from '@/composables/getUser';

export default {
  setup() {
    const { user } = getUser()
    console.log('voici lid', user.value.uid)

  }

}
</script>

<style>

</style>