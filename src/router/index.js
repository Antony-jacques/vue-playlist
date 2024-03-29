import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue'
import PlaylistDetails from '../views/playlists/PlaylistDetails.vue'
import UserPlaylist from '../views/playlists/UserPlaylist.vue'

// route guards
import { projectAuth } from '@/firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if(!user){
    next({ name: 'Login'})
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth
  },
  {
    path: '/playlists/:id',
    name: 'PlaylistDetails',
    component: PlaylistDetails,
    beforeEnter: requireAuth,
    props: true // to accept route param as props
  },
  {
    path: '/playlist/user',
    name: 'UserPlaylist',
    component: UserPlaylist,
    beforeEnter: requireAuth,

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
