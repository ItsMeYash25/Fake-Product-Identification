import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import { UserState } from "./context/UserContext";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ShowProducts from "./pages/ShowProducts";
import Signup from "./pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import ViewProduct from "./pages/ViewProduct";
import Fake from "./pages/Fake";
import Real from "./pages/Real";
import ScanProduct from "./pages/ScanProduct";
import Check from "./pages/Check";

function App() {
  const { user } = UserState();
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/account" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/account" />}
        />
        <Route
          path="/account"
          element={user ? <Account /> : <Navigate to="/" />}
        />
        <Route
          path="/product"
          element={user ? <Product /> : <Navigate to="/" />}
        />
        <Route
          path="/show_product"
          element={user ? <ViewProduct /> : <Navigate to="/" />}
        />
        <Route
          path="/fake"
          element={user ? <Fake /> : <Navigate to="/" />}
        />
        <Route
          path="/real"
          element={user ? <Real /> : <Navigate to="/" />}
        />
        <Route
          path="/scan_product"
          element={user ? <ScanProduct /> : <Navigate to="/" />}
        />
        <Route
          path="/check"
          element={<Check />}
        />
        <Route
          path="/show_products"
          element={user ? <ShowProducts /> : <Navigate to="/" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
