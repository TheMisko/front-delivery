import React, { useState } from "react";
import "./App.css";
import Test from "./pages/test";
import Nav from "./components/nav";
import Home from "./pages/home";
import TemporaryDrawer from "./components/drawer";
import Footer from "./components/footer";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Nav setOpenDrawer={setOpenDrawer} />
      <TemporaryDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Home />
      {/* <Test /> */}
      <Footer />
    </div>
  );
}

export default App;
