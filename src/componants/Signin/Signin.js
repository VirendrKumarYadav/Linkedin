import React, { useState } from "react";
import "../Signup/joinin.css";
import { Link } from "react-router-dom";
import { useAuthContext } from '../AuthProvider';

const Signin = () => {
  const auth = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async(e) => {
     e.preventDefault();
    console.log(email,password);
    try {
      const response = await auth.signIn(email, password);
      console.log(response);
      
      
      // navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className=" w-screen flex justify-between flex-col flex-wrap">
        <div className="sign-up-container flex justify-center flex-col items-center ">
          <div className="logo-contaner  my-3">
            <span className="logo-linkdin flex flex-row items-center gap-1">
              <p className="logo-name font-mono font-bold text-3xl">Linked</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </span>
          </div>

          <div className="form-container flex items-center justify-center flex-col">
            <form
              onSubmit={handleSubmit}
              className="form-contaner-signin lg:w-96 bg-white p-5 py-7 rounded-lg my-6 text-gray-600 "
            >
              <p className="font-sans text-3xl text-black font-semibold py-6">
                Sign in
              </p>
              <p className="text-sm text-black py-3">
                Stay updated on your professional world
              </p>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email or Phone "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 text-black px-2 py-4 border border-black rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-2 pl-4 py-4 text-black  border border-black rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="my-4">
                <Link to="http" className="font-semibold clr-link">
                  Forget Password?
                </Link>
              </div>
              <button
                type="submit"
                className=" w-full text-white py-3 px-4 rounded-full font-semibold focus:outline-none  bg-clr"
              >
                Sign in
              </button>
              <div className=" flex flex-row justify-center items-center my-5">
                <hr className="border-1 border-gray-500 w-full" />
                <span className="px-4">or</span>
                <hr className="border-1 border-gray-500 w-full" />
              </div>
              <div className="my-4">
                <p className="text-xs text-center">
                  By clicking Agree & Join, you agree to the LinkedIn{" "}
                  <span className="clr-link">User Agreement</span>,
                  <span className="clr-link">Privacy Policy</span>, and
                  <span className="clr-link">Cookie Policy</span>.
                </p>
              </div>

              <div className="signin-container flex flex-col gap-3">
                <div className="flex justify-center items-center border-2 rounded-full p-1 hover:border-gray-600">
                  <div className="flex justify-between items-center gap-x-3 w-11/12">
                    <div className="flex gap-x-2 px-3">
                      <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png"
                        className="rounded-full"
                        width={"20"}
                        height={"20"}
                      ></img>

                      <p className="text-xs  gap-0 font-bold text-gray-600">
                        Continue as a Virendra
                        <br></br>
                        <span className="text-xs font-thin">
                          softech.vire@gmail.com
                        </span>
                      </p>
                    </div>

                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png"
                      className="rounded-full "
                      width={"20"}
                    ></img>
                  </div>
                </div>
                <div className="flex justify-center items-center border-2 rounded-full p-1 hover:border-gray-600">
                  <div className="flex gap-x-2 px-3 py-1 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-apple"
                      viewBox="0 0 16 16"
                      className="text-black"
                    >
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    </svg>

                    <p className="text-xs  gap-0 font-bold text-gray-600">
                      Continue as a Virendra
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center border-2 rounded-full p-1 hover:border-gray-600">
                  <div className="flex gap-x-2 px-3 py-1 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-link-45deg"
                      viewBox="0 0 16 16"
                      className="text-black"
                    >
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                    </svg>

                    <p className="text-xs  gap-0 font-bold text-gray-600">
                      Sign in with a one-time link
                    </p>
                  </div>
                </div>
              </div>

              <p className="flex text-center w-full items-center justify-center mt-6 ">
                New to LinkedIn?
                <Link to="/signup" className="clr-link font-semibold px-1">
                  Join now
                </Link>{" "}
              </p>
            </form>
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
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </span>
            <span className="text-xs">© 2024</span>
            <ul className=" flex text-xs gap-4 max-lg:flex-wrap max-lg:justify-center">
              <Link to="">User Agreement</Link>
              <Link to="">Privacy Policy</Link>
              <Link to="">Community Guidelines</Link>
              <Link to="">Cookie Policy</Link>
              <Link to="">Copyright Policy</Link>
              <Link to="">Brand Policy</Link>
              <Link to="">Send Feedback </Link>
            </ul>
            <select className=" text-xs">
              <option value="Language" selected>
                Language
              </option>
            </select>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Signin;
