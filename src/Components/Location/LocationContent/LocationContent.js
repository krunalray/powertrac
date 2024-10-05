import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import Dotsimg from "../../../assets/images/dots01.png";
import Pizzaicon from "../../../assets/images/web-icon/Home-Page/pizza.svg";
import BurgerIcon from "../../../assets/images/web-icon/Home-Page/burger.svg";
import CarocineImg from "../../../assets/images/web-icon/Locations/Carocine.svg";
import DieselImg from "../../../assets/images/web-icon/Locations/diesel-1.svg";
import HamBurgerImg from "../../../assets/images/web-icon/Locations/hamburger.svg";
import HotDogImg from "../../../assets/images/web-icon/Locations/hot-dog-hand-drawn-food-outline.svg";
import LiquorImg from "../../../assets/images/web-icon/Locations/liquor.svg";
import PizzaImg from "../../../assets/images/web-icon/Locations/pizza-1.svg";
import ChickenImg from "../../../assets/images/web-icon/Locations/roast-chicken.svg";
import ScrollBar from "react-perfect-scrollbar";
import "./location-content.scss";
const LocationContent = () => {
  return (
    <div className="location-wrapper">
      <div className="right-wrapper">
        <div className="right-inner-content">
          <div className="location-title">
            <h6>Power Trac</h6>
            <h3>Locations</h3>
          </div>
          <div className="search-btn">
            <Row>
              <Col md={5} sm={8}>
                <div className="search-main">
                  <input
                    type="text"
                    class="form-control"
                    id="search"
                    placeholder="Search..."
                  />
                  <Button className="search-icon">
                    <i class="fas fa-search"></i>
                  </Button>
                </div>
              </Col>
              <Col md={7} sm={4}>
                <div className="location-btn">
                  <Button>Location</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div className="view-location-section">
            <ScrollBar>
              <div className="view-location-inner">
                <div className="title-btn">
                  <Row>
                    <Col md={8}>
                      <p>
                        <span>#19</span>2541 S Main St Pearland Texas 77584 (977.5
                        mi)
                      </p>
                    </Col>
                    <Col md={4}>
                      <div className="view-btn">
                        <Button>View Location</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="icon-name">
                  <div className="icons">
                    <Image src={CarocineImg} />
                    <h6>Non-Ethanol Gas</h6>
                  </div>
                  <div className="icons">
                    <Image src={CarocineImg} />
                    <h6>Carocin</h6>
                  </div>
                  <div className="icons">
                    <Image src={DieselImg} />
                    <h6>Off Road Diesel</h6>
                  </div>
                  <div className="icons">
                    <Image src={DieselImg} />
                    <h6>Diesel</h6>
                  </div>
                  <div className="icons">
                    <Image src={HamBurgerImg} />
                    <h6>Burger</h6>
                  </div>
                  <div className="icons">
                    <Image src={HotDogImg} />
                    <h6>Hotdog</h6>
                  </div>
                  <div className="icons">
                    <Image src={LiquorImg} />
                    <h6>Liquor</h6>
                  </div>
                  <div className="icons">
                    <Image src={PizzaImg} />
                    <h6>Pizza</h6>
                  </div>
                  <div className="icons">
                    <Image src={ChickenImg} />
                    <h6>Chicken</h6>
                  </div>
                </div>
              </div>
              <div className="view-location-inner">
                <div className="title-btn">
                  <Row>
                    <Col md={8}>
                      <p>
                        <span>#25</span>2304 W Mulberry St Angleton Texas 77515
                        (980.5 mi)
                      </p>
                    </Col>
                    <Col md={4}>
                      <div className="view-btn">
                        <Button>View Location</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="icon-name">
                  <div className="icons">
                    <Image src={CarocineImg} />
                    <h6>Non-Ethanol Gas</h6>
                  </div>
                  <div className="icons">
                    <Image src={CarocineImg} />
                    <h6>Carocin</h6>
                  </div>
                  <div className="icons">
                    <Image src={DieselImg} />
                    <h6>Off Road Diesel</h6>
                  </div>
                  <div className="icons">
                    <Image src={DieselImg} />
                    <h6>Diesel</h6>
                  </div>
                  <div className="icons">
                    <Image src={HamBurgerImg} />
                    <h6>Burger</h6>
                  </div>
                  <div className="icons">
                    <Image src={HotDogImg} />
                    <h6>Hotdog</h6>
                  </div>
                  <div className="icons">
                    <Image src={LiquorImg} />
                    <h6>Liquor</h6>
                  </div>
                  <div className="icons">
                    <Image src={PizzaImg} />
                    <h6>Pizza</h6>
                  </div>
                  <div className="icons">
                    <Image src={ChickenImg} />
                    <h6>Chicken</h6>
                  </div>
                </div>
              </div>
              <div className="view-location-inner">
                <div className="title-btn">
                  <Row>
                    <Col md={8}>
                      <p>
                        <span>#21</span>931 Loop 274 Angleton Texas 77515 (979.5 mi)
                      </p>
                    </Col>
                    <Col md={4}>  
                      <div className="view-btn">
                        <Button>View Location</Button>
                      </div>
                    </Col>
                  </Row>  
                </div>
                <div className="icon-name">
                  <div className="icons">
                    <Image src={CarocineImg} />
                    <h6>Non-Ethanol Gas</h6>
                  </div>
                  <div className="icons">
                    <Image src={CarocineImg} />
                    <h6>Carocin</h6>
                  </div>
                  <div className="icons">
                    <Image src={DieselImg} />
                    <h6>Off Road Diesel</h6>
                  </div>
                  <div className="icons">
                    <Image src={DieselImg} />
                    <h6>Diesel</h6>
                  </div>
                  <div className="icons">
                    <Image src={HamBurgerImg} />
                    <h6>Burger</h6>
                  </div>
                  <div className="icons">
                    <Image src={HotDogImg} />
                    <h6>Hotdog</h6>
                  </div>
                  <div className="icons">
                    <Image src={LiquorImg} />
                    <h6>Liquor</h6>
                  </div>
                  <div className="icons">
                    <Image src={PizzaImg} />
                    <h6>Pizza</h6>
                  </div>
                  <div className="icons">
                    <Image src={ChickenImg} />
                    <h6>Chicken</h6>
                  </div>
                </div>
              </div>
              <div className="view-location-inner">
                <div className="title-btn">
                  <Row>
                    <Col md={8}>
                      <p>
                        <span>#3</span>801 N Brooks Brazoria Texas 77422 (980.5 mi)
                      </p>
                    </Col>
                    <Col md={4}>  
                      <div className="view-btn">
                        <Button>View Location</Button>
                      </div>
                    </Col>
                  </Row>  
                </div>
                <div className="icon-name">
                  <div className="icons">
                    <Image src={CarocineImg} />
                    <h6>Non-Ethanol Gas</h6>
                  </div>
                  <div className="icons">
                    <Image src={CarocineImg} />
                    <h6>Carocin</h6>
                  </div>
                  <div className="icons">
                    <Image src={DieselImg} />
                    <h6>Off Road Diesel</h6>
                  </div>
                  <div className="icons">
                    <Image src={DieselImg} />
                    <h6>Diesel</h6>
                  </div>
                  <div className="icons">
                    <Image src={HamBurgerImg} />
                    <h6>Burger</h6>
                  </div>
                  <div className="icons">
                    <Image src={HotDogImg} />
                    <h6>Hotdog</h6>
                  </div>
                  <div className="icons">
                    <Image src={LiquorImg} />
                    <h6>Liquor</h6>
                  </div>
                  <div className="icons">
                    <Image src={PizzaImg} />
                    <h6>Pizza</h6>
                  </div>
                  <div className="icons">
                    <Image src={ChickenImg} />
                    <h6>Chicken</h6>
                  </div>
                </div>
              </div>
            </ScrollBar>
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default LocationContent;
