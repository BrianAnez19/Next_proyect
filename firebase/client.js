import { initializeApp } from "@firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDJf1Qp6nETT_TcY41PiiddpO_UQYc0VKg",
  authDomain: "twitterfordevs.firebaseapp.com",
  projectId: "twitterfordevs",
  storageBucket: "twitterfordevs.appspot.com",
  messagingSenderId: "724443657086",
  appId: "1:724443657086:web:4784d5fd73ce917658392f",
  measurementId: "G-Y4CNK3ESNN"
};


initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const {displayName, email, photoURL } = user
  
  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}


const auth = getAuth();
export const onAuthStateChanged = (onChange) => {
  return auth
    .onAuthStateChanged(user => {
      const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider();
  githubProvider.setCustomParameters(firebaseConfig);
  return signInWithPopup(auth, githubProvider);
};