import React, { useState } from "react";
import "./content-wrapper.scss";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import Dotsimg from "../../../assets/images/dots01.png";
import Pizzaicon from "../../../assets/images/web-icon/Home-Page/pizza.svg";
import BurgerIcon from "../../../assets/images/web-icon/Home-Page/burger.svg";
import BreakFastImg from "../../../assets/images/web-images/Menu-Page/breakfast.jpg";
import HotDogsImg from "../../../assets/images/web-images/Menu-Page/hotdogs.jpg";
import PizzaImg from "../../../assets/images/web-images/Menu-Page/pizza.jpg";
import ChickenImg from "../../../assets/images/web-images/Menu-Page/chicken.jpg";
import SandwichImg from "../../../assets/images/web-images/Menu-Page/sandwich.jpg";
import BurgersImg from "../../../assets/images/web-images/Menu-Page/burger1.jpg";
import DrinksImg from "../../../assets/images/web-images/Menu-Page/drinks.jpg";
import MiscellaneousImg from "../../../assets/images/web-images/Menu-Page/miscellaneous1.jpg";
import { useHistory } from "react-router-dom";

const ContentWrapper = () => {
  const history = useHistory();
  return (
    <>
      <div className="content-wrapper">
        <div className="right-wrapper">
          <div className="right-inner-content">
            <div className="foodmenu-title">
              <h6>Fresh Food</h6>
              <h3>Power Trac Menu</h3>
            </div>
            <div className="foodmenu-images">
              <Container>
                <div className="menu-images">
                  <Row>
                    <Col md={6}>
                      <div className="images" onClick={() => history.push('/home-page2')} >
                        <Image src={BreakFastImg} />
                        {/* <div className="menu-title">
                        <p>Breakfast Menu</p>
                      </div> */}
                      <div className="transparent-image">
                        <div className="transparent-title">
                            <p>Breakfast Menu</p>
                        </div>
                      </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="images" onClick={() => history.push('/home-page2')}>
                        <Image src={HotDogsImg} />
                        <div className="transparent-image">
                        <div className="transparent-title">
                            <p>Hot Dogs & Sausage Dogs</p>
                        </div>
                      </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="menu-images">
                  <Row>
                    <Col md={6}>
                      <div className="images"onClick={() => history.push('/home-page2')} >
                        <Image src={PizzaImg} />
                        <div className="transparent-image">
                        <div className="transparent-title">
                            <p>Hunt Brothers Pizza</p>
                        </div>
                      </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="images" onClick={() => history.push('/home-page2')}>
                        <Image src={ChickenImg} />
                        <div className="transparent-image">
                        <div className="transparent-title">
                            <p>Krispy Krunchy Chicken</p>
                        </div>
                      </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="menu-images">
                  <Row>
                    <Col md={6}>
                      <div className="images" onClick={() => history.push('/home-page2')}>
                        <Image src={SandwichImg} />
                        <div className="transparent-image">
                        <div className="transparent-title">
                            <p>Sandwiches</p>
                        </div>
                      </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="images" onClick={() => history.push('/home-page2')}>
                        <Image src={BurgersImg} />
                        <div className="transparent-image">
                        <div className="transparent-title">
                            <p>Burgers</p>
                        </div>
                      </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="menu-images">
                  <Row>
                    <Col md={6}>
                      <div className="images"onClick={() => history.push('/home-page2')} >
                        <Image src={DrinksImg} />
                        <div className="transparent-image">
                        <div className="transparent-title">
                            <p>Drinks</p>
                        </div>
                      </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="images" onClick={() => history.push('/home-page2')}>
                        <Image src={MiscellaneousImg} />
                        <div className="transparent-image">
                        <div className="transparent-title">
                            <p>Miscellaneous</p>
                        </div>
                      </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentWrapper;
