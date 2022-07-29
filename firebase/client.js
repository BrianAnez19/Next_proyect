import { initializeApp } from "@firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore, collection,
  Timestamp, addDoc, query,
  getDocs, setDoc, doc
} from 'firebase/firestore/lite';

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
  const { email, photoURL, uid } = user

  const displayName = user.providerData.map(us => {
    const { displayName } = us
    return displayName
  })

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

export const addDevit = async ({ userID, avatar, userName, content }) => {

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

export const fetchLatestDevits = async () => {
  const q = query(collection(db, "devits"));
  const querySnap = await getDocs(q);
  const data = querySnap.docs.map((doc) => {
    const data = doc.data()
    const id = doc.id
    const { createdAt } = data

    // formateo directo y manual a modo fecha
    // const date = new Date(createdAt.seconds * 1000)
    // const normalizedCreatedAt = new Intl.DateTimeFormat("es-ES").format(
    //   date)
      return {
        ...data,
        id,
        // createdAt: normalizedCreatedAt,
        createdAt: +createdAt.toDate(),

      };

  })
  return data;
};
 