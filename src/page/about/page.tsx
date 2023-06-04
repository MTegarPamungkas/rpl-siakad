const About = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-3">Visi</h2>
              <p>
                Menjadi sekolah terbaik di Indonesia dalam menghasilkan lulusan
                yang siap kerja dan berwirausaha.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-3">Misi</h2>
              <ul className="list-disc list-inside mb-5">
                <li>Memberikan pendidikan dan pelatihan yang berkualitas.</li>
                <li>
                  Mengembangkan potensi siswa agar dapat bersaing di dunia
                  kerja.
                </li>
                <li>
                  Membangun karakter siswa yang berintegritas dan bertanggung
                  jawab.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
