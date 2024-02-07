import { firestore } from "../firebase/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");
let likeRef = collection(firestore, "likes");
let commentsRef = collection(firestore, "comments");
let connectionRef = collection(firestore, "connections");

// Reference to the "posts" collection
const dbRef = collection(firestore, "posts");

// Function to add a new status post
export const postStatus = (prop) => {
 
  addDoc(dbRef, prop)
    .then((res) => {
      toast.success("Posts has been added successfully");
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

// Function to get all status posts
export const getPosts = () => {
  return new Promise((resolve, reject) => {
    onSnapshot(
      dbRef,
      (snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          timestamp: doc.timestamp,
          ...doc.data(),
        }));
        resolve(posts);
      },
      reject
    );
  });
};