import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../../context/app.context";
import useAuth from "../../hooks/useAuth";
import useBerita from "../../hooks/useBerita";
import { useAuthStore, useUserStore } from "../../store/auth.store";
import { useInformasiKelasStore } from "../../store/berita.store";

{
  /* <button className='btn btn-outline-primary' onClick={logout} disabled={isLoading}>
						{isLoading ? '...' : 'Logout'}
					</button> */
}

const Navbar = () => {
  const { isLoading, user, error } = useAuthStore();
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { role, userDetail } = useUserStore();
  const [showModal, setShowModal] = useState(false);

  const { kelas } = useUserStore();
  const { setInformasiKelas, informasiKelas } = useInformasiKelasStore();
  const { getInformasiKelas } = useBerita();

  const nav = [
    { name: "Home", to: "/" },
    { name: "Informasi", to: "/informasi" },
    { name: "Profile", to: "/profile" },
    { name: "About", to: "/about" },
  ];

  const getData = async () => {
    setInformasiKelas([]);
    await getInformasiKelas(kelas);
  };

  useEffect(() => {
    const getData = async () => {
      setInformasiKelas([]);
      await getInformasiKelas(kelas);
    };
    getData();
  }, []);

  return (
    <div>
      <nav className="shadow-sm w-full z-0 sticky top-0">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  Siakad<span className="text-blue-500">web</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {nav.map((dataNav) => (
                    <NavLink
                      key={dataNav.name}
                      to={dataNav.to}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? ""
                          : isActive
                          ? "text-blue-600 cursor-pointer font-semibold px-3 py-2 text-md hover:font-black"
                          : "cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      {dataNav.name}
                    </NavLink>
                  ))}

                  <AuthProvider>
                    {role == "guru" ? (
                      <NavLink
                      to="/informasi/addinformasi"
                      className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                    >
                      Add Information
                    </NavLink>
                    ) : (
                      ""
                    )}
                    {user.email == null ? (
                      <NavLink
                        to="auth"
                        className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                      >
                        login
                      </NavLink>
                    ) : (
                      <div className="">
                        <button
                          onClick={logout}
                          // disabled={isLoading}
                          className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                        >
                          Logout
                        </button>
                      </div>
                    )}

                    {user.email == null ? (
                      ""
                    ) : (
                      <div
                        onClick={() => {
                          getData();
                          setShowModal(true);
                        }}
                        className="cursor-pointer grid grid-cols-2 text-white rounded-md text-sm font-medium "
                      >
                        <button
                          type="button"
                          className="rounded- mt-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">View notifications</span>
                          <svg
                            className="h-6 w-6"
                            fill="bg-blak"
                            viewBox="0 0 24 24"
                            // strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </AuthProvider>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="md:hidden" id="mobile-menu">
              {nav.map((dataNav) => (
                <NavLink
                  to={dataNav.to}
                  key={dataNav.name}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {dataNav.name}
                </NavLink>
              ))}
              <AuthProvider>
                {user.email == null ? (
                  ""
                ) : (
                  <div
                    onClick={() => {
                      getData();
                      setShowModal(true);
                    }}
                    className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Messages
                  </div>
                )}
                {role != "guru" ? (
                  ""
                ) : (
                  <NavLink
                    to="/informasi/addinformasi"
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Add Information
                  </NavLink>
                )}
                {user.email == null ? (
                  <NavLink
                    to="auth"
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    login
                  </NavLink>
                ) : (
                  <div className="">
                    <button
                      onClick={logout}
                      // disabled={isLoading}
                      className="cursor-pointer hover:bg-blue-600 text-red-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </AuthProvider>
            </div>
          )}
        </Transition>
      </nav>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <h3 className="font-bold text-base text-gray-800">
                    Kelas {kelas.replace(/-/g, " ").toUpperCase()}
                  </h3>
                  <h3 className="font-bold text-base text-gray-800">
                    Messages
                  </h3>
                  {informasiKelas.map((message: any) => {
                    return (
                      <NavLink
                        key={message.title}
                        to="informasikelas"
                        state={{ data: message }}
                      >
                        <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                          <div className=" inline-flex items-center justify-between w-full">
                            <div className="inline-flex items-center">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
                                alt="Messages Icon"
                                className="w-6 h-6 mr-3"
                              />
                              <h3 className="font-bold text-base text-gray-800">
                                {message.title}
                              </h3>
                            </div>
                            <p className="text-xs ml-6 text-gray-500">
                              {message.date}
                            </p>
                          </div>
                          <p className="mt-1 text-sm">You have a new message</p>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
