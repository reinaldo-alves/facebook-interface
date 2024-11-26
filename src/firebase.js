import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, setDoc, updateDoc, deleteDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { firebaseConfig } from "./credential"

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const dbCollection = (name) => collection(db, name);
const dbSubCollection = (ref, name) => collection(ref, name);
const dbDoc = (col, id) => doc(db, col, id);
const dbAdd = (ref, id, object) => setDoc(doc(ref, id), object);
const dbEdt = (col, id, object) => updateDoc(doc(db, col, id), object);
const dbDel = (col, id) => deleteDoc(doc(db, col, id));
const dbOrderBy = (ref, prop, order) => query(ref, orderBy(prop, order));
const dbOnSnapshot = (query, action) => onSnapshot(query, action)
const auth = getAuth(app);
const authCreate = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const authSignIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
const authUpdate = (user, displayName, photoURL) => updateProfile(user, { displayName, photoURL });
const authOnStateChanged = (callback) => onAuthStateChanged(auth, callback)
const authSignOut = (success, error) => signOut(auth).then(success).catch(error)
const storage = getStorage(app);
const storageRef = (location) => ref(storage, location);
const storagePut = (ref, data ) => uploadBytesResumable(ref, data)
const getURL = (ref) => getDownloadURL(ref)
const functions = getFunctions(app);

export {dbCollection, dbSubCollection, dbAdd, dbDoc, dbEdt, dbDel, dbOrderBy, dbOnSnapshot, authCreate, authSignIn, authUpdate, authOnStateChanged, authSignOut, storageRef, storagePut, getURL, functions, serverTimestamp}
