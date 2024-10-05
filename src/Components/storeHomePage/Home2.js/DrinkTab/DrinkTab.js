import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import "./drink-tab.scss";
import Pepsi from "../../../../assets/images/storehomepage/Drink/Pepsi.jpg";
import Cocacola from "../../../../assets/images/storehomepage/Drink/Cocacola.jpg";
import GingerCocktail from "../../../../assets/images/storehomepage/Drink/GingerCocktail.jpg";
import Lemon from "../../../../assets/images/storehomepage/Drink/Lemon.jpg";
import PizzaView from "../../../../assets/images/storehomepage/pizzaview.png";
const DrinkTab = () => {
    return(
    <div className="drink-tab-section">
        <div className="drink-title">
          <h6>Food Items</h6>
          <h3>Our Menu</h3>
        </div>
        <div className="family-meals-section">
          <div className="family-meals-title">
            <h5>Drinks</h5>
          </div>
          <div className="detail-meals">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="meals-cart">
                    <div className="cart-inner">
                      <div className="meals-deail">
                        <h5>Pepsi</h5>
                        <ul>
                          <li>12-Pc Chicken Mix</li>
                          <li>6-Pc Cajun tenders</li>
                          <li>6 Biscuits & Family Fries</li>
                        </ul>
                        <p>(2 dipping sauces)</p>
                        <div className="price"><i class="fas fa-dollar-sign"></i>28.99</div>
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
                        <Image src={Pepsi} />
                        <div className="transparent-btn">
                          <div className="btn-img">
                            <div>
                              <Button>
                                View Details <Image src={PizzaView} />
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
                        <h5>Cocacola</h5>
                        <ul>
                          <li>12-Pc Cajun tenders</li>
                          <li>6 Biscuits & Family Fries</li>
                        </ul>
                        <p>(3 dipping sauces)</p>
                        <div className="price"><i class="fas fa-dollar-sign"></i>18.99</div>
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
                        <Image src={Cocacola} />
                        <div className="transparent-btn">
                          <div className="btn-img">
                            <div>
                              <Button>
                                View Details <Image src={PizzaView} />
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
                        <h5>Lemon Cocktail</h5>
                        <ul>
                          <li>12-Pc Chicken Mix</li>
                          <li>6-Pc Cajun tenders</li>
                          <li>6 Biscuits & Family Fries</li>
                        </ul>
                        <p>(2 dipping sauces)</p>
                        <div className="price"><i class="fas fa-dollar-sign"></i>28.99</div>
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
                        <Image src={Lemon} />
                        <div className="transparent-btn">
                          <div className="btn-img">
                            <div>
                              <Button>
                                View Details <Image src={PizzaView} />
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
                        <h5>Ginger Cocktail</h5>
                        <ul>
                          <li>12-Pc Cajun tenders</li>
                          <li>6 Biscuits & Family Fries</li>
                        </ul>
                        <p>(3 dipping sauces)</p>
                        <div className="price"><i class="fas fa-dollar-sign"></i>18.99</div>
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
                        <Image src={GingerCocktail} />
                        <div className="transparent-btn">
                          <div className="btn-img">
                            <div>
                              <Button>
                                View Details <Image src={PizzaView} />
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
        <div className="down-arrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
    );
}
export default DrinkTab;