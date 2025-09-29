import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../pages/Home";
import ShirtDetail from "../Components/ShirtDetail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/t-shirt/:id" element={<ShirtDetail />} />
      </Route>
    </Routes>
  );
};

export default Router;
