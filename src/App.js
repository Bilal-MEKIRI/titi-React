import { Routes, Route } from "react-router-dom";
import "./App.css";
import Slide from "./components/slide";
import Template from "./components/template";
import Collect from "./pages/click&collect";
import Home from "./pages/homePage";
import Burger from "./pages/pageBurgers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        {/* <Route index element={<Burger />}></Route> */}
        {/* <Route index element={<Slide />}></Route> */}
        {/* <Route index element={<Home />}></Route> */}
        <Route index element={<Collect />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
