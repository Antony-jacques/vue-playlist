import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const user = ref(projectAuth.currentUser);

// this f fire everytime the user login or logout
// if the user is logged in, user's data are in _user
projectAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
