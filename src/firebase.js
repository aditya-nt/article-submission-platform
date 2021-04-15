import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"



const app = firebase.initializeApp({
  apiKey: "AIzaSyBgzJP9BNnTGMxzluOM-HqihjYUTutotoE",
  authDomain: "article-submission-platform.firebaseapp.com",
  databaseURL: "https://article-submission-platform-default-rtdb.firebaseio.com",
  projectId: "article-submission-platform",
  storageBucket:"article-submission-platform.appspot.com",
  messagingSenderId: "619959462171",
  appId: "1:619959462171:web:12a809662d1fe36a2bcbbe"
})

export const projectStorage = firebase.storage()
export const auth = app.auth()
export default app
