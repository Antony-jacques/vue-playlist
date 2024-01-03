import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)
const signup = async (email, password, displayName) => {
  error.value = null // reset error value

  try {
    const response = await projectAuth.createUserWithEmailAndPassword(email, password)
    if(!response){
      throw new Error('Could not complete the signup')
    }
    console.log(response.user)
    await response.user.updateProfile({ displayName })
    error.value = null

    return response

  } catch(err){
    console.log(err.message)
    error.value = err.message
  }

}

const useSignup = () => {
  return { error, signup }
}

export default useSignup