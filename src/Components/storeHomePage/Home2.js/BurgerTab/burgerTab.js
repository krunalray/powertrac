import React,{useState} from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import "./burger-tab.scss";
import HamBurger from "../../../../assets/images/storehomepage/Burger/HamBurger.jpg";
import CheeeBurger from "../../../../assets/images/storehomepage/Burger/CheeseBurger.jpg";
import DoubleCheeseBurger from "../../../../assets/images/storehomepage/Burger/DoubleCheeseBurger.jpg";
import BaconCheeseBurger from "../../../../assets/images/storehomepage/Burger/baconcheeseburger.jpg";
import ChilliCheeseBurger from "../../../../assets/images/storehomepage/Burger/chillicheeseburger.jpg";
import PizzaView from "../../../../assets/images/storehomepage/pizzaview.png";
import CartIcon from "../../../../assets/images/storehomepage/cart.png";


const BurgerTab = () => {
  // const [value, setValue] = useState();
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <div className="burger-tab-section">
      <div className="burger-title">
        <h6>Food Items</h6>
        <h3>Our Menu</h3>
      </div>
      <div className="burger-meals-section">
        <div className="burger-meals-title">
          <h5>Burgers</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Ham Burger</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>3.99</div>
                      <div className="add-items">
                        <div className="plus">
                          <i class="fas fa-plus"></i>
                        </div>
                        <div className="numbers">2</div>
                        <div className="minus">
                          <i class="fas fa-minus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="cart-img">
                      <Image src={HamBurger} />
                      <div className="transparent-btn">
                        <div className="btn-img">
                          <div>
                            <Button>
                              View Details <Image src={PizzaView} />
                            </Button>
                          </div>
                          <div className="cart-top">
                            <Button>
                              <Image src={CartIcon} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Cheese Burger</h5>
                      <ul>
                        <li>12-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>3.99</div>
                      <div className="add-items">
                        <div className="plus">
                          <i class="fas fa-plus"></i>
                        </div>
                        <div className="numbers">2</div>
                        <div className="minus">
                          <i class="fas fa-minus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="cart-img">
                      <Image src={CheeeBurger} />
                      <div className="transparent-btn">
                        <div className="btn-img">
                          <div>
                            <Button>
                              View Details <Image src={PizzaView} />
                            </Button>
                          </div>
                          <div className="cart-top">
                            <Button>
                              <Image src={CartIcon} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Double Cheese Burger</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>3.99</div>
                      <div className="add-items">
                        <div className="plus">
                          <i class="fas fa-plus"></i>
                        </div>
                        <div className="numbers">2</div>
                        <div className="minus">
                          <i class="fas fa-minus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="cart-img">
                      <Image src={DoubleCheeseBurger} />
                      <div className="transparent-btn">
                        <div className="btn-img">
                          <div>
                            <Button>
                              View Details <Image src={PizzaView} />
                            </Button>
                          </div>
                          <div className="cart-top">
                            <Button>
                              <Image src={CartIcon} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Bacon Cheese Burger</h5>
                      <ul>
                        <li>12-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>3.99</div>
                      <div className="add-items">
                        <div className="plus">
                          <i class="fas fa-plus"></i>
                        </div>
                        <div className="numbers">2</div>
                        <div className="minus">
                          <i class="fas fa-minus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="cart-img">
                      <Image src={BaconCheeseBurger} />
                      <div className="transparent-btn">
                        <div className="btn-img">
                          <div>
                            <Button>
                              View Details <Image src={PizzaView} />
                            </Button>
                          </div>
                          <div className="cart-top">
                            <Button>
                              <Image src={CartIcon} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Chili Cheese Burger</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>3.99</div>
                      <div className="add-items">
                        <div className="plus">
                          <i class="fas fa-plus"></i>
                        </div>
                        <div className="numbers">2</div>
                        <div className="minus">
                          <i class="fas fa-minus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="cart-img">
                      <Image src={ChilliCheeseBurger} />
                      <div className="transparent-btn">
                        <div className="btn-img">
                          <div>
                            <Button>
                              View Details <Image src={PizzaView} />
                            </Button>
                          </div>
                          <div className="cart-top">
                            <Button>
                              <Image src={CartIcon} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BurgerTab;
