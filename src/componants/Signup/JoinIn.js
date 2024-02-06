import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../firebase/AuthProvider";
import "./joinin.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";


const Signup = (e) => {
  const auth = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
       e.preventDefault();
    try {
     await auth.signUp(email, password);
      toast.success("Created LinkedIn account.");
      // navigate("/home");
     
    } catch (e) {
      console.error(e);
      toast.error("Please check your email & password");
    }
     
  };

  const onGoogleLogin = async (e) => {
      e.preventDefault();
    try {
     await auth.googleSignIn();
      toast.success("Created LinkedIn account with Google");
      //  navigate("/home");
     
    } catch (e) {
      console.error(e);
      toast.error("Email Id Invalid");
    }
    
  };
  
  return (
    <div className=" w-screen flex justify-between flex-col flex-wrap">
      <div className="sign-up-container flex justify-center flex-col items-center ">
        <div className="logo-contaner my-3 ">
          <span className="logo-linkdin flex flex-row items-center gap-1">
            <p className="logo-name font-mono font-bold text-3xl">Linked</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </span>
        </div>

        <div className="form-container flex items-center justify-center flex-col lg:w-96 bg-white p-5 py-7 rounded-lg my-6 text-gray-600">
          <p className=" text-3xl text-gray-950 font-sans max-lg:text-center">
            Make the most of your professional life
          </p>
          <form
            onSubmit={handleSubmit}
            className="lg:w-96 bg-white p-5 py-7 rounded-lg mt-6 text-gray-600 "
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium"
              >
                Email or phone number
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                autoComplete="true"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium"
              >
                Password (6+ characters)
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="true"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-1  border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="my-4">
              <p className="text-xs text-center">
                By clicking Agree & Join, you agree to the LinkedIn{" "}
                <span className="clr-link">User Agreement</span>,
                <span className="clr-link">Privacy Policy</span>, and
                <span className="clr-link">Cookie Policy</span>.
              </p>
            </div>
            <button
              type="submit"
              className=" w-full text-white py-3 px-4 rounded-full font-semibold focus:outline-none  bg-clr"
            >
              Agree & Join
            </button>
            <div className=" flex flex-row justify-center items-center my-5">
              <hr className="border-1 border-gray-500 w-full" />
              <span className="px-4">or</span>
              <hr className="border-1 border-gray-500 w-full" />
            </div>
          </form>
          <div className="flex justify-center items-center ">
            <GoogleButton
              onClick={onGoogleLogin}
              className="rounded-full "
              style={{
                display: "block",
                border: "none",
                cursor: "pointer",
              }}
            />
          </div>
          <p className="flex text-center w-full items-center justify-center mt-6 ">
            Already on LinkedIn?
            <Link className="clr-link font-semibold px-1" to="/signin">
              Sign in
            </Link>{" "}
          </p>
          <p className="text-sm">
            Looking to create a page for a business?{" "}
            <span className="clr-link font-semibold">Get help</span>
          </p>
        </div>
      </div>
      <p className="py-12 bg-color"></p>
      <footer className=" ">
        <nav className="flex justify-center items-center gap-3 pb-3 flex-wrap max-lg:flex-col ">
          <span className="flex flex-row items-center gap-1">
            <p className=" font-mono font-bold text-sm text-black ">Linked</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="30"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </span>
          <span className="text-xs">© 2024</span>
          <ul className=" flex text-xs gap-4 max-lg:flex-wrap max-lg:justify-center">
            <Link to="">About</Link>
            <Link to="">Accessibility</Link>
            <Link to="">User Agreement</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">Cookie Policy</Link>
            <Link to="">Copyright Policy</Link>
            <Link to="">Brand Policy</Link>
            <Link to="">Guest Controls </Link>
            <Link to="">Community Guidelines</Link>
            <Link to="">Community Guidelines</Link>
          </ul>
          <select className=" text-xs">
            <option value="Language" >
              Language
            </option>
          </select>
        </nav>
      </footer>
    </div>
  );
};

export default Signup;
