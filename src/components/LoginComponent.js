import React from "react";
import { Helmet } from "react-helmet";
import "../styles/login_styles.css";

const LoginComponent = () => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Helmet>
      <main>
        <section class=" text-center text-lg-start">
          <div class="card mb-3">
            <div class="row g-0 d-flex align-items-center">
              <div class="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  alt="Trendy Pants and Shoes"
                  class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                />
              </div>
              <div class="col-lg-8">
                <div class="card-body py-5 px-md-5">
                  <form>
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example1"
                        class="form-control"
                      />
                      <label class="form-label" for="form2Example1">
                        Email address
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example2"
                        class="form-control"
                      />
                      <label class="form-label" for="form2Example2">
                        Password
                      </label>
                    </div>

                    <div class="row mb-4">
                      <div class="col d-flex justify-content-center">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="form2Example31"
                            checked
                          />
                          <label class="form-check-label" for="form2Example31">
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>

                      <div class="col">
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </main>
    </div>
  );
};

export default LoginComponent;
