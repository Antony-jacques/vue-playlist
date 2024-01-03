import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const useCollection = (collection) => {
  // we declare a new ref per collection because we may use several coll
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message";
    }
  };
  return { error, addDoc };
};

export default useCollection;
