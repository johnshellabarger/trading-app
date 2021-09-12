import firebase from 'firebase/app'
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCaUBWbvsVmDr5B4cFaRS32GHLB4g8BeZY",
    authDomain: "upload-image-96574.firebaseapp.com",
    projectId: "upload-image-96574",
    storageBucket: "upload-image-96574.appspot.com",
    messagingSenderId: "600768746595",
    appId: "1:600768746595:web:1ab5bf511c7ffb42ec9456",
    measurementId: "G-G75GLXXSNG"
  };
  
firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
  
  export {
    storage,
    firebase as default 
  }
