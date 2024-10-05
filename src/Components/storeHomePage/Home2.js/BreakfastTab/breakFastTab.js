import React,{useState} from "react";
import { Row, Col, Container, Image, Button, useAccordionToggle} from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';
import "./breakfast-tab.scss";
import OwlCarousel from "react-owl-carousel";
import Breakfastimg01 from "../../../../assets/images/storehomepage/Breakfast/breakfastimg01.jpg";
import Breakfastimg02 from "../../../../assets/images/storehomepage/Breakfast/breakfastimg02.jpg";
import Breakfastimg03 from "../../../../assets/images/storehomepage/Breakfast/breakfastimg03.jpg";
import Breakfastimg04 from "../../../../assets/images/storehomepage/Breakfast/breakfastimg04.jpg";
import Breakfastimg05 from "../../../../assets/images/storehomepage/Breakfast/breakfastimg05.jpg";
import PizzaView from "../../../../assets/images/storehomepage/pizzaview.png";
import CartIcon from "../../../../assets/images/storehomepage/cart.png";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import ModalComponent from "../../../common/Modal/modal";
import CustomPopupImg from "../../../../assets/images/web-images/Customize-POP/custom-popup.svg";
import IngredientsImg01 from "../../../../assets/images/web-images/Customize-POP/ingredients01.svg";
import IngredientsImg02 from "../../../../assets/images/web-images/Customize-POP/ingredients02.svg";
import IngredientsImg03 from "../../../../assets/images/web-images/Customize-POP/ingredients03.svg";
import IngredientsImg04 from "../../../../assets/images/web-images/Customize-POP/ingredients04.svg";
import IngredientsImg05 from "../../../../assets/images/web-images/Customize-POP/ingredients05.svg";
import IngredientsImg06 from "../../../../assets/images/web-images/Customize-POP/ingredients06.svg";
import CartImg from "../../../../assets/images/storehomepage/cart.png";
const BreakFastTab = ({eventKey}) => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const ModalBody = () => {
    const options = {
      margin: 10,
      nav: false,
      dots: false,
      autoplay: false,
      responsive: {
        0: {
          items: 3,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    };

    return (
      <div className="custom-popup-section">
        <div className="custom-popup-inner">
          <div className="custom-image">
            <Image src={CustomPopupImg} />
            <div className="sizes-serves">
              <div className="sizes">
                <div className="small">S</div>
                <div className="medium">M</div>
                <div className="large">L</div>
              </div>
              <div className="serves">
                <Button>Serves 1-2</Button>
              </div>
            </div>
          </div>
          <div className="pizzaname-price-section">
            <div className="pizzaname">Mushroom Pizza</div>
            <div className="price">
              <i class="fas fa-dollar-sign"></i> 120
            </div>
          </div>
          <div className="bottom-section">
            <div className="location-additems">
              <div className="location-name">Pt#2</div>
              <div className="add-items">
                <ul>
                  <li>
                    <a className="minus">
                      <i class="fas fa-minus"></i>
                    </a>
                  </li>
                  <li>2</li>
                  <li>
                    <a className="plus">
                      <i class="fas fa-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="description">
              You won’t make it to the car without a bite. Our Mushroom Pizza is
              topped generously with Italian sausage,
            </div>
            <div className="ingredient-section">
              <h5>Ingredients</h5>
              <div className="ingredient-slider">
                <OwlCarousel className="owl-theme" {...options}>
                  <div class="item">
                    <div className="cart-section">
                      <div className="cart-img">
                        <Image src={IngredientsImg01} />
                        <p>Meat</p>
                        <div className="selected-ingredients">
                           <span><i class="fas fa-check"></i></span>
                        </div>  
                      </div>
                      <h6>
                        <i class="fas fa-dollar-sign"></i> 1.5
                      </h6>
                    </div>
                  </div>
                  <div class="item">
                    <div className="cart-section">
                      <div className="cart-img">
                        <Image src={IngredientsImg02} />
                        <p>Onion</p>
                        <div className="selected-ingredients">
                           <span><i class="fas fa-check"></i></span>
                        </div>  
                      </div>
                      <h6>
                        <i class="fas fa-dollar-sign"></i> 0.00
                      </h6>
                    </div>
                  </div>
                  <div class="item">
                    <div className="cart-section">
                      <div className="cart-img">
                        <Image src={IngredientsImg03} />
                        <p>Veggies</p>
                        <div className="selected-ingredients">
                           <span><i class="fas fa-check"></i></span>
                        </div>  
                      </div>
                      <h6>
                        <i class="fas fa-dollar-sign"></i> 0.75
                      </h6>
                    </div>
                  </div>
                  <div class="item">
                    <div className="cart-section">
                      <div className="cart-img">
                        <Image src={IngredientsImg04} />
                        <p>Eggs</p>
                        <div className="selected-ingredients">
                           <span><i class="fas fa-check"></i></span>
                        </div>  
                      </div>
                      <h6>
                        <i class="fas fa-dollar-sign"></i> 0.85
                      </h6>
                    </div>
                  </div>
                  <div class="item">
                    <div className="cart-section">
                      <div className="cart-img">
                        <Image src={IngredientsImg05} />
                        <p>Beaf</p>
                        <div className="selected-ingredients">
                           <span><i class="fas fa-check"></i></span>
                        </div>  
                      </div>
                      <h6>
                        <i class="fas fa-dollar-sign"></i> 2.0
                      </h6>
                    </div>
                  </div>
                  <div class="item">
                    <div className="cart-section">
                      <div className="cart-img">
                        <Image src={IngredientsImg06} />
                        <p>Cheese</p>
                        <div className="selected-ingredients">
                           <span><i class="fas fa-check"></i></span>
                        </div>  
                      </div>
                      <h6>
                        <i class="fas fa-dollar-sign"></i> 1.35
                      </h6>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="addto-cart-btn">
              <Button block>
                Add to Cart <Image src={CartImg} />
              </Button>
            </div>
          </div>
        </div>
              <span className="model-close-icon" onClick={handleClose}>
                                                    <i className="fas fa-times"></i>
                                                </span>
      </div>
    );
  };
  return (
    <>
    <div className="breakfast-tab-section">
      <div className="breakfast-title">
        <h6>Food Items</h6>
        <h3>Our Menu</h3>
      </div>
      <div className="family-meals-section">
        <div className="family-meals-title">
          <h5>Biscuit</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6} >
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Bacon Biscuit</h5>
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
                      <Image src={Breakfastimg01} />
                      <div className="transparent-btn">
                        <div className="btn-img">
                          <div>
                            <Button onClick={() => handleShow()} >
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
              <Col md={6} >
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Bacon Egg N Cheese Biscuit</h5>
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
                      <Image src={Breakfastimg02} />
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
      <div className="main-arrow">
        <div className="down-arrow">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <i class="fas fa-chevron-down"></i>
          </Button>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
              <div className="detail-meals">
              <Container>
                <Row>
                  <Col md={6} >
                    <div className="meals-cart">
                      <div className="cart-inner">
                        <div className="meals-deail">
                          <h5>Bacon Biscuit</h5>
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
                          <Image src={Breakfastimg01} />
                          <div className="transparent-btn">
                            <div className="btn-img">
                              <div>
                                <Button onClick={() => handleShow()} >
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
                  <Col md={6} >
                    <div className="meals-cart">
                      <div className="cart-inner">
                        <div className="meals-deail">
                          <h5>Bacon Egg N Cheese Biscuit</h5>
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
                          <Image src={Breakfastimg02} />
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
        </Collapse>
      </div>
      {/* <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>   */}
      {/* <div className="down-arrow">
        <i class="fas fa-chevron-down"></i>
      </div> */}
      <div className="family-meals-section">
        <div className="family-meals-title">
          <h5>Tornadoes</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Papper jack cheese</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
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
                      <Image src={Breakfastimg03} />
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
                      <h5>Pancake sausage</h5>
                      <ul>
                        <li>12-Pc Chicken Mix</li>
                        <li>6-Pc Cajun tenders</li>
                        <li>6 Biscuits & Family Fries</li>
                      </ul>
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
                      <Image src={Breakfastimg04} />
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
      <div className="family-meals-section">
        <div className="family-meals-title">
          <h5>Grits</h5>
        </div>
        <div className="detail-meals">
          <Container>
            <Row>
              <Col md={6}>
                <div className="meals-cart">
                  <div className="cart-inner">
                    <div className="meals-deail">
                      <h5>Grits</h5>
                      <ul>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">12oz</div>
                            <div className="grits-price">
                              <RadioGroup >
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="1.99" control={<Radio />} label="1.99" labelPlacement="start" />
                              </RadioGroup>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="grits-sides">
                            <div className="grits-name">16oz</div>
                            <div className="grits-price">
                              <RadioGroup>
                                <i class="fas fa-dollar-sign"></i> <FormControlLabel value="2.69" control={<Radio />} label="2.69" labelPlacement="start" />
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
                      <Image src={Breakfastimg05} />
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
    <ModalComponent isShow={show} onClose={handleClose} >
      <ModalBody />
    </ModalComponent>
   </>
  );
};

export default BreakFastTab;
