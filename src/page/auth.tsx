import { FormEvent, useState } from "react";
import img from "../assets/img/login.webp";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);
  const { signUp, signIn } = useAuth();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password.length || !email.length) {
      setInvalid(true);
    }
    setInvalid(false);
    // if (auth === "signup") {
    //   signUp(email, password);
    // } else {
    //   signIn(email, password);
    // }
    signIn(email, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <section className="h-[70vh] flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Auth;
