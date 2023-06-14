import { Link } from "react-router-dom";
import { UserState } from "../context/UserContext";
import { useEffect, useState } from "react";


const Navbar = () => {
    
    const {user} = UserState()
    const [role, setRole] = useState();
    useEffect(()=>{
        if(user){
            setRole(user.role)
        }
    },[user])

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand">FPI</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {!user && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/signup">
                      Signup
                    </Link>
                  </li>
                </>
              )}
              {(role === "user") && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/scan_product">
                      Scan_Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/account">
                      Account
                    </Link>
                  </li>
                </>
              )}
              {(role === "admin") && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/product">
                      Add Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/show_products">
                      Show Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/account">
                      Account
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
