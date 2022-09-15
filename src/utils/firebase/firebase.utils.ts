import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,User, NextOrObserver } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs,QueryDocumentSnapshot } from "firebase/firestore"
import { Category } from "../../store/categories/category.types";

const firebaseConfig = {
    apiKey: "AIzaSyAmT-zj7cJ9UTqTtCGrx_ML5O9HdCNp_hY",
    authDomain: "crownclothing-db-ffe5c.firebaseapp.com",
    projectId: "crownclothing-db-ffe5c",
    storageBucket: "crownclothing-db-ffe5c.appspot.com",
    messagingSenderId: "791466343904",
    appId: "1:791466343904:web:cd4e79d8b4ba3607a63f85"
};

const app = initializeApp(firebaseConfig);

//   -----Google Signin with Popup and with Email/Password-----
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInAuthUserWithEmailAndPassword = async (email:string, password:string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}
//   -----SignOut User-----
export const SignOutUser = async () => await signOut(auth)

// ----State Observer Listener----(Called everytime user signIn or SignOut & Listen's All time)
export const onAuthStateChangedlistener = (callback:NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const getCurrentUser = ():Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe()
                resolve(userAuth)
            },
            reject 
            );
    })
}

//   ------------SignUp with Email/Password-----------
export const createAuthUserWithEmailAndPassword = async (email:string, password:string) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password) 
}


//   -----------------Firestore Db-------------------
export const db = getFirestore();

export type AdditionalInformation={
    displayName?:string
}
export type UserData={
    createdAt:Date;
    displayName:string;
    email:string
}

export const createUserDocumentFromAuth = async (userAuth:User, additionalInformation:AdditionalInformation):Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
        } catch (error) {
            console.log("Error creating the user", error);
        }
    }
    return userSnapshot as QueryDocumentSnapshot<UserData>;
}

// -------Write Batch Operation in FireStore Db-----
export type ObjectsToAdd={
    title:string
}

export const addCollectionsAndDocuments = async <T extends ObjectsToAdd>(collectionKey:string, objectsToAdd:T[]) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })
    await batch.commit();
}

export const getCategoriesAndDocumnets = async ():Promise<Category[]> => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q); //console.log(querySnapshot.docs[0].data());
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category)
}



// Batch Writes:
// whenever we want to write,read,delete with changes that should only be applied if none of these changes should failed then batch writes are used . like Transaction(successfull unit of works)


