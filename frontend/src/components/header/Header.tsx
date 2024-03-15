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
         <div className="flex gap-4">
            <h1 className="hover:font-semibold hover:scale-110 transition-all ease-in-out">
               Profile
            </h1>
            <h1>Darkmode</h1>
         </div>
      </div>
   );
}

export default Header;
