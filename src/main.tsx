import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import "./index.css";
import About from "./page/about/page";
import Auth from "./page/auth";
import AddBerita from "./page/berita/addBerita";
import AddInformationKelas from "./page/berita/addInformationKelas";
import Detail from "./page/berita/detail";
import InformationKelas from "./page/berita/informationKelas";
import Berita from "./page/berita/page";
import Home from "./page/home/page";
import NoMatch from "./page/nomatch/page";
import Profile from "./page/profile/page";
import AddUser from "./page/user/addUser";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Hero />,
//   },
//   {
//     path: "/auth",
//     element: <Auth />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <ScrollToTop />
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
      </div>

      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/informasi" element={<Berita />} />
        <Route path="/informasi/add" element={<AddBerita />} />
        <Route path="/informasikelas" element={<InformationKelas />} />
        <Route
          path="/informasi/addinformasi"
          element={<AddInformationKelas />}
        />
        <Route path="/informasi/:titleId" element={<Detail />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route acts like a
          catch-all for URLs that we don't have explicit routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
