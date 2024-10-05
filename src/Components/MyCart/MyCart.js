import React from "react";
import './my-cart.scss';
import {
    Button,
    Image,
    Row,
    Col,
    Container,
  } from "react-bootstrap";
import CartImg01 from "../../assets/images/web-images/My-Cart/cart02.svg";
import CartImg02 from "../../assets/images/web-images/My-Cart/cart1.svg";
import CartImg03 from "../../assets/images/web-images/My-Cart/cart3.svg";
const MyCart = () => {
    return(
        <>
        <div className="cart-section">
          <div className="cart-inner">
            <div className="cart-title">My Cart</div>
            <div className="cart-box">
              <Container>
                <Row>
                  <Col md={3}>
                    <div className="cart-img">
                      <Image src={CartImg01} />
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className="cart-description">
                      <h5>New Cabernet Sauvignon</h5>
                      <div className="price">$ 60.00</div>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="add-items">
                      <div className="addding">
                        <div className="plus">
                          <i class="fas fa-plus"></i>
                        </div>
                        <div className="numbers">2</div>
                        <div className="minus">
                          <i class="fas fa-minus"></i>
                        </div>
                      </div>
                      <div className="close">
                        <i class="fas fa-times"></i>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="cart-box">
              <Container>
                <Row>
                  <Col md={3}>
                    <div className="cart-img">
                      <Image src={CartImg02} />
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className="cart-description">
                      <h5>New Cabernet Sauvignon</h5>
                      <div className="price">$ 60.00</div>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="add-items">
                      <div className="addding">
                        <div className="plus">
                          <i class="fas fa-plus"></i>
                        </div>
                        <div className="numbers">2</div>
                        <div className="minus">
                          <i class="fas fa-minus"></i>
                        </div>
                      </div>
                      <div className="close">
                        <i class="fas fa-times"></i>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="cart-box">
              <Container>
                <Row>
                  <Col md={3}>
                    <div className="cart-img">
                      <Image src={CartImg03} />
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className="cart-description">
                      <h5>New Cabernet Sauvignon</h5>
                      <div className="price">$ 60.00</div>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="add-items">
                      <div className="addding">
                        <div className="plus">
                          <i class="fas fa-plus"></i>
                        </div>
                        <div className="numbers">2</div>
                        <div className="minus">
                          <i class="fas fa-minus"></i>
                        </div>
                      </div>
                      <div className="close">
                        <i class="fas fa-times"></i>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="order-total">
              <div className="order-title">Order Total</div>
              <div className="order-price">$ 115.00</div>
            </div>
            <div className="continue-btn">
              <Button block>Continue</Button>
            </div>
          </div>
        </div>
        </>
    );
}

export default MyCart;