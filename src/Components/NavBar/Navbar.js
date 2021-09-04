import React from "react";
import "./Navbar.css";
import logo from "../images/Group 7.svg";
import cart from "../images/iconmonstr-checkout-7.svg";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg container  navbar-dark ">
        <div class="container-fluid">
          <a class="navbar-brand " href="#">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item mx-md-4 mx-0  my-md-4 my-0">
                <a class="nav-link" href="#">
                  USPs
                </a>
              </li>
              <li class="nav-item mx-md-4 mx-0  my-md-4 my-0">
                <a class="nav-link" href="#">
                  PRICING
                </a>
              </li>
              <li class="nav-item mx-md-4 mx-0  my-md-3 my-0 ">
                <a class="nav-link" href="#">
                  <button class="nav-cart-button btn ">
                    <img src={cart} alt="" />
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
