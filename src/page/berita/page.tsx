import { BeritaProvider } from "../../context/berita.context";
import { useBeritaStore } from "../../store/berita.store";
import BeritaCard from "./beritaCard";

const Berita = () => {
  const { berita, isLoading, error } = useBeritaStore();
  return (
    <BeritaProvider>
      <div className="antialiased text-slate-500 min-h-[100vh]  bg-slate-100">
        <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 bg-white bg-opacity-20 shadow-lg backdrop-blur-lg md:px-8 xl:px-12 lg:max-w-6xl">
          <header className="py-12 sm:text-center">
            <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold ">
              Informasi Terbaru
            </h1>
            <p className="text-lg text-slate-700 ">
              Kami Akan Selalu Memperbarui Informasi Terbaru
            </p>
          </header>
          <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
            <div className="space-y-16">
              {berita.map((item: { title: any; isi: any; id: any }) => {
                return (
                  <div key={item.title}>
                    <BeritaCard berita={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </BeritaProvider>
  );
};

export default Berita;
