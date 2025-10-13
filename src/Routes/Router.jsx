import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../pages/Home";
import ShirtDetail from "../Components/ShirtDetail";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/t-shirt/:id" element={<ShirtDetail />} />
      </Route>
    </Routes>
  );
};

export default Router;
