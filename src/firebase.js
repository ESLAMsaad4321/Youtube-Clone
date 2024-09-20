import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDpKG_FxSTXXPR_XYLpbEaSxjIg8WNGoJY",
    authDomain: "yt-clone-4114.firebaseapp.com",
    projectId: "yt-clone-4114",
    storageBucket: "yt-clone-4114.appspot.com",
    messagingSenderId: "495497259699",
    appId: "1:495497259699:web:1b3ff736851d7552a69ec6"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.auth();