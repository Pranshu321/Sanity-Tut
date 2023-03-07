import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-black text-white p-5 ">
      <div className="logo">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <h2 className="font-bold text-white text-xl md:text-2xl lg:text-3xl">
            Pranshu's Blog
          </h2>
        </Link>
      </div>

      <nav>
        <ul className="flex" style={{ listStyle: "none" }}>
          <li className="mr-5 lg:text-lg">
            <button>
              <Link
                className="text-white"
                style={{ textDecoration: "none", listStyle: "none" }}
                to={"/"}
              >
                Home
              </Link>
            </button>
          </li>
          <li className="lg:text-lg">
            <button>
              <Link
                className="text-white"
                style={{ textDecoration: "none" }}
                to={"/blog"}
              >
                Blog
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
