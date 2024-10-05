import React,{useState} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Bannerimg01 from "../../assets/images/banner-folder/bannerimg01.jpg";
import Aboutusimg01 from "../../assets/images/web-images/About-us/aboutus01.svg";
import Aboutusimg02 from "../../assets/images/web-images/About-us/aboutus02.svg";
import Aboutusimg03 from "../../assets/images/web-images/About-us/aboutus03.svg";
import GasStation from "../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../assets/images/dots01.png";
import DotsBlueOangeImg from "../../assets/images/dotsblueorange.png";
import OwlCarousel from "react-owl-carousel";
import "./about-us.scss";
const AboutUs = () => {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
  <p className="extra-content">
    Lorem ipsum dolor
  </p>
</div>
  const linkName=readMore?'Read Less... ':'Read More... '
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
    },
  };
  return (
    <>
    <div className="about-us-section">
      <Container>
        <div className="about-us-inner">
          <div className="title">
            <h6>Our Story</h6>
            <h4>The Power Trac</h4>
          </div>
          <div className="content">
            <Row>
              <Col md={4}>
                <div className="group-img">
                  <div className="imges">
                    <Row>
                      <Col md={12}>
                        <Image src={Aboutusimg01} />
                      </Col>
                    </Row>
                  </div>
                  <div className="both-images">
                    <Row>
                      <Col md={7}>
                        <div className="left-img">
                          <Image src={Aboutusimg02} />
                        </div>
                      </Col>
                      <Col md={5}>
                        <div className="right-img">
                          <Image src={Aboutusimg03} />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className="description">
                  <p>
                    From grilled Tandoori chicken burgers to simple chicken
                    burgers with garlic rosemary mayonnaise, put a new twist on
                    an old barbecue Power trac with these unique and chicken
                    burger recipes.
                  </p>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur.
                  </p>
                  <p>
                    From grilled Tandoori chicken burgers to simple chicken
                    burgers with garlic rosemary mayonnaise, put a new twist on
                    an old barbecue Power trac with these unique and chicken
                    burger recipes.
                  </p>
                  <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                  {readMore && extraContent}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
    <div className="bottom-content"></div>
  </>  
  );
};

export default AboutUs;
