import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaBehance,
  FaEnvelope,
} from "react-icons/fa";

const Info = () => {
  return (
    <div className="flex flex-col justify-between items-center mx-auto">
      <h1 className="text-black underline text-center mx-auto py-10 text-2xl">
        Redux Toolkit Application Example
      </h1>
      <p className="px-3 pb-5">
        In this practic-example i use react-redux to manage global states /
        functions.We can create,delete and update a list of tasks. i use
        react-router-dom in his last version and for the styles i use Tailwind
        Css. We also practice some normal hooks as useEffect and other basic
        tools from React.
      </p>
      <h2 className="bold text-xl underline">In this project i use:</h2>
      <ul className="flex flex-col py-2">
        <li>*Redux toolkit, UseDispatch, UseSelector</li>
        <li>*React Router Dom V6</li>
        <li>*UseState,UseEffect Hooks</li>
        <li>*Tailwind CSS</li>
      </ul>
      <a
        className="bg-[#0065a4] px-2 py-1 rounded-sm text-x"
        href="https://github.com/pciruelos/redux-toolkit"
      >
        Repo & Info
      </a>
      {/* Social  */}
      <div className="text-white text-2xl pt-10 underline">
        <h1 className="">My Contact Links:</h1>
        <div className="flex justify-around text-3xl">
          <a
            className="py-2 hover:text-black"
            href="https://github.com/pciruelos"
          >
            <FaGithub />
          </a>
          <a
            className="py-2 hover:text-black"
            href="https://www.linkedin.com/in/pablociruelos/"
          >
            <FaLinkedin />
          </a>
          <a
            className="py-2 hover:text-black"
            href="https://www.youtube.com/c/luppo2007"
          >
            <FaYoutube />
          </a>
          <a
            className="py-2 hover:text-black"
            href="https://www.behance.net/elchicoprodigio"
          >
            <FaBehance />
          </a>
          <a
            className="py-2 hover:text-black"
            href="mailto:pciruelos@yahoo.com"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <h1><a href="https://www.pablociruelos.com">

      www.pablociruelos.com
      </a>

      </h1>
    </div>
  );
};

export default Info;
