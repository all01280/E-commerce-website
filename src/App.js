import React, { useState } from "react";
import Nav from "./comp/nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./comp/rout";
import Footer from "./comp/footer";
import Homeproduct from "./comp/home_product";

const App = () => {
  // Shop Page product
  const [shop, setShop] = useState(Homeproduct);
  // Shop Search Filter
  const [search, setSearch] = useState("");

  const searchlenght = (search || []).length === 0;
  const searchproduct = () => {
    if (searchlenght) {
      alert("Please Search Something !");
      setShop(Homeproduct);
    } else {
      const searchfilter = Homeproduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchfilter);
    }
  };

  // Shop categary filter
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };
  const allcatefilter = () => {
    setShop(Homeproduct);
  };
  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchproduct={searchproduct}
        ></Nav>
        <Rout shop={shop} Filter={Filter} allcatefilter={allcatefilter}></Rout>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
