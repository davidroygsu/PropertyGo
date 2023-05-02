import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Index from "./components/index";
import SellerRegister from "./components/sellerregister";
import SellerLogin from "./components/sellerlogin";
import BuyerLogin from "./components/buyerlogin";
import BuyerRegister from "./components/buyerregister";
import Prop1 from "./components/prop1";



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/index" element={<Index />} />
        <Route path="/sellerregister" element={<SellerRegister />} />
        <Route path="/sellerlogin" element={<SellerLogin />} />
        <Route path="/buyerlogin" element={<BuyerLogin />} />
        <Route path="/buyerregister" element={<BuyerRegister />} />
        <Route path="/prop1" element={<Prop1 />} />
      </Routes>
    </div>
  );
};

export default App;