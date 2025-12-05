import phoneicon from "./assets/telefoon.png";
import "./header.css";
import { Link, Route, Routes } from "react-router-dom";
import MyCartComponent from "./mycart";
import { useState, useEffect } from "react";

function HeaderComponent({ setSearchKeyword }) {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    if (darkmode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkmode]);

  return (
    <section>
      <nav
        className="navbar"
        style={{
          backgroundColor: "#2d3748",
          width: "100%",
          height: "76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        {/* Left side: Logo + Products */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src={phoneicon} alt="logo" style={{ width: "40px" }} />
          <Link className="navbar-brand text-white" to={"/"}>
            Products
          </Link>
        </div>

        {/* Center: Search bar */}
        <input
          style={{ width: "170px", height: "37px" }}
          className="form-control"
          type="search"
          placeholder="Search For Products"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />

        {/* Right side: Cart + Dark mode */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div className="border d-flex align-items-center" style={{ padding: "5px 10px", borderRadius: "5px" }}>
            <i
              className="fa-solid fa-cart-arrow-down"
              style={{ fontSize: "1.5rem", color: "#009FFD", marginRight: "5px" }}
            ></i>
            <Link className="navbar-brand" to="/mycart" style={{ color: "#009FFD", margin: 0 }}>
              My Cart
            </Link>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input p-2"
              type="checkbox"
              role="switch"
              id="themeswitcher"
              checked={darkmode}
              onChange={() => setDarkmode(!darkmode)}
            />
          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/mycart" element={<MyCartComponent />} />
      </Routes>
    </section>
  );
}

export default HeaderComponent;
