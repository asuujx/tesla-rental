import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Location from "./pages/Location";

function App() {
   return (
      <div className="w-screen h-screen flex flex-col items-center">
         <Header />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations/:locationID/cars" element={<Location />} />
         </Routes>

         <Footer />
      </div>
   );
}

export default App;
