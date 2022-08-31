import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getDatabase} from "firebase/database"
import {getStorage} from "firebase/storage"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAjmtoWzDslar9oy9jzGdl0gKwHg6KpK-I",
    authDomain: "disneyplusclone-2204.firebaseapp.com",
    projectId: "disneyplusclone-2204",
    storageBucket: "disneyplusclone-2204.appspot.com",
    messagingSenderId: "95947070036",
    appId: "1:95947070036:web:74175b78aebcea038eebc1",
    measurementId: "G-FJ088BRD6M"
  });

  const auth=getAuth(firebaseApp);
  const db=getDatabase(firebaseApp);
  const provider=new GoogleAuthProvider();
  const storage=getStorage(firebaseApp);

  export{auth,provider,storage};
  export default db;