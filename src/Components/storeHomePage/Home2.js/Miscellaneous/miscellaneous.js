import React,{useState} from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import "./miscellaneous.scss";
import ChickenTenders from "../../../../assets/images/storehomepage/Miscellaneous/Chickentenders.jpg";
import BirdDog from "../../../../assets/images/storehomepage/Miscellaneous/BirdDog.jpg";
import CornDog from "../../../../assets/images/storehomepage/Miscellaneous/CornDog.jpg";
import DillPickle from "../../../../assets/images/storehomepage/Miscellaneous/DillPickle.jpg";
import BBQ from "../../../../assets/images/storehomepage/Miscellaneous/BBQ.jpg";
import PizzaView from "../../../../assets/images/storehomepage/pizzaview.png";
import CartIcon from "../../../../assets/images/storehomepage/cart.png";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const MiscellaneousTab = () => {
  // const [value, setValue] = useState();
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <div className="miscellaneous-tab-section">
      <div className="miscellaneous-title">
        <h6>Food Items</h6>
        <h3>Our Menu</h3>
      </div>
      <div className="miscellaneous-meals-section">
        <div className="miscellaneous-meals-title">
          <h5>Miscellaneous</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Bird Dog</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>3.49</div>
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
                      <Image src={BirdDog} />
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
                      <h5>Corn Dog</h5>
                      <ul>
                      <li>
                          <div className="grits-sides">
                            <div className="grits-name">1-CD</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="1.69" control={<Radio />} label="1.69" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">2-CD</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="3.00" control={<Radio />} label="3.00" labelPlacement="start" />
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
                      <Image src={CornDog} />
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
                      <h5>Mac & Cheese</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>2.49</div>
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
                      <Image src={CornDog} />
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
                      <h5>Chicken Tenders</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>4.29</div>
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
                      <h5>Cole Slaw</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>1.39</div>
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
                      <Image src={CornDog} />
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
                      <h5>Dill Pickle</h5>
                      <ul>
                      <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>0.79</div>
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
                      <Image src={DillPickle} />
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
                      <h5>BBQ</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
                      <p>(2 dipping sauces)</p>
                      <div className="price"><i class="fas fa-dollar-sign"></i>2.59</div>
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
                      <Image src={BBQ} />
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

export default MiscellaneousTab;
