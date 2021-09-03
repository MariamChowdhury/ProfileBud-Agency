import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className=" my-5">
      <div className="container">
        <h1 class="text-white fw-bold text-center mt-4">
          We extract Leads & Data from Instagram
        </h1>
        <h4 class="gray-font text-center my-5">
          Our agency does all the hard work and <br /> gives you the clean
          targeted data in Sheets!
        </h4>
      </div>
      <div class=" text-center mt-4 header-container">
        <button className="btn orange-font fw-bold rectangle-button">
          GET LEADS
        </button>
      </div>
    </section>
  );
};

export default Header;
