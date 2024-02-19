import { projectStorage } from "@/firebase/config";
import getUser from "./getUser";
import { ref } from "vue";

const { user } = getUser()

const useStorage = () => {
  const error = ref(null);
  const url = ref(null); // public url that fb send back after we save the image
  const filePath = ref(null); // path to where we save the file in firebase storage

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}` // where we want to save

    const storageRef = projectStorage.ref(filePath.value) // ref to a specific file in storage

    try {
      const res = await storageRef.put(file)
      url.value = await res.ref.getDownloadURL()

    } catch (error) {
      console.log(error.message)
      error.value = error.message
    }
  }

  const deleteImage = async (path)=> {
    const storageRef = projectStorage.ref(filePath.value)

    try {
      await storageRef.delete()
    } catch (error) {
      console.log(error.message)
      error.value = error.message
    }

  }

  return { url, filePath, error, uploadImage, deleteImage }
};

export default useStorage
