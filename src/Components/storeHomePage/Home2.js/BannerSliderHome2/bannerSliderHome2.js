import React from "react";
import "./banner-sliderhome2.scss";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
// import Bannerimg01 from "../../../../assets/images/web-images/Home-Page/bannerimg01.svg";
import Bannerimg01 from "../../../../assets/images/banner-folder/bannerimg01.jpg";
import OwlCarousel from "react-owl-carousel";
import GasStation from "../../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../../assets/images/dots01.png";
import DotsBlueOangeImg from "../../../../assets/images/dotsblueorange.png";

const BannerSliderHome2 = () => {
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
    <div className="home2-main-section">
      <div className="home2-banner-inner">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <div className="home2-banner-slider">
                <OwlCarousel className="owl-theme" {...options}>
                  <div class="item">
                    <Image src={Bannerimg01} />
                  </div>
                  <div class="item">
                    <Image src={Bannerimg01} />
                  </div>
                  <div class="item">
                    <Image src={Bannerimg01} />
                  </div>
                  <div class="item">
                    <Image src={Bannerimg01} />
                  </div>
                  <div class="item">
                    <Image src={Bannerimg01} />
                  </div>
                </OwlCarousel>
                <div className="gas-station">
                  <Image src={GasStation} />
                  <div className="dots-right">
                    <Image src={Dots01} />
                  </div>
                </div>
                <div className="dots-bottom">
                  <Image src={DotsBlueOangeImg} />
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="powertrac-content">
                <h3>Menu Item</h3>
                <div className="border-main"></div>
                <div className="description-content">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <div className="place-order">
                  <Button>
                    Place Order
                    <span>
                      <i class="fas fa-arrow-right"></i>
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerSliderHome2;
