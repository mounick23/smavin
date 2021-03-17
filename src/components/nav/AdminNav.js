import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column" style={{backgroundColor: "lightblue"}}>
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product" className="nav-link">
          Collage
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
University
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
Countries        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
          countries location
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
          Scolarships
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
          Password
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
