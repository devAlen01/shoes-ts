import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Man from "./components/Man";
import Woman from "./components/Woman";
import Kids from "./components/Kids";
import Sale from "./components/Sale";
import Layout from "./components/Layout";
import Body from "./components/Body";
import Basket from "./components/Basket";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Body />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/man" element={<Man />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
