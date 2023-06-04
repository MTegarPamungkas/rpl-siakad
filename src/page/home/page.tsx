import { useNavigate } from "react-router-dom";
import { Hero } from "../../components";
import { useAuthStore } from "../../store/auth.store";

const Home = () => {
  const { isLoading, user, error } = useAuthStore();

  const navigate = useNavigate();
  // useEffect(
  //   () =>
  //     onAuthStateChanged(auth, (user) => {
  //       if (!user) {
  //         // setUser({} as User);
  //         navigate("/auth");
  //       }
  //     }),
  //   []
  // );
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
