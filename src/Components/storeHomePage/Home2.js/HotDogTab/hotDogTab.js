import React,{useState} from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import "./hot-dog.scss";
import HotDog from "../../../../assets/images/storehomepage/HotDog/hotdog.jpg";
import SausageDog from "../../../../assets/images/storehomepage/HotDog/sausagedog.jpg";
import PizzaView from "../../../../assets/images/storehomepage/pizzaview.png";
import CartIcon from "../../../../assets/images/storehomepage/cart.png";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const HotDogTab = () => {
  // const [value, setValue] = useState();
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <div className="hotdog-tab-section">
      <div className="hotdog-title">
        <h6>Food Items</h6>
        <h3>Our Menu</h3>
      </div>
      <div className="hotdog-meals-section">
        <div className="hotdog-meals-title">
          <h5>Hotdogs & Sausage</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Hot Dogs</h5>
                      <ul>
                      <li>
                          <div className="grits-sides">
                            <div className="grits-name">1-HD</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="1.99" control={<Radio />} label="1.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">2-HD</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="3.50" control={<Radio />} label="3.50" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">5-HD</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="7.99" control={<Radio />} label="7.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">10-HD</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="14.99" control={<Radio />} label="14.99" labelPlacement="start" />
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
                      <Image src={HotDog} />
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
                      <h5>Sausage Dogs</h5>
                      <ul>
                        <li>12-Pc Cajun tenders</li>
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
                      <Image src={SausageDog} />
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

export default HotDogTab;
