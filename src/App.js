import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faMapMarker,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Github } from "./Github.svg";

const App = () => {
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="container px-3 px-lg-5">
          <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
            <div className="resume-header">
              <div className="row align-items-center">
                <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                  <h2 className="resume-name mb-0 text-uppercase">
                    Sahil Kargutkar
                  </h2>
                  <div className="resume-tagline mb-3 mb-md-0">
                    MERN Stack Developer
                  </div>
                </div>
                <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                  <ul className="list-unstyled mb-0 ">
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                      <a className="resume-link" href="tel:9892592559">
                        {" "}
                        (91) 9892592559
                      </a>
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faEnvelope} size="lg" />
                      <a
                        className="resume-link"
                        href="mailto:sahilkargutkar.sk@gmail.com"
                      >
                        {" "}
                        sahilkargutkar.sk@gmail.com
                      </a>
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faGlobe} size="lg" />
                      <a className="resume-link" href="">
                        {" "}
                        Under Development
                      </a>
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faMapMarker} size="lg" />
                      <a
                        href="#0"
                        className="resume-link text-reset text-decoration-none"
                      >
                        &nbsp;&nbsp;Mumbai
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="resume-intro py-3">
              <div className="media flex-column flex-md-row align-items-center">
                <img
                  className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
                  src="https://sahilkargutkar.github.io/myResume/static/media/Screenshot1.cd7305fe.png"
                  alt="profile"
                />
                <div className="media-body text-left">
                  <p className="mb-0">
                    I am highly self-motivated Web Developer who spends most of
                    his time building applications and keeping myself up-to-date
                    with latest technologies.I am proficient in
                    React,Node,Express and MongoDB.Experience in working with
                    REST API testing tools like Postman and Swagger.I also have
                    basic knowledge of Nextjs and TypeScript.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="resume-body">
              <div className="row">
                <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                  <section className="work-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Work Experiences
                    </h3>
                    <div className="item mb-3">
                      <div className="item-heading row align-items-center mb-2">
                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                          MERN Stack Developer
                        </h4>
                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                          3M Technology | Mar-Nov 2021
                        </div>
                      </div>
                      <div className="item-content">
                        <p>
                          Worked with development teams to ideate the
                          software.Designed client-side and server-side
                          architecture,Built pixel perfect UI with Figma and
                          Adobe XD with responsiveness and Efficiency.
                          <br />
                          Developed Effective APIs with MVC architecture.
                          <br />
                        </p>
                        <span className="text-muted">
                          Job Responsibilities mainly included :-
                        </span>
                        <ul className="resume-list">
                          <li>
                            Created reusable components used across various
                            modules using React-JS, React-DOM, Bootstrap, and
                            JSX.
                          </li>
                          <li>
                            Involved in creating REST services using Node-JS,
                            Express-JS, Mongoose and Body-Parser NPM modules.
                          </li>
                          <li>
                            Experience in upgrading and migrating various
                            versions of Mongo database on different platforms.
                            Designed and developed custom Mongo applications
                            specific to clients' needs.
                          </li>
                          <li>
                            Worked in using React JS components, Forms, Events,
                            Keys, Router and Animations concept.
                          </li>
                          <li>
                            Used JavaScript Fetch API in application to retrieve
                            data from Back-End and to also perform RESTFUL
                            services.
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="item mb-3">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Lead Software Developer
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                            Apple | 2016 - 2019
                          </div>
                        </div>
                        <div className="item-content">
                          <p>
                            Role description goes here ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula
                            eget dolor. Aenean massa. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque eu,
                            pretium quis, sem. Donec pede justo, fringilla vel.
                          </p>
                          <ul className="resume-list">
                            <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                            <li>Aenean commodo ligula eget dolor.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="item mb-3">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Senior Software Developer
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                            Dropbox | 2014 - 2016
                          </div>
                        </div>
                        <div className="item-content">
                          <p>
                            Role description goes here ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula
                            eget dolor. Aenean massa. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus
                            mus.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Senior Developer
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                            Uber | 2013 - 2014
                          </div>
                        </div>
                        <div className="item-content">
                          <p>
                            Role description goes here ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula
                            eget dolor. Aenean massa. Cum sociis natoque
                            penatibus.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Backend Developer
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                            Amazon | 2014 - 2016
                          </div>
                        </div>
                        <div className="item-content">
                          <p>
                            Role description goes here ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula
                            eget dolor. Aenean massa. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus
                            mus.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Frontend Developer
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                            Startup | 2013 - 2014
                          </div>
                        </div>
                        <div className="item-content">
                          <p>
                            Role description goes here ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula
                            eget dolor. Aenean massa. Cum sociis natoque
                            penatibus.{" "}
                          </p>
                        </div> */}
                    {/* </div> */}
                  </section>

                  <section className="project-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Projects
                    </h3>
                    <div className="item mb-3">
                      <div className="item-heading row align-items-center mb-2">
                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                          API Marketplace &nbsp;
                          <a
                            href="https://github.com/sahilkargutkar/ApiMarketplace"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="badge badge-pill badge-dark">
                              <Github />
                              &nbsp; GITHUB
                            </span>
                          </a>
                        </h4>
                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                          Open Source
                        </div>
                      </div>
                      <div className="item-content">
                        <p>
                          API marketplace to search for any API you need.Search
                          for various APIs in the marketplace with
                          authentication using Java and JPA.Login are secured
                          through databases.The marketplace also allows
                          providers to monetize their APIs, usually by creating
                          a subscription plan or a variety of different
                          subscription plans.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="item-heading row align-items-center mb-2">
                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                          Stories React App &nbsp;
                          <a
                            href="https://github.com/sahilkargutkar/StoriesReactApp"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="badge badge-pill badge-dark">
                              <Github />
                              &nbsp; GITHUB
                            </span>
                          </a>
                        </h4>
                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                          Open Source
                        </div>
                      </div>
                      <div className="item-content">
                        <p>
                          Discover the world's most-loved social storytelling
                          platform.It connects a global community of various
                          readers and writers through the power of story.You can
                          post your story and share with all the users connected
                          through the app.select a specific tag and description
                          to sort it according to your preference
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="item-heading row align-items-center mb-2">
                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                          Palghar Tourism &nbsp;
                          <a
                            href="https://github.com/sahilkargutkar/palghar-tourism"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="badge badge-pill badge-dark">
                              <Github />
                              &nbsp; GITHUB
                            </span>
                          </a>
                        </h4>
                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                          Open Source
                        </div>
                      </div>
                      <div className="item-content">
                        <p>
                          This tourism Mobile app help users for planning
                          travel, accommodation bookings, ticket bookings, cab
                          booking, route mapping, and more. However, these are
                          just the basic uses of tourism mobile apps, and more
                          tourist services can be delivered.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
                <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                  <section className="skills-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Skills
                    </h3>
                    <div className="item">
                      <h4 className="item-title">Programming</h4>
                      <ul className="list-unstyled resume-skills-list">
                        {/* <li className="mb-2">HTML/CSS</li> */}
                        <li className="mb-2">JavaScript</li>
                        <li className="mb-2">Node.Js</li>
                        <li className="mb-2">Java</li>
                      </ul>
                    </div>
                    <br />
                    <div className="item">
                      <h4 className="item-title">Libraries & Frameworks</h4>
                      <ul className="list-unstyled resume-skills-list">
                        <li className="mb-2">React.Js </li>
                        <li className="mb-2">Express</li>
                        <li className="mb-2">Mongoose/MongoDB </li>
                        {/* <li className="mb-2">MongoDB</li>
                          <li>MSSQL</li> */}
                      </ul>
                    </div>
                  </section>
                  <section className="education-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Education
                    </h3>
                    <ul className="list-unstyled resume-education-list">
                      <li className="mb-3">
                        <div className="resume-degree font-weight-bold">
                          BSc in Information Technology
                        </div>
                        <div className="resume-degree-org text-muted">
                          Mumbai University
                        </div>
                        <div className="resume-degree-time text-muted">
                          2016 - 2019
                        </div>
                      </li>
                      {/* <li>
                        <div className="resume-degree font-weight-bold">
                          HSc
                        </div>
                        <div className="resume-degree-org text-muted">
                          Mumbai University
                        </div>
                        <div className="resume-degree-time text-muted">
                          2007 - 2010
                        </div>
                      </li> */}
                    </ul>
                  </section>
                  <section className="education-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Certification
                    </h3>
                    <ul className="list-unstyled resume-awards-list">
                      <li className="mb-3">
                        <div className="font-weight-bold ">
                          <a
                            className="font-weight-bold text-reset text-decoration-none "
                            href="https://drive.google.com/file/d/1WkbInsMoOBqOFxaP2ATkn2R-NEMn-s9h/view?usp=sharing"
                          >
                            Java Core and Advance
                          </a>
                        </div>
                        <div className="text-muted">
                          Aptech Institute (2020)
                        </div>
                      </li>
                      <li>
                        <div className="font-weight-bold">
                          <a
                            className="font-weight-bold text-reset text-decoration-none"
                            href="https://drive.google.com/file/d/1Twv3w1g53j3267fphj2thAwHHOFLMRCm/view?usp=sharing"
                          >
                            MERN Stack
                          </a>
                        </div>
                        <div className="text-muted">Udemy (2021)</div>
                      </li>
                    </ul>
                  </section>
                  <section className="skills-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Languages
                    </h3>
                    <ul className="list-unstyled resume-lang-list">
                      <li className="mb-2">
                        English{" "}
                        <span className="text-muted">(Professional)</span>
                      </li>
                      <li>
                        Hindi/Marathi{" "}
                        <span className="text-muted">(Native)</span>
                      </li>
                    </ul>
                  </section>
                  <section className="skills-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Interests
                    </h3>
                    <ul className="list-unstyled resume-interests-list mb-0">
                      <li className="mb-2">Cooking</li>
                      <li className="mb-2">Sketching</li>
                      <li className="mb-2">Football</li>
                      <li>Travelling</li>
                    </ul>
                  </section>
                </aside>
              </div>
            </div>
            <hr />
            <div className="resume-footer text-center">
              <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                <li className="list-inline-item mb-lg-0 mr-3">
                  <a
                    className="resume-link"
                    href="https://github.com/sahilkargutkar"
                  >
                    <div className="svg-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>

                      <span className="d-none d-lg-inline-block text-muted m-1">
                        github.com/sahilkargutkar
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-inline-item mb-lg-0 mr-3">
                  <a
                    className="resume-link"
                    href="https://linkedin.com/in/sahilkar99"
                  >
                    <div className="svg-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>

                      <span className="d-none d-lg-inline-block text-muted m-1">
                        linkedin.com/in/sahilkar99
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/* <footer className="footer text-center py-4">
          <small className="copyright text-muted">
            Designed with <i className="fas fa-heart"></i> by{" "}
            <a
              className="theme-link"
              href="http://themes.3rdwavemedia.com"
              target="_blank"
            >
              Xiaoying Riley
            </a>{" "}
            for developers
          </small>
        </footer> */}
      </div>
    </div>
  );
};

export default App;
