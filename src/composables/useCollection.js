import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const useCollection = (collection) => {
  // we declare a new ref per collection because we may use several coll
  const error = ref(null);
  const isPending = ref(false)

  const addDoc = async (doc) => {
    error.value = null;
    isPending.value = true;
    try {
      const res = await projectFirestore.collection(collection).add(doc); // object containing id
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message";
      isPending.value = false
    }
  };
  return { error, addDoc, isPending };
};

export default useCollection;
