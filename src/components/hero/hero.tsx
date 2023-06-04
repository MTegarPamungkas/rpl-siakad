import { NavLink } from "react-router-dom";
import circle3 from "../../assets/img/circle3-yellow.svg";
import dots3 from "../../assets/img/dots3-blue.svg";
import imgHero from "../../assets/img/hero.jpg";
const hero = () => {
  return (
    <section
      className="relative bg-white overflow-hidden"
      //   style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
    >
      <div className="py-4 ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                Portal Informasi Akademik Sekolah Pintar
              </h1>
              <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                Portal ini menyediakan informasi akademik terkini untuk siswa
                dan orang tua. Dapatkan akses ke jadwal sekolah, pengumuman
                penting, dan kegiatan akademik lainnya dengan mudah dan cepat
              </p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <NavLink
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                    to="informasi"
                  >
                    Informasi Terbaru
                  </NavLink>
                </div>
                {/* <div className="w-full md:w-auto py-1 md:py-0">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                    href="#"
                  >
                    Sign Up
                  </a>
                </div> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <img
                  className="absolute -left-14 -top-12 w-28 md:w-auto"
                  src={circle3}
                  alt=""
                />
                <img
                  className="absolute -right-7 -bottom-8 w-28 md:w-auto"
                  src={dots3}
                  alt=""
                />
                <img
                  className="relative rounded-7xl rounded-lg w-[90vh] mr-0 md:mr-6"
                  src={imgHero}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
