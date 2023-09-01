import { Routes, Route } from "react-router-dom";
import "./App.css";

import Template from "./components/template";
import Collect from "./pages/click&collect";
import Commande1 from "./pages/commande01";
import Commande2 from "./pages/commande02";
import Commande3 from "./pages/commande03";
import Commande4 from "./pages/commande04";
import Confirmation from "./pages/confirmation";
import Home from "./pages/homePage";
import Paiment from "./pages/paiment";
import Paiment2 from "./pages/paiment2";
import Recapitulatif from "./pages/recapitulatif";
import Recapitulatif2 from "./pages/recapitulatif2";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />}></Route>
        <Route path="/collect" element={<Collect />}></Route>
        <Route path="/commande1" element={<Commande1 />}></Route>
        <Route path="/commande2" element={<Commande2 />}></Route>
        <Route path="/commande3" element={<Commande3 />}></Route>
        <Route path="/commande4" element={<Commande4 />}></Route>
        <Route path="/paiment" element={<Paiment />}></Route>
        <Route path="/paiment2" element={<Paiment2 />}></Route>
        <Route path="/recapitulatif" element={<Recapitulatif />}></Route>
        <Route path="/recapitulatif2" element={<Recapitulatif2 />}></Route>
        <Route path="/confirmation" element={<Confirmation />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
