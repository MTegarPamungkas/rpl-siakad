import { useState } from "react";
import img from "../../assets/img/login.webp";
import useAuth from "../../hooks/useAuth";
import UserDataService from "../../service/user";
import 'firebase/auth';
const AddUser = () => {
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);
  const { signUp } = useAuth();
  const [kelas, setKelas] = useState("");
  const [type, setType] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [tahun, setTahun] = useState("");
  const [role, setRole] = useState("");

  const onSubmit = async (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    if (
      !password.length ||
      !email.length ||
      !kelas.length ||
      !type.length ||
      !jurusan.length ||
      !tahun.length ||
      !role.length
    ) {
      setInvalid(true);
      alert("Harap isi semua data");
    } else {
      setInvalid(false);
      const newData = {
        email: email,
        kelas: `${kelas}-${type}-${jurusan}-${tahun}`,
        role: role,
      };
      try {
        await UserDataService.addUser(newData);
        signUp(email, password);
        alert("Berhasil Mendaftar");
        setEmail("");
        setPassword("");
        setKelas("");
        setType("");
        setJurusan("");
        setTahun("");
        setRole("");
      } catch (err) {
        // console.log(err);
        alert("terjadi kesalahan");
      }
      e.target.reset();
    }
  };

  const datakelas = [
    { value: "1", label: "Kelas 1" },
    { value: "2", label: "Kelas 2" },
    { value: "3", label: "Kelas 3" },
  ];
  const datatype = [
    { value: "a", label: "Kelas A" },
    { value: "b", label: "Kelas B" },
    { value: "c", label: "Kelas C" },
    { value: "d", label: "Kelas D" },
    { value: "e", label: "Kelas E" },
    { value: "f", label: "Kelas F" },
  ];
  const datajurusan = [
    { value: "rpl", label: "RPL" },
    { value: "geomatika", label: "Geomatika" },
    { value: "tkj", label: "TKJ" },
    { value: "tata-busana", label: "Tata Busana" },
  ];

  const datatahun = [
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  const datarole = [
    { value: "client", label: "Siswa" },
    { value: "guru", label: "Guru" },
  ];

  return (
    <form onSubmit={onSubmit}>
      <section className="h-fit py-8 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img src={img} alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />

          <select
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            onChange={(e) => setKelas(e.target.value)}
            value={kelas}
            placeholder="Kelas"
          >
            <option value="">Pilih Kelas</option>
            {datakelas.map((kelas) => (
              <option value={kelas.value}>{kelas.label}</option>
            ))}
          </select>

          <select
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            onChange={(e) => setType(e.target.value)}
            value={type}
            placeholder="Type"
          >
            <option value="">Pilih Type</option>
            {datatype.map((type) => (
              <option value={type.value}>{type.label}</option>
            ))}
          </select>

          <select
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            onChange={(e) => setJurusan(e.target.value)}
            value={jurusan}
            placeholder="Jurusan"
          >
            <option value="">Pilih Jurusan</option>
            {datajurusan.map((jurusan) => (
              <option value={jurusan.value}>{jurusan.label}</option>
            ))}
          </select>

          <select
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            onChange={(e) => setTahun(e.target.value)}
            value={tahun}
            placeholder="Tahun"
          >
            <option value="">Pilih Tahun</option>
            {datatahun.map((tahun) => (
              <option value={tahun.value}>{tahun.label}</option>
            ))}
          </select>

          <select
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            onChange={(e) => setRole(e.target.value)}
            value={role}
            placeholder="Role"
          >
            <option value="">Pilih Role</option>
            {datarole.map((role) => (
              <option value={role.value}>{role.label}</option>
            ))}
          </select>

          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Daftar
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default AddUser;
