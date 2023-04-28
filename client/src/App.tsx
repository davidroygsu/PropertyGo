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
      </Routes>
    </div>
  );
};

export default App;
