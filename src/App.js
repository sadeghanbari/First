import React,{Component} from "react";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Cards from "./Component/Cards";
import Search from "./Component/Search"
import Logos from "./Component/Logos";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Search />
      <Logos />
      <Footer />
    </div>
  );
};

export default App;
