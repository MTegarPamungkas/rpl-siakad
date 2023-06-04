const Profile = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-3">Profil Sekolah</h2>
              <p>
                SMK XYZ adalah sekolah menengah kejuruan yang berada di Jakarta.
                Sekolah ini didirikan pada tahun 1990 dan telah meluluskan lebih
                dari 10.000 siswa. Visi SMK XYZ adalah menjadi sekolah terbaik
                di Indonesia dalam menghasilkan lulusan yang siap kerja dan
                berwirausaha. Misi SMK XYZ adalah memberikan pendidikan dan
                pelatihan yang berkualitas serta mengembangkan potensi siswa
                agar dapat bersaing di dunia kerja.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-3">Program Keahlian</h2>
              <ul className="list-disc list-inside mb-5">
                <li>Teknik Komputer dan Jaringan</li>
                <li>Teknik Elektronika Industri</li>
                <li>Teknik Otomotif</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-3">Sarana Prasarana</h2>
              <ul className="list-disc list-inside mb-5">
                <li>Laboratorium Komputer</li>
                <li>Laboratorium Elektronika</li>
                <li>Bengkel Otomotif</li>
                <li>Perpustakaan</li>
                <li>Ruang Kelas yang Nyaman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
