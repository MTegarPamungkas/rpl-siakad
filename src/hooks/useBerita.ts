import { getDocs } from "firebase/firestore";
import BeritaDataService from "../service/berita";
import { useBeritaStore, useGetBeritaStore, useInformasiKelasStore } from "../store/berita.store";

const useBerita = () => {
  const { berita, setBerita, isLoading, setLoading, error, setError } =
    useBeritaStore();
  const { detailberita, setDetailBerita } = useGetBeritaStore();

  const { informasiKelas, setInformasiKelas } = useInformasiKelasStore();
  const getBerita = async () => {
    const data = await BeritaDataService.getAllBerita();
    setBerita(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getBeritaByTitle = async (url: string) => {
    const data = await BeritaDataService.getBerita(url);
    const doc_refs = await getDocs(data);
    const res: { title: string }[] = [];

    doc_refs.forEach((berita) => {
      res.push({
        title: berita.id,
        ...berita.data(),
      });
    });

    setDetailBerita(res);
    return res;
  };

  const getInformasiKelas = async (code: string) => {
    const data = await BeritaDataService.getInformasiKelas(code);
    const doc_refs = await getDocs(data);
    const res: { code: string }[] = [];

    doc_refs.forEach((informasi) => {
      res.push({
        code: informasi.id,
        ...informasi.data(),
      });
    });

    setInformasiKelas(res);
    return res;
  };

  return { getBerita, getBeritaByTitle, getInformasiKelas, isLoading, error };
};

export default useBerita;
