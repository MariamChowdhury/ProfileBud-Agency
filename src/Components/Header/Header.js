import React from "react";
import "./Header.css";
import red from "../images/gradient_img (1).png";
import blue from "../images/blue.png";
import green from "../images/green.png";
import purple from "../images/purple.png";

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
      <div class=" header-container">
        <div className=" text-center mt-4 ">
          <button className="btn orange-font fw-bold rectangle-button">
            GET LEADS
          </button>
        </div>
        <div className="container my-3">
          <div className="row  ">
            <div className="col-md-3 margin-class">
              <div class="card my-5 gray-font">
                <div class="card-body ">
                  <div class="card-title d-flex justify-content-evenly">
                    <div className="div-design">
                      <img src={red} className="gradient-circle " alt="" />
                    </div>
                    <h5>Followers / Following of @any_user</h5>
                  </div>
                  <p class="card-text ">
                    <small>
                      {" "}
                      Lorem Ipsum something is there. Something more will come
                      here. Oh yes it will come.
                    </small>
                  </p>
                  <div className="text-center">
                    <a
                      href="#"
                      class="btn rectangle-button dark-orange-font fw-bold"
                    >
                      SAMPLE DATA
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 margin-class">
              <div class="card my-5 gray-font">
                <div class="card-body">
                  <div class="card-title d-flex justify-content-evenly">
                    <div className="div-design">
                      <img src={blue} className="gradient-circle" alt="" />
                    </div>
                    <h5> Liker / Commenter of any post</h5>
                  </div>
                  <p class="card-text ">
                    <small>
                      {" "}
                      Lorem Ipsum something is there. Something more will come
                      here. Oh yes it will come.
                    </small>
                  </p>
                  <div className="text-center">
                    <a
                      href="#"
                      class="btn rectangle-button sky-blue-font fw-bold"
                    >
                      SAMPLE DATA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-3 margin-class">
              <div class="card  my-5 gray-font">
                <div class="card-body ">
                  <div class="card-title d-flex justify-content-evenly">
                    <div className="div-design">
                      <img src={green} className="gradient-circle" alt="" />
                    </div>
                    <h5>People Posting Specific #Hashtags</h5>
                  </div>
                  <p class="card-text ">
                    <small>
                      {" "}
                      Lorem Ipsum something is there. Something more will come
                      here. Oh yes it will come.
                    </small>
                  </p>
                  <div className="text-center">
                    <a href="#" class="btn rectangle-button green-font fw-bold">
                      SAMPLE DATA
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 margin-class">
              <div class="card my-5 gray-font">
                <div class="card-body">
                  <div class="card-title d-flex justify-content-evenly">
                    <div className="div-design">
                      <img src={purple} className="gradient-circle" alt="" />
                    </div>
                    <h5>People Posting at Specific Locations</h5>
                  </div>
                  <p class="card-text ">
                    <small>
                      {" "}
                      Lorem Ipsum something is there. Something more will come
                      here. Oh yes it will come.
                    </small>
                  </p>
                  <div className="text-center">
                    <a
                      href="#"
                      class="btn rectangle-button purple-font fw-bold"
                    >
                      SAMPLE DATA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
