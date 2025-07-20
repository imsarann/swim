import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/veni-logo.png"
import title from "../assets/veni-title.png"
const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/"  },
    { name: "ABOUT US", path: "/about-us"  },
    { name: "SERVICES", path: "/services" },
    { name: "PRODUCTS", path: "/products" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 font-Julee left-0 right-0 z-50 flex items-center justify-between   px-6 py-4 text-white transition-all duration-500 ${
        isScrolled ? "bg-cover bg-no-repeat" : ""
      }`}
      style={
        isScrolled
          ? {
              // backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#05262a",
            }
          : {}
      }
    >
      <div className="flex   justify-center items-center   py-2 px-2 ">
        <img src={logo} alt="logo" className="h-6  object-contain "/>
        <img src={title} alt="veni enterprises" className="h-5 object-contain " />
      </div>

      <div className="hidden  space-x-6  md:flex">
        {navLinks.map((link) => (
          <div className="flex justify-center items-center">
    
          <Link
            key={link.name}
            to={link.path}
            className={`text-center w-[125px]  text-[20px] py-1 px-1 rounded-xl flex justify-center items-center duration-300 hover:bg-white/30  ${
              location.pathname === link.path
                ? "border-b-2 border-white/70 font-bold"
                : ""
            }`}
          >
            {link.name} { link.component ?  <link.component className="inline ml-2 text-md"/> : <div></div>}
          </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
