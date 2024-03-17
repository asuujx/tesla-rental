import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Reservation from "./pages/Reservation";

function App() {
   return (
      <div className="w-screen h-screen flex flex-col items-center">
         <Header />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations/:locationID/cars" element={<Location />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reservation" element={<Reservation />} />
         </Routes>

         <Footer />
      </div>
   );
}

export default App;
