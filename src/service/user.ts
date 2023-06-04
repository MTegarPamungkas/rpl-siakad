import { db } from "../firebase";

import {
  addDoc,
  collection, query, where
} from "firebase/firestore";


const beritaColRef = collection(db, "user");
class UserDataService {
  
  getUserEmail = (email: string) => {
    const collection_ref = collection(db, "user");
    const q = query(collection_ref, where("email", "==", `${email}`));
    return q;
  };

  addUser = (newUser: any) => {
    return addDoc(beritaColRef, newUser);
  };
}

export default new UserDataService();
