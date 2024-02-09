import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";

const PublicNavbar = () => (
  <nav
    className={`navbar navbar-expand-lg blur border-radius-sm top-0 shadow position-sticky py-3 start-0 end-0`}
    style={{ zIndex: 1000, backgroundColor: "#a9ecd2b7" }}
  >
    <div className="container d-flex justify-content-between align-items-center px-1">
      <Link className="font-weight-bolder ms-lg-0" to="/">
        Online Book Store
      </Link>

      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search"
        className="w-50 me-2"
        style={{ backgroundColor: "#f6faf8e5" }}
      />

      <div>
        <Link to="/auth/register" className="btn btn-sm btn-primary">
          Register
        </Link>
        <Link to="/auth/login" className="btn btn-sm btn-info">
          Sign In
        </Link>
      </div>
    </div>
  </nav>
);

export default PublicNavbar;
