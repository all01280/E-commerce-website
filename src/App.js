import React from "react";
import Nav from "./comp/nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./comp/rout";
import Footer from "./comp/footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Rout></Rout>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
