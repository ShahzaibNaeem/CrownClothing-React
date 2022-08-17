import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAmT-zj7cJ9UTqTtCGrx_ML5O9HdCNp_hY",
    authDomain: "crownclothing-db-ffe5c.firebaseapp.com",
    projectId: "crownclothing-db-ffe5c",
    storageBucket: "crownclothing-db-ffe5c.appspot.com",
    messagingSenderId: "791466343904",
    appId: "1:791466343904:web:cd4e79d8b4ba3607a63f85"
};

const app = initializeApp(firebaseConfig);

//   -----Google Signin with Popup-----
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//   ------------Firestore Db-----------
export const db=getFirestore();
export const createUserDocumentFromAuth= async(userAuth)=>{
   const userDocRef=doc(db,'users',userAuth.uid)   
   const userSnapshot= await getDoc(userDocRef);
   
   if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try {
        await setDoc(userDocRef,{displayName,email,createdAt});
    } catch (error) {
        console.log("Error creating the user",error.message);
    }
   }
   return userDocRef;
}