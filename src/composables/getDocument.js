import { ref, watchEffect } from "vue";
import { projectFirestore } from "@/firebase/config";

const getDocument = (collection, id) => {
  const document = ref(null);
  const error = ref(null);

  let documentRef = projectFirestore
    .collection(collection).doc(id);

  // watch changes
  const unsub = documentRef.onSnapshot(
    (doc) => {
      if(doc.data()) {
        document.value = { ...doc.data(), id: doc.id }
      } else {
        error.value = "that document does not exist"
      }
      // updates values

    }, err => {
      console.log(err.message);
      error.value = "could not fetch document";
    }
  );

  // launh the f once + when the component update 
  watchEffect((onInvalidate)=>{
    //unsub from prev coll
    onInvalidate(()=>unsub());
  })

  return { document, error };
};

export default getDocument;
