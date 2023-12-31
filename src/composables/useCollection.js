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
      await projectFirestore.collection(collection).add(doc);
      isPending.value = false
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message";
      isPending.value = false
    }
  };
  return { error, addDoc, isPending };
};

export default useCollection;
