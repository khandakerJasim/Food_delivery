//import { RouterProvider } from "react-router-dom";
//import router from "./Routes/Router";
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Addproduct from "./Pages/addproduct/Addproduct";
import List from "./Pages/list/List";
import Orders from "./Pages/orders/Orders";

function App() {
  return (
    <div className="App">
      <div>
        {/* <RouterProvider router={router}></RouterProvider> */}

        <Navbar />
        <div className="md:flex flex-wrap gap-4 md:gap-0">
          <Sidebar />
          <Routes>
            <Route path="/Addproduct" element={<Addproduct />} />
            <Route path="/List" element={<List />} />
            <Route path="/Orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
