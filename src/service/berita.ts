import { db } from "../firebase";

import {
  addDoc,
  collection,
  deleteDoc,
  doc, getDocs,
  orderBy,
  query,
  updateDoc,
  where
} from "firebase/firestore";


const beritaColRef = collection(db, "berita");
class BeritaDataService {
  addBerita = (newBerita: any) => {
    return addDoc(beritaColRef, newBerita);
  };

  addInformationKelas = (newInformasi: any) => {
    return addDoc(collection(db, "informationkelas"), newInformasi);
  };

  updatePendaftaran = (id: string, updatedPendaftaran: any) => {
    const PendaftaranDoc = doc(db, "data_pendaftaran", id);
    return updateDoc(PendaftaranDoc, updatedPendaftaran);
  };

  deletePendaftaran = (id: string) => {
    const PendaftaranDoc = doc(db, "data_pendaftaran", id);
    return deleteDoc(PendaftaranDoc);
  };

  getAllBerita = () => {
    return getDocs(query(beritaColRef, orderBy("timestamp", "desc")));
  };

  getBerita = (url: string) => {
    const collection_ref = collection(db, "berita");
    const q = query(collection_ref, where("url", "==", `${url}`));
    return q;
  };

  getInformasiKelas = (code: string) => {
    const collection_ref = collection(db, "informationkelas");
    const q = query(collection_ref, where("code", "==", `${code}`));
    return q;
  };
}

export default new BeritaDataService();
