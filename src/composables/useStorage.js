import { projectStorage } from "@/firebase/config";
import { ref } from "vue";

const { user } = getUser()

const useStorage = () => {
  const error = ref(null);
  const url = ref(null); // public url that fb send back after we save the image
  const filePath = ref(null); // path to where we save the file in firebase storage

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}` // where we want to save

    const storageRef = projectStorage.ref(filePath.value)

    try {
      const res = await storageRef.put(file)
      url.value = res.ref.getDownloadURL

    } catch (error) {
      console.log(error.message)
      error.value = error.message
    }
  }

  return { url, filePath, error, uploadImage }
};

export default useStorage
