import { Routes, Route } from "react-router-dom";
import "./App.css";

import Slide from "./components/slide";
import Template from "./components/template";
import Collect from "./pages/click&collect";
import Commande1 from "./pages/commande01";
import Commande2 from "./pages/commande02";
import Commande3 from "./pages/commande03";
import Commande4 from "./pages/commande04";
import Confirmation from "./pages/confirmation";
import Home from "./pages/homePage";
import Burger from "./pages/pageBurgers";
import Paiment from "./pages/paiment";
import Paiment2 from "./pages/paiment2";
import Recapitulatif from "./pages/recapitulatif";
import Recapitulatif2 from "./pages/recapitulatif2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        {/* <Route index element={<Burger />}></Route> */}
        {/* <Route index element={<Slide />}></Route> */}
        <Route index element={<Home />}></Route>
        {/* <Route index element={<Collect />}></Route> */}
        {/* <Route index element={<Commande1 />}></Route> */}
        {/* <Route index element={<Commande2 />}></Route> */}
        {/* <Route index element={<Commande3 />}></Route> */}
        {/* <Route index element={<Commande4 />}></Route> */}
        {/* <Route index element={<Paiment />}></Route> */}
        {/* <Route index element={<Paiment2 />}></Route> */}
        {/* <Route index element={<Recapitulatif />}></Route> */}
        {/* <Route index element={<Recapitulatif2 />}></Route> */}
        {/* <Route index element={<Confirmation />}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
