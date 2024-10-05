import React from "react";
import "./liquor-content.scss";
import { Row, Col, Image, Container } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import ReactStars from "react-stars";
import Dotsimg from "../../../assets/images/dots01.png";
import Pizzaicon from "../../../assets/images/web-icon/Home-Page/pizza.svg";
import BurgerIcon from "../../../assets/images/web-icon/Home-Page/burger.svg";
import BloodyImg from "../../../assets/images/web-images/Liquor/shop-img-10-1.svg";
import OwlCarousel from "react-owl-carousel";
import IngredientsImg01 from "../../../assets/images/web-images/Liquor/ingredientsimg01.svg";
import IngredientsImg02 from "../../../assets/images/web-images/Liquor/ingredientsimg02.svg";
import IngredientsImg03 from "../../../assets/images/web-images/Liquor/ingredientsimg03.svg";
import IngredientsImg04 from "../../../assets/images/web-images/Liquor/ingredientsimg04.svg";

const LiquorContent = () => {
  const options = {
    dots: true,
    dotsEach: 3,
    loop: true,
    margin: 30,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      500:{
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="liquor-content-wrapper">
     
      <div className="right-wrapper">
        <div className="right-inner-content">
          <div className="detail-main">
            <Row>
              <Col md={6} sm={6}>
                <div className="bloody-images">
                  <Image src={BloodyImg} />
                </div>
              </Col>
              <Col md={6} sm={6}>
                <div className="details">
                  <h2>BLOODY MERY</h2>
                  <p>
                    A Bloody Mary is a cocktail containing vodka, tomato juice,
                    and other spices and flavorings including Worcestershire
                    sauce, hot sauces, garlic, herbs, horseradish, celery,
                    olives, salt, black pepper, lemon juice, lime juice and
                    celery salt.
                  </p>
                  <div className="stars-reviews">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={18}
                      color2={"#C7CACB"}
                    />
                    <div className="reviews">(26 customer review)</div>
                  </div>
                  <div className="price">$ 60.00</div>
                  <div className="sku-section">
                    <p>Sku : 009</p>
                    <p>Category: Liqueur</p>
                    <p>Tags: Bottle, Box, Drink, Fruit, Liqueur, Peach</p>
                  </div>
                  <div className="share-link">
                    <ul>
                      <li>
                        <span> Share :</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="custom-tab">
            <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="justify-content-center">
              <Tab eventKey="description" title="Description">
                <TabContainer>
                  <p>
                    A Bloody Mary is a cocktail containing vodka, tomato juice,
                    and other spices and flavorings including Worcestershire
                    sauce, hot sauces, garlic, herbs, horseradish, celery,
                    olives, salt, black pepper, lemon juice, lime juice and
                    celery salt. Some versions of the drink, such as the “surf
                    ’n turf” Bloody Mary, include shrimp and bacon as garnishes.
                    In the United States, it is usually consumed in the morning
                    or early afternoon, and is popular as a hangover cure.
                  </p>
                </TabContainer>
              </Tab>
              <Tab
                eventKey="additionalinformation"
                title="Additional information"
              >
                <TabContainer>
                  <p>
                    A Bloody Mary is a cocktail containing vodka, tomato juice,
                    and other spices and flavorings including Worcestershire
                    sauce, hot sauces, garlic, herbs, horseradish, celery,
                    olives, salt, black pepper, lemon juice, lime juice and
                    celery salt. Some versions of the drink, such as the “surf
                    ’n turf” Bloody Mary, include shrimp and bacon as garnishes.
                    In the United States, it is usually consumed in the morning
                    or early afternoon, and is popular as a hangover cure.
                  </p>
                </TabContainer>
              </Tab>
              <Tab eventKey="reviews" title="Reviews (26) ">
                <TabContainer>No reviews .</TabContainer>
              </Tab>
            </Tabs>
          </div>
          <div className="ingredients-section">
            <div className="title">
              <h4>ingredients</h4>
            </div>
            <div className="ingredients-slider">
              <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg01} />
                    <h5>Vodka</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg02} />
                    <h5>Tomato Juice</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg03} />
                    <h5>Tomato Juice</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg04} />
                    <h5>Black Pepper</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg01} />
                    <h5>Vodka</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg02} />
                    <h5>Tomato Juice</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg03} />
                    <h5>Tomato Juice</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg04} />
                    <h5>Black Pepper</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg01} />
                    <h5>Vodka</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg02} />
                    <h5>Tomato Juice</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg03} />
                    <h5>Tomato Juice</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="images-title">
                    <Image src={IngredientsImg04} />
                    <h5>Black Pepper</h5>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquorContent;
