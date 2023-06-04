import moment from "moment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EditorQuill } from "../../components";
import BeritaDataService from "../../service/berita";
import { useUserStore } from "../../store/auth.store";
import { useAddBeritaStore } from "../../store/berita.store";

const AddInformationKelas = () => {
  const navigate = useNavigate();
  const {
    isiberita,
    titleberita,
    keteranganberita,
    setTitleBerita,
    setIsiBerita,
    setKeteranganBerita,
  } = useAddBeritaStore();

  const { role, userDetail, kelas } = useUserStore();
  const date = moment().format("MMMM DD, YYYY");

  const addInformation = async (e: {
    target: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    if (!titleberita || !isiberita) {
      alert("Harap Isi Semua Data");
    } else {
      const newData = {
        isi: isiberita,
        title: titleberita,
        keterangan: keteranganberita,
        tanggal: date,
        timestamp: new Date().getTime(),
        code: kelas,
      };
      try {
        await BeritaDataService.addInformationKelas(newData);
        alert("Berhasil Mendaftar");
        setTitleBerita("");
        setIsiBerita("");
      } catch (err) {
        // console.log(err);
      }
      e.target.reset();
    }
  };

  useEffect(() => {
    if (role != "guru") {
      navigate("/informasi");
    }
  }, [role]);
  return (
    <div>
      {role != "guru" ? (
        ""
      ) : (
        <div className="p-4">
          <h1>Kelas {kelas.replace(/-/g, " ").toUpperCase()}</h1>
          <form onSubmit={addInformation}>
            <input
              type="text"
              disabled
              placeholder="Title"
              value={date}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
            />
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitleBerita(e.target.value)}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
            />
            <input
              type="text"
              placeholder="Keterangan"
              onChange={(e) => setKeteranganBerita(e.target.value)}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
            />
            <EditorQuill />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 mt-2 text-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Tambah
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddInformationKelas;
