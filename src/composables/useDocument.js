import { projectAuth, projectFirestore } from "@/firebase/config"
import { ref } from "vue"

const useDocument = (collection, id) => {

  const error = ref(null)
  const isPending = ref(false)

  let docRef =projectFirestore.collection(collection).doc(id)

  const deleteDoc = async ()=>{
    isPending.value = true
    error.value = null
    
    try {
      const res =await docRef.delete()
      isPending.value = false

      return res
      
    } catch (error) {
      console.log(error.message)
      isPending.value = false
      error.value='could not delete doc'
    }
  }

  const updateDoc = async (updates)=>{
    isPending.value = true
    error.value = null
    
    try {
      const res = await docRef.update(updates)
      isPending.value = false

      return res
      
    } catch (error) {
      console.log(error.message)
      isPending.value = false
      error.value='could not update doc'
    }
  }



  return { error, isPending, deleteDoc, updateDoc }

}

export default useDocument