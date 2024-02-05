import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import Button from '../button/Button'

const Home = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const handleSubmit = () => {};
  return (
    <div>
      <header className="head-container w-screen flex justify-center my-3">
        <nav className="flex head-nav justify-between w-5/6">
          <div className="logo-contaner my-3">
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
          <div>
            <ul className="flex flex-row justify-between gap-9">
              <Link
                to=""
                className=" flex justify-center items-center flex-col text-gray-500 hover:text-gray-600"
              >
                <FaNewspaper size={25} />
                <p className="text-xs">Articals</p>
              </Link>
              <Link
                to=""
                className="flex justify-center items-center flex-col text-gray-500 hover:text-gray-600"
              >
                <MdPeopleAlt size={20} />
                <p className="text-xs">People</p>
              </Link>
              <Link
                to=""
                className="flex justify-center items-center flex-col text-gray-500 hover:text-gray-600"
              >
                <GoVideo size={20} />
                <p className="text-xs">Learning</p>
              </Link>
              <Link
                to=""
                className="flex justify-center items-center flex-col text-gray-500 hover:text-gray-600"
              >
                <IoBagHandle size={20} />
                <p className="text-xs">Jobs</p>
              </Link>
              <Link
                to=""
                className="flex justify-center items-center flex-col text-gray-500 hover:text-gray-600 w-20"
              >
                <MdOutlineLaptopMac size={20} />
                <p className="text-xs">Get the app</p>
              </Link>
              <Link
                to="/signup"
                className="link-container  w-32 h-10 justify-center items-center "
              >
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-400 transition duration-300 ease-out   rounded-full hover:bg-gray-100 group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease"></span>
                  <span class="absolute flex items-center justify-center w-full h-full text-gray-500 ">
                    Join now
                  </span>
                  <span class="relative invisible"> Join now</span>
                </a>
              </Link>
              <Link
                to="/signin"
                className="link-container w-32 h-10 justify-center items-center "
              >
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2  rounded-full shadow-md group"
                  style={{ borderColor: "#0a66c2" }}
                >
                  <span
                    style={{ backgroundColor: "#0a66c2" }}
                    class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span
                    style={{ color: "#0a66c2" }}
                    class="absolute flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease"
                  >
                    Sign in
                  </span>
                  <span class="relative invisible"> Sign in</span>
                </a>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero flex flex-row ml-28 justify-between items-center">
          <div className="left w-3/6 mt-8 flex flex-col justify-center">
            <div>
              <p
                className="text-6xl font-sans font-thin label"
                style={{ color: "#b24020" }}
              >
                Discover what your network can do for you
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className=" lg:w-8/12 bg-white p-5 py-7 rounded-lg my-6 text-gray-600 "
            >
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Email or phone
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email or Phone "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 text-black px-2 py-3 border border-black rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-2 pl-4 py-3 text-black  border border-black rounded-md focus:outline-none focus:border-indigo-500"
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
              <div className="my-4 mb-8">
                <p className="text-xs text-center">
                  By clicking Agree & Join, you agree to the LinkedIn{" "}
                  <span className="clr-link">User Agreement</span>,
                  <span className="clr-link">Privacy Policy</span>, and
                  <span className="clr-link">Cookie Policy</span>.
                </p>
              </div>

              <div className="signin-container flex flex-col gap-9">
                <div className="flex justify-center items-center border-2 rounded-full p-1 hover:border-gray-600 ">
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
                    <Link
                      to="/signup"
                      className="text-sm  gap-0 font-bold text-gray-600 py-2"
                    >
                      New to Linkedin? Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="right mt-32">
            <img src="https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png"></img>
          </div>
        </section>
        <section className="flex flex-row ml-28 justify-center items-center mb-5">
          <div className="left  w-3/6 ">
            <p className="text-5xl mb-4 font-sans font-thin label text-gray-700 leading-tight">
              Explore collaborative articles
            </p>
            <span className=" text-gray-500 text-xl font-thin">
              We’re unlocking community knowledge in a new way. Experts add
              insights directly into each article, started with the help of AI.
            </span>
          </div>
          <div className="right ml-24">
            <h1 className="uppercase font-semibold text-gray-500 mb-3">
              SUGGESTED SEARCHES
            </h1>
            <div className="flex flex-wrap gap-2">
              <Button name="Engineering" />
              <Button name="Business Development" />
              <Button name="Administrative Assistant" />
              <Button name="Reail Associate" />
              <Button name="Customers Services " />
              <Button name="Operations" />
              <Button name="Information Technology" />
              <Button name="Marketing" />
              <Button name="Human Resource" />
              <Button name="Show All" color="#0a66c2" bordercolor="#0a66c2" />
            </div>
          </div>
        </section>
        <section className="flex flex-row ml-28 justify-start items-center mb-5">
          <div className="left  w-3/6 ">
            <p className="text-5xl mb-4 font-sans font-thin label text-gray-700 leading-tight">
              Find the right job or internship for you
            </p>
          </div>
          <div className="right ml-24">
            <h1 className="uppercase font-semibold text-gray-500 mb-3">
              SUGGESTED SEARCHES
            </h1>
            <div className="flex flex-wrap gap-2">
              <Button name="Engineering" />
              <Button name="Business Development" />
              <Button name="Administrative Assistant" />
              <Button name="Reail Associate" />
              <Button name="Customers Services " />
              <Button name="Operations" />
              <Button name="Information Technology" />
              <Button name="Marketing" />
              <Button name="Human Resource" />
              <Button name="Show All" color="#0a66c2" bordercolor="#0a66c2" />
            </div>
          </div>
        </section>
        <section
          className="flex flex-row justify-start items-center mb-5 gap-5 w-full py-24 "
          style={{ backgroundColor: "#F1ECE5" }}
        >
          <div className="ml-28 w-96  leading-normal">
            <p className="text-4xl " style={{ color: "#b24020" }}>
              Post your job for millions of people to see
            </p>
          </div>
          <div>
            <Button name="Post a Job" color="#0a66c2" bordercolor="#0a66c2" />
          </div>
        </section>
        <section className="flex flex-row ml-28 justify-start items-center mb-5">
          <div className="left  w-3/6 ">
            <p className="text-5xl mb-4 font-sans font-thin label text-gray-700 leading-tight">
              Discover the best software tools
            </p>
            <span className=" text-gray-500 text-xl font-thin">
              Connect with buyers who have first-hand experience to find the
              best products for you.
            </span>
          </div>

          <div className="right ml-24">
            <h1 className="uppercase font-semibold text-gray-500 mb-3">
              SUGGESTED SEARCHES
            </h1>
            <div className="flex flex-wrap gap-2">
              <Button name="Engineering" />
              <Button name="Business Development" />
              <Button name="Administrative Assistant" />
              <Button name="Reail Associate" />
              <Button name="Customers Services " />
              <Button name="Operations" />
              <Button name="Information Technology" />
              <Button name="Marketing" />
              <Button name="Human Resource" />
              <Button name="Show All" color="#0a66c2" bordercolor="#0a66c2" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
