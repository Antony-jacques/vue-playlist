<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.png" alt="logo" />
      <h1><router-link :to="{ name: 'Home' }">Vue Playlists</router-link></h1>
      <div class="links">
        <div v-if="user">

          <button  @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
      <div class="error">{{ error }}</div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser"

export default {
  setup() {
    const router = useRouter();
    const { logout } = useLogout();
    const { user } = getUser()
    const handleClick = () => {
      logout();
      router.push({ name: "Login" });
    };

    return { handleClick, logout, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>
