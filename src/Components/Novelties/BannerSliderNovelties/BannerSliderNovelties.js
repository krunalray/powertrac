import React from "react";
import "./banner-slider-novelties.scss";
import { Row, Col, Image, Container } from "react-bootstrap";
import Bannerimg01 from "../../../assets/images/banner-folder/bannerimg01.jpg";
import OwlCarousel from "react-owl-carousel";
import GasStation from "../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../assets/images/dots01.png";
import DotsBlueOangeImg from "../../../assets/images/dotsblueorange.png";

const BannerSliderNovelties = () => {
  const options = {
    margin: 10,
    loop: true,
    nav: true,
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
  return (
    <div className="banner3-main-section">
      <div className="banner3-inner">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="powertrac-content">
                <h3>Power Your Track with</h3>
                  <h2><span className="border-bottom">Power</span> Trac</h2>
                <div className="description-content">
                  <p>
                    <div className="description-content"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p></div>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerSliderNovelties;
