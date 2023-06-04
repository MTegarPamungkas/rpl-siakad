import moment from "moment";
import { useNavigate } from "react-router-dom";
import { EditorQuill } from "../../components";
import BeritaDataService from "../../service/berita";
import { useUserStore } from "../../store/auth.store";
import { useAddBeritaStore } from "../../store/berita.store";

const addBerita = () => {
  const navigate = useNavigate();
  const {
    isiberita,
    titleberita,
    keteranganberita,
    setTitleBerita,
    setIsiBerita,
    setKeteranganBerita,
  } = useAddBeritaStore();

  const { role, userDetail } = useUserStore();
  const date = moment().format("MMMM DD, YYYY");
  const unixTime = new Date().getTime();

  const addBerita = async (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    if (!titleberita || !isiberita) {
      alert("Harap Isi Semua Data");
    } else {
      const newData = {
        isi: isiberita,
        title: titleberita,
        url: titleberita.replace(/\s+/g, "-"),
        keterangan: keteranganberita,
        tanggal: date,
        timestamp: unixTime,
      };
      try {
        await BeritaDataService.addBerita(newData);
        alert("Berhasil Mendaftar");
        setTitleBerita("");
        setIsiBerita("");
      } catch (err) {
        // console.log(err);
      }
      e.target.reset();
    }
  };

  // useEffect(() => {
  //   if (role != "guru") {
  //     navigate("/informasi");
  //   }
  // }, [role]);
  return (
    <div>
      {/* {role != "guru" ? (
        ""
      ) : ( */}
      <div className="p-4">
        <form onSubmit={addBerita}>
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
      {/* )} */}
    </div>
  );
};

export default addBerita;
