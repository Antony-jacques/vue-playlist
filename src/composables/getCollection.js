import { ref, watchEffect } from "vue";
import { projectFirestore } from "@/firebase/config";

const getCollection = (collection, query) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

    if(query) {
      collectionRef = collectionRef.where(...query) // wehen using a query we have to use an index
    }

  // watch changes
  const unsub = collectionRef.onSnapshot(
    (snap) => {
      console.log('snapshot')
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      // updates values
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch data";
    }
  );

  // launh the f once + when the component update 
  watchEffect((onInvalidate)=>{
    //unsub from prev coll
    onInvalidate(()=>unsub())
  })

  return { documents, error };
};

export default getCollection;
