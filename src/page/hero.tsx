import { Navbar } from "../components";
import { useAuthStore } from "../store/auth.store";

const Hero = () => {
  const { isLoading, user, error } = useAuthStore();

  return (
    <>
      {/* <AuthProvider> */}
      <Navbar />
      <p>{user.email}</p>
      {/* </AuthProvider> */}
    </>
  );
};

export default Hero;
