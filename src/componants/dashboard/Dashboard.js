import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import Button from '../Element/button/Button'
import { useAuthContext } from "../../firebase/AuthProvider";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";

const Home = () => {
  const auth = useAuthContext();
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  
 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     const response = await auth.signIn(email, password);
     console.log(response);
     // Signed in
     toast.success("Logged in Successfully!");
   } catch (err) {
     console.error(err);
     toast.error("Invalid UserName & Password");
   }
 };
  
  const onGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.googleSignIn();
      toast.success("Logged In with Google");
      //  navigate("/home");
    } catch (e) {
      console.error(e);
      toast.error("Email Id Invalid");
    }
  };
  return (
    <div>
      <header className="w-full bg-white py-4">
        <div className="container logo-contaner mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="logo-linkdin flex items-center text-gray-900"
            >
              <p className="logo-name font-bold text-3xl">Linked</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-linkedin ml-1"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <nav className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex flex-col items-center text-gray-500 hover:text-gray-600"
              >
                <FaNewspaper size={25} />
                <p className="text-xs">Articles</p>
              </Link>
              <Link
                to="/"
                className="flex flex-col items-center text-gray-500 hover:text-gray-600"
              >
                <MdPeopleAlt size={25} />
                <p className="text-xs">People</p>
              </Link>
              <Link
                to="/"
                className="flex flex-col items-center text-gray-500 hover:text-gray-600"
              >
                <GoVideo size={25} />
                <p className="text-xs">Learning</p>
              </Link>
              <Link
                to="/"
                className="flex flex-col items-center text-gray-500 hover:text-gray-600"
              >
                <IoBagHandle size={25} />
                <p className="text-xs">Jobs</p>
              </Link>
              <Link
                to="/"
                className="flex flex-col items-center text-gray-500 hover:text-gray-600"
              >
                <MdOutlineLaptopMac size={25} />
                <p className="text-xs">Get the app</p>
              </Link>
            </nav>
          </div>
          <div className="md:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <nav className="bg-white py-2 px-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="block text-gray-500 hover:text-gray-600"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block text-gray-500 hover:text-gray-600"
                  >
                    People
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block text-gray-500 hover:text-gray-600"
                  >
                    Learning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block text-gray-500 hover:text-gray-600"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block text-gray-500 hover:text-gray-600"
                  >
                    Get the app
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
      <main className="mx-auto max-w-7xl px-4">
        <section className="hero flex flex-col md:flex-row justify-between items-center px-4 md:ml-28 md:mr-0">
          <div className="left md:w-3/6 mt-8 flex flex-col justify-center">
            <div>
              <p
                className="text-4xl md:text-6xl font-sans font-thin label text-center md:text-left"
                style={{ color: "#b24020" }}
              >
                Discover what your network can do for you
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-6 md:mt-8 lg:w-8/12 bg-white p-5 py-7 rounded-lg my-6 text-gray-600"
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

              {/* Form Inputs */}
            </form>
            {/* Sign In Options */}
          </div>
          <div className="right mt-6 md:mt-32 md:w-3/6 md:ml-10">
            <img
              src="https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png"
              alt="LinkedIn Logo"
              className="mx-auto md:mx-0"
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row ml-4 md:ml-28 justify-center items-center mb-5">
          <div className="left md:w-3/6 mb-4 md:mb-0 md:mr-10">
            <p className="text-4xl md:text-5xl font-sans font-thin label text-gray-700 leading-tight text-center md:text-left">
              Explore collaborative articles
            </p>
            <span className="text-gray-500 text-base md:text-xl font-thin text-center md:text-left block md:inline-block mt-2 md:mt-0">
              We’re unlocking community knowledge in a new way. Experts add
              insights directly into each article, started with the help of AI.
            </span>
          </div>
          <div className="right md:ml-24">
            <h1 className="uppercase font-semibold text-gray-500 mb-3 text-center md:text-left">
              SUGGESTED SEARCHES
            </h1>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {/* Your Button Components */}
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
        <section className="flex flex-col md:flex-row ml-4 md:ml-28 justify-center items-center mb-5">
          <div className="left md:w-3/6 mb-4 md:mb-0 md:mr-10">
            <p className="text-4xl md:text-5xl font-sans font-thin label text-gray-700 leading-tight text-center md:text-left">
              Find the right job or internship for you
            </p>
          </div>
          <div className="right md:ml-24">
            <h1 className="uppercase font-semibold text-gray-500 mb-3 text-center md:text-left">
              SUGGESTED SEARCHES
            </h1>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {/* Your Button Components */}
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

        <section className="flex flex-col md:flex-row justify-center items-center mb-5 gap-5 w-full py-12 md:py-24 bg-gray-100 md:bg-F1ECE5">
          <div className="ml-4 md:ml-28 w-full md:w-96 leading-normal text-center md:text-left">
            <p className="text-3xl md:text-4xl" style={{ color: "#b24020" }}>
              Post your job for millions of people to see
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button name="Post a Job" color="#0a66c2" bordercolor="#0a66c2" />
          </div>
        </section>

        <section className="flex flex-col md:flex-row ml-4 md:ml-28 justify-center md:justify-start items-center mb-5">
          <div className="left w-full md:w-3/6 text-center md:text-left">
            <p className="text-3xl md:text-5xl mb-4 font-sans font-thin label text-gray-700 leading-tight">
              Discover the best software tools
            </p>
            <span className="text-gray-500 text-base md:text-xl font-thin">
              Connect with buyers who have first-hand experience to find the
              best products for you.
            </span>
          </div>

          <div className="right mt-4 md:mt-0 ml-4 md:ml-24">
            <h1 className="uppercase font-semibold text-gray-500 mb-3">
              SUGGESTED SEARCHES
            </h1>
            <div className="flex flex-wrap gap-2">
              <Button name="Engineering" />
              <Button name="Business Development" />
              <Button name="Administrative Assistant" />
              <Button name="Retail Associate" />
              <Button name="Customers Services" />
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
