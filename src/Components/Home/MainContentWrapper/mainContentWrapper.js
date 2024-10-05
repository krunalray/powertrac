import React,{useState} from "react";
import "./content-wrapper.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import Pizzaimg01 from "../../../assets/images/web-images/Home-Page/Veggie.svg";
import Pizzaimg02 from "../../../assets/images/web-images/Home-Page/Loaded.svg";
import Pizzaimg03 from "../../../assets/images/web-images/Home-Page/Pizza-Loaded2.svg";
import AboutUs01 from "../../../assets/images/web-images/Home-Page/aboutusslide01.svg";
import LeftRight from "../../../assets/images/web-icon/Home-Page/left-right.svg";
import Dotsimg from "../../../assets/images/dots01.png";
import ReactStars from "react-stars";
import Pizzaicon from "../../../assets/images/web-icon/Home-Page/pizza.svg";
import BurgerIcon from "../../../assets/images/web-icon/Home-Page/burger.svg";
import ModalComponent from "../../common/Modal/modal";
import ScrollBar from "react-perfect-scrollbar";
import LocationImage from "../../../assets/images/web-images/Location-Pop-up/location.svg";

const MainContentWrapper = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const options = {
    margin: 10,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      667: {
        items: 2,
        nav: false,
      },
      700: {
        items: 4,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
      1200: {
        items: 4,
        nav: false,
      },
      1920: {
        items: 4,
        nav: false,
      },
      2048: {
        items: 4,
        nav: false,
      },
    },
  };
  const aboutOptions = {
    margin: 0,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };
  const proveOption = {
    margin: 10,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };
  const ModalBody = () => {
    return (
      <div className="location-popup-section">
        <div className="location-popup-inner">
          <h3>Power Trac</h3>
          <h2>Location</h2>
          <div className="location-image">
            <Image src={LocationImage} />
          </div>
          <div className="search-section">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Location"
            />
            <span>
              <i class="fas fa-search"></i>
            </span>
          </div>
          <div className="loction-detail">
            <ScrollBar>
              <div className="location-detail-inner">
                    <h4>#19</h4>      
                    <div className="locationname-mi">
                      <p>2541 S Main St Pearland Texas</p>
                      <p>77584 (977.5 mi)</p>
                    </div>
                    <div className="location-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
              </div>
              <div className="location-detail-inner">
               
                    <h4>#25</h4>
                       <div className="locationname-mi">
                      <p>2304 W Mulberry St Angleton Texas</p>
                      <p>77515 (980.5 mi)</p>
                    </div>
                    <div className="location-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
              </div>
              <div className="location-detail-inner">
                    <h4>#21</h4>
                    <div className="locationname-mi">
                      <p>931 Loop 274 Angleton Texas</p>
                      <p>77515 (979.5 mi)</p>
                    </div>
                    <div className="location-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
              </div>
              <div className="location-detail-inner">
                    <h4>#21</h4>
                    <div className="locationname-mi">
                      <p>931 Loop 274 Angleton Texas</p>
                      <p>77515 (979.5 mi)</p>
                    </div>
                    <div className="location-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
              </div>
            </ScrollBar>
          </div>
        </div>
         <span className="model-close-icon" onClick={handleClose}>
                                                    <i className="fas fa-times"></i>
                                                </span>
      </div>
    );
  };
  return (
    <>
    <div className="main-content-wrapper">

      <div className="right-wrapper">
        <div className="right-inner-content">
          <div className="carvings">
            <span>Satisfy your Cravings</span>
          </div>
          <div className="pizza-images">
            <Container fluid>
              <OwlCarousel className="owl-theme" {...options}>
                <div class="item-menu item">
                  <Image src={Pizzaimg01} onClick={() => handleShow()} />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg02} onClick={() => handleShow()} />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg03} onClick={() => handleShow()} />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg01} onClick={() => handleShow()} />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg02} onClick={() => handleShow()} />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg02}onClick={() => handleShow()}  />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
              </OwlCarousel>
               <OwlCarousel className="owl-theme" {...options}>
                <div class="item-menu item">
                  <Image src={Pizzaimg01} onClick={() => handleShow()} />
                   <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg02} onClick={() => handleShow()} />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg03} onClick={() => handleShow()} />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg01} onClick={() => handleShow()} />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg02} onClick={() => handleShow()} />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
                <div class="item-menu item">
                  <Image src={Pizzaimg02}onClick={() => handleShow()}  />
                  <div className="item-menu-title">BreakFast Menu</div>
                </div>
              </OwlCarousel>
            </Container>
          </div>
          <div className="about-us-slider">
            <div className="banner-slider">
              <OwlCarousel className="owl-theme" {...aboutOptions}>
                <div class="item">
                  <Row className="align-items-center">
                    <Col md={7}>
                      <Image src={AboutUs01} />
                    </Col>
                    <Col md={5}>
                      <div className="aboutus-content">
                        <h5>About US</h5>
                        <h3>Power Trac</h3>
                        <div className="description-content">
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div class="item">
                  <Row className="align-items-center">
                    <Col md={7}>
                      <Image src={AboutUs01} />
                    </Col>
                    <Col md={5}>
                      <div className="aboutus-content">
                        <h5>About US</h5>
                        <h3>Power Trac</h3>
                        <div className="description-content">
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div class="item">
                  <Row className="align-items-center">
                    <Col md={7}>
                      <Image src={AboutUs01} />
                    </Col>
                    <Col md={5}>
                      <div className="aboutus-content">
                        <h5>About US</h5>
                        <h3>Power Trac</h3>
                        <div className="description-content">
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div class="item">
                  <Row className="align-items-center">
                    <Col md={7}>
                      <Image src={AboutUs01} />
                    </Col>
                    <Col md={5}>
                      <div className="aboutus-content">
                        <h5>About US</h5>
                        <h3>Power Trac</h3>
                        <div className="description-content">
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div class="item">
                  <Row className="align-items-center">
                    <Col md={7}>
                      <Image src={AboutUs01} />
                    </Col>
                    <Col md={5}>
                      <div className="aboutus-content">
                        <h5>About US</h5>
                        <h3>Power Trac</h3>
                        <div className="description-content">
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </OwlCarousel>
              <div className="top-box">
                <div className="box-blue-top"></div>
              </div>
              <div className="image-triangle">
                <Image src={LeftRight} />
              </div>
              <div className="bottom-box">
                <Image src={Dotsimg} />
              </div>
            </div>
          </div>
          <div className="weprove-slider">
            <Row>
              <Col md={5}>
                  <div className="best-content">
                    <h5>We proved,</h5>
                    <h6>We are the best</h6>
                    <div className="pepolesay">
                        <h1>What people say about Power Trac.</h1>
                    </div>
                  </div>
              </Col>
              <Col md={7}>
                <div className="prove-banner-slider">
                    <OwlCarousel className="owl-theme" {...proveOption}>
                      <div class="item">
                        <div className="prove-content">
                          <div className="description-content">
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </p>
                            <h6>Dhaval Patel</h6>
                          </div>
                          <div className="customer-section">
                            <div className="customer-content">Our valuable customer</div>
                            <div className="star-section">
                              <ReactStars
                                count={5}
                                onChange={false}
                                edit={false}
                                size={20}
                                color2={"#ffd700"}
                                value={3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div className="prove-content">
                          <div className="description-content">
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </p>
                            <h6>Dhaval Patel</h6>
                          </div>
                          <div className="customer-section">
                            <div className="customer-content">Our valuable customer</div>
                            <div className="star-section">
                              <ReactStars
                                count={5}
                                onChange={false}
                                edit={false}
                                size={20}
                                color2={"#ffd700"}
                                value={3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div className="prove-content">
                          <div className="description-content">
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </p>
                            <h6>Dhaval Patel</h6>
                          </div>
                          <div className="customer-section">
                            <div className="customer-content">Our valuable customer</div>
                            <div className="star-section">
                              <ReactStars
                                count={5}
                                onChange={false}
                                edit={false}
                                size={20}
                                color2={"#ffd700"}
                                value={3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div className="prove-content">
                          <div className="description-content">
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </p>
                            <h6>Dhaval Patel</h6>
                          </div>
                          <div className="customer-section">
                            <div className="customer-content">Our valuable customer</div>
                            <div className="star-section">
                              <ReactStars
                                count={5}
                                onChange={false}
                                edit={false}
                                size={20}
                                color2={"#ffd700"}
                                value={3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div className="prove-content">
                          <div className="description-content">
                            <p>
                              “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </p>
                            <h6>Dhaval Patel</h6>
                          </div>
                          <div className="customer-section">
                            <div className="customer-content">Our valuable customer</div>
                            <div className="star-section">
                              <ReactStars
                                count={5}
                                onChange={false}
                                edit={false}
                                size={20}
                                color2={"#ffd700"}
                                value={3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                  </OwlCarousel>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
    <ModalComponent isShow={show} onClose={handleClose}>
        <ModalBody />
    </ModalComponent>
   </>
  );
};

export default MainContentWrapper;
