import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ textColor = "white" }) => {
  const menuItems = [
    { path: "/inicio", text: "Información" },
    { path: "/fin", text: "Rutina diaria" },
    { path: "/acerca", text: "Contacto" },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black py-3 shadow-sm">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center">
            <Link to="/presentacion" className="navbar-brand fw-bold fs-4" style={{ color: textColor }}>
              POWER HOUSE GYM
            </Link>
          </div>
        </div>
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {menuItems.map((item, index) => (
                  <Link key={index} to={item.path} className="fc" style={{ color: textColor }}>
                    {item.text}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
