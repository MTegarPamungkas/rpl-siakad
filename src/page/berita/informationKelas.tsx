import { useLocation, useNavigate } from "react-router-dom";
import SunEditor from "suneditor-react";
// import Berita from "../../service/berita";
import "suneditor/dist/css/suneditor.min.css";
import NoMatch from "../nomatch/page";

const InformationKelas = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  //   useEffect(() => {
  //     const getData = async () => {
  //       setDetailBerita([]);
  //       const data = await getBeritaByTitle(props);

  //       if (data.toString() === "") {
  //         navigate("/404");
  //       }
  //     };
  //     getData();
  //   }, []);

  return (
    <div>
      {!data ? (
        <NoMatch />
      ) : (
        <div className="flex flex-row space-x-2">
          <div className="min-h-[100vh] md:w-8/12 w-[100vh] mx-auto p-4">
            <div>
              {/* <h1 className="text-black bg-white rounded-xl border-1 border-black mb-4 text-2xl font-bold">
                {item.title}
              </h1> */}
              <SunEditor
                height="h-max"
                name="renderisi"
                hideToolbar={true}
                disable={true}
                setContents={
                  `<h1 className="text-black mb-4 text-2xl font-bold">${data.title}</h1>` +
                  data.isi
                }
                // appendContents={item.isi}

                readOnly={true}
                disableToolbar={true}
                setOptions={{
                  mode: "balloon",
                }}
              />
              {/* {parse(item.isi)} */}
            </div>
          </div>
          <div className="hidden md:block w-4/12 bg-gray-100 p-4">
            {/* <Berita /> */}
            <div className="grid">
              {[1, 2, 3, 4, 5, 6].map((i, j) => {
                return (
                  <div
                    key={j}
                    className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="m-3">
                      <h2 className="text-lg mb-2">
                        Title
                        <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
                          Tag
                        </span>
                      </h2>
                      <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                        Space, the final frontier. These are the voyages of the
                        Starship Enterprise. Its five-year mission: to explore
                        strange new worlds.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformationKelas;
