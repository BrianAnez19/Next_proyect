import { initializeApp } from "@firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, Timestamp, addDoc, setDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDJf1Qp6nETT_TcY41PiiddpO_UQYc0VKg",
  authDomain: "twitterfordevs.firebaseapp.com",
  projectId: "twitterfordevs",
  storageBucket: "twitterfordevs.appspot.com",
  messagingSenderId: "724443657086",
  appId: "1:724443657086:web:4784d5fd73ce917658392f",
  measurementId: "G-Y4CNK3ESNN"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    userName: displayName,
    email,
    uid
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

export const addDevit = async ({userID, avatar, userName, content}) => {

   return await addDoc(collection(db, "devits"), {
    avatar,
    content,
    userID,
    userName,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
    });

}