import React, { useState } from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import "./banner-slider.scss";
import OwlCarousel from "react-owl-carousel";
import GasStation from "../../../../assets/images/web-icon/Home-Page/gas-station.svg";
import LocationImage from "../../../../assets/images/web-images/Location-Pop-up/location.svg";
import ScrollBar from "react-perfect-scrollbar";
import ModalComponent from "../../../common/Modal/modal";
import Logoimg from '../../../../assets/images/logo-img.png';
const BannerSlider = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const options = {
    margin: 10,
    loop: true,
    nav: true,
    dots: true,
    // autoplay: true,
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
      <div className="banner-main-section">
        <div className="banner-inner">
          <Container>
            <Row className="align-items-center">
              <Col  md={2}>
                         </Col>
              <Col md={8} >
                <div className="powertrac-content text-center">
                  <div className="banner-logo">
                    <div className="logo-img">
                                    <Image src={Logoimg}/>
                                </div>   
                  </div>
                  <div className="home-top-category">
                    <ul className="list list-horizontal d-inline-flex p-0">
                      <li className="list-item">Gas Stations</li>
                      <li className="list-item">Convenience Stores</li>
                      <li className="list-item">Liquor Store</li>
                    </ul>
                   
                  </div>
                  <div className="border-main"></div>
                  <div className="description-content">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita
                    </p>
                  </div>
                  <div className="place-order">
                    <Button onClick={() => handleShow()}>
                      Place Food Order
                      <span>
                        <i class="fas fa-arrow-right"></i>
                      </span>
                    </Button>
                  </div>
                </div>
              </Col>
               <Col  md={2}>
                
              </Col>
            </Row>
          </Container>
            <div className="get-our-app">
              <Button>
                Get Our App
                <a>
                  <i class="fab fa-google-play"></i>
                </a>
                <a>
                  <i class="fab fa-apple"></i>
                </a>
              </Button>
            </div>
        </div>
      </div>
      <ModalComponent isShow={show} onClose={handleClose}>
        <ModalBody />
      </ModalComponent>
    </>
  );
};

export default BannerSlider;
