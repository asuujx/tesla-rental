import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
   return (
      <div className="w-1/2 my-5 p-5 flex justify-between rounded-md shadow-lg">
         <Link
            to="/"
            className="font-semibold hover:scale-110 hover:text-[#FF1744] transition-all ease-in-out"
         >
            Tesla Renting Service
         </Link>
         <div className="flex gap-4 items-center">
            <Link
               to="/register"
               className="hover:font-semibold hover:scale-110 transition-all ease-in-out"
            >
               Sign Up
            </Link>
            <Link
               to="/login"
               className="hover:font-semibold hover:scale-110 transition-all ease-in-out"
            >
               Login
            </Link>
            <FontAwesomeIcon icon={faMoon} className="text-xl" />
         </div>
      </div>
   );
}

export default Header;
