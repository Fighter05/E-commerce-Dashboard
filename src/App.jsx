import Nav from "./pages/Nav";
import Overview from "./pages/Overview";
import SalesReport from "./pages/SalesReport";
import Inventory from "./pages/Inventory";
import Customer from "./pages/Customer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Overview />} />
        <Route path="sale" element={<SalesReport />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
