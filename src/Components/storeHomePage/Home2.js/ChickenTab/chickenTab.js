import React,{useState} from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import "./chicken-tab.scss";
// import ChickenTenders from "../../../../assets/images/bglayout.png";
import CajunTenders from "../../../../assets/images/storehomepage/Chicken/cajuntenders.jpg";
import ChickenTenders from "../../../../assets/images/storehomepage/Chicken/Chickentenders.jpg";
import FriedFish from "../../../../assets/images/storehomepage/Chicken/friedfish.jpg";
import FriesShrim from "../../../../assets/images/storehomepage/Chicken/friesshrimp.jpg";
import Fries from "../../../../assets/images/storehomepage/Chicken/fries.jpg";
import KrishpyChickenSandwich from "../../../../assets/images/storehomepage/Chicken/krishpychickensandwich.jpg";
import Sides from "../../../../assets/images/storehomepage/Chicken/sides.jpg";
import Tenders from "../../../../assets/images/storehomepage/Chicken/Tenders.jpg";
import Traditionalwings from "../../../../assets/images/storehomepage/Chicken/traditionalwings.jpg";

import PizzaView from "../../../../assets/images/storehomepage/pizzaview.png";
import CartIcon from "../../../../assets/images/storehomepage/cart.png";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const ChickenTab = () => {
  // const [value, setValue] = useState();
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <div className="chicken-tab-section">
      <div className="chicken-title">
        <h6>Food Items</h6>
        <h3>Our Menu</h3>
      </div>
      <div className="chicken-meals-section">
        <div className="chicken-meals-title">
          <h5>Family Meals</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Chicken & Tenders</h5>
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
                      <Image src={ChickenTenders} />
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
                      <h5>Tenders</h5>
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
                      <Image src={Tenders} />
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
      <div className="chicken-meals-section">
        <div className="chicken-meals-title">
          <h5>Krispy Crunchy Chicken</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Chicken & Tenders</h5>
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
                      <Image src={ChickenTenders} />
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
                      <h5>Tenders</h5>
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
                      <Image src={Tenders} />
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
      <div className="down-arrow">
      <i class="fas fa-chevron-down"></i>
      </div>
      <div className="chicken-meals-section">
        <div className="chicken-meals-title">
          <h5>See Food</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Fried Fish</h5>
                      <ul>
                      <li>
                          <div className="grits-sides">
                            <div className="grits-name">1-Pc</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="3.99" control={<Radio />} label="3.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">2-Pc</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="6.99" control={<Radio />} label="6.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">3-Pc</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="8.99" control={<Radio />} label="8.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                       
                      </ul>
                      <p>(Fish, Biscuit)</p>
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
                      <Image src={FriedFish} />
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
                      <h5>Fried Shrimp</h5>
                      <ul>
                      <li>
                          <div className="grits-sides">
                            <div className="grits-name">5-Pc</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="3.69" control={<Radio />} label="3.69" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">10-Pc</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="6.99" control={<Radio />} label="6.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">16-Pc</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="9.99" control={<Radio />} label="9.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <p>(Shrimp, Biscuit)</p>
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
                      <Image src={FriesShrim} />
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
      <div className="chicken-meals-section">
        <div className="chicken-meals-title">
          <h5>Cajun Tenders</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Cajun Tenders</h5>
                      <ul>
                      <li>
                          <div className="grits-sides">
                            <div className="grits-name">4-Pc</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="5.49" control={<Radio />} label="5.49" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">6-Pc</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="7.49" control={<Radio />} label="7.49" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <p>(Tender, Biscuit, 1-Sauce)</p>
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
                      <Image src={CajunTenders} />
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
                      <h5>Cajun Tenders</h5>
                      <ul>
                      <li>
                          <div className="grits-sides">
                            <div className="grits-name">8-Pc(2-Sauce)</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="9.99" control={<Radio />} label="9.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">12-Pc(3-Sauce)</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="13.99" control={<Radio />} label="13.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">25-Pc(6-Sauce)</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="23.99" control={<Radio />} label="23.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <p>(Tender)</p>
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
                      <Image src={CajunTenders} />
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
      <div className="chicken-meals-section">
        <div className="chicken-meals-title">
          <h5>Wings & Sandwiches</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Traditional Wings</h5>
                      <ul>
                      <li>
                          <div className="grits-sides">
                            <div className="grits-name">5-Pc</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="4.89" control={<Radio />} label="4.89" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">10-Pc</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="9.49" control={<Radio />} label="9.49" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">20-Pc</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="17.99" control={<Radio />} label="17.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">40-Pc</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="32.99" control={<Radio />} label="32.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                      </ul>
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
                      <Image src={Traditionalwings} />
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
                      <h5>Krispy Krunchy Chicken Sandwich</h5>
                      <ul>
                        <li>12-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(3 dipping sauces)</p>
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
                      <Image src={KrishpyChickenSandwich} />
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
      <div className="chicken-meals-section">
        <div className="chicken-meals-title">
          <h5>Sides & Snacks</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Sides</h5>
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
                      <Image src={Sides} />
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
                      <h5>Fries</h5>
                      <ul>
                      <li>
                          <div className="grits-sides">
                            <div className="grits-name">Small</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="2.19" control={<Radio />} label="2.19" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">Large</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="2.49" control={<Radio />} label="2.49" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">Family</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="3.99" control={<Radio />} label="3.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                      </ul>
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
                      <Image src={Fries} />
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
      <div className="down-arrow">
      <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default ChickenTab;
