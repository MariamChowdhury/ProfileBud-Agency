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
      <div class=" header-container">
        <div className=" text-center mt-4 ">
          <button className="btn orange-font fw-bold rectangle-button">
            GET LEADS
          </button>
        </div>
        <div className="container my-3">
          <div className="row text-center ">
            <div className="col-md-3 margin-class">
              <div class="card  my-5 gray-font">
                <div class="card-body ">
                  <div class="card-title d-flex justify-content-around">
                    <button className="btn round-design">
                      <span class="orange-circle">
                        <h5>Followers / Following of @any_user</h5>
                      </span>{" "}
                    </button>
                  </div>
                  <p class="card-text">
                    Lorem Ipsum something is there. Something more will come
                    here. Oh yes it will come.
                  </p>
                  <a
                    href="#"
                    class="btn rectangle-button dark-orange-font fw-bold"
                  >
                    SAMPLE DATA
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 margin-class">
              <div class="card  my-5 gray-font">
                <div class="card-body">
                  <h5 class="card-title">
                    Liker / Commenter of <br /> any post
                  </h5>
                  <p class="card-text">
                    Lorem Ipsum something is there. Something more will come
                    here. Oh yes it will come.
                  </p>
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
      </div>
    </section>
  );
};

export default Header;
