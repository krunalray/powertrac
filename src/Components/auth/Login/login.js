import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import GasStation from "../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../assets/images/dots01.png";
import DotsBlue from "../../../assets/images/blueorange.png";
import Arrow from "../../../assets/images/bottomright.png";
import "./login.scss";
const Login = () => {
  return (
    <div className="login-section">
      <div className="bg-bl-blue"></div>
      <div className="login-inner">
        <Container>
          <Row>
            <Col md={4} sm={6}>
              <div className="login-content">
                <div className="welcome-content">
                  <h6>Welcome to</h6>
                  <h4>Power Trac</h4>
                </div>
                <TextField
                  id="email-mobile"
                  label="Email / Mobile Number"
                  style={{ margin: 8 }}
                  placeholder="Enter Email / Mobile Number"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="password"
                  label="Password"
                  style={{ margin: 8 }}
                  placeholder="Enter Password"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <div className="forgot-link">
                  <a href="/forgot-password">Forgot Password?</a>
                </div>
                <div className="login-btn">
                  <Button block>Login</Button>
                </div>
                <div className="or-sec">
                  <span>OR</span>
                </div>
                <div className="afg-btn">
                  <Row>
                    <Col md={4}>
                      <div className="fb-btn">
                        <Button>
                          <i class="fab fa-facebook-f"></i>Facebook
                        </Button>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="g-btn">
                        <Button>
                          <i class="fab fa-google"></i>Google
                        </Button>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="a-btn">
                        <Button>
                          <i class="fab fa-apple"></i>Apple
                        </Button>
                      </div>
                    </Col>
                   </Row>                                  
                </div>
                <div className="signin-link">
                  <p>
                    Don't you have account ?<a href="/signup">SIGN UP</a>
                  </p>
                </div>
              </div>
              <div className="gas-station">
                <Image src={GasStation} />
                <div className="dots-right">
                  <Image src={Dots01} />
                </div>
              </div>
              <div className="dots-bottom">
                <Image src={Dots01} />
              </div>
            </Col>
            <Col md={8} sm={6}>
              <div className="login-right">
                <h5>Discover with</h5>
                <h3>Power Trac</h3>
                <div className="description-content">
                  <p>
                    Power Trac is always looking for unique products or items we
                    Can offer our customers. Please see guidelines for becoming
                    a vendor on our Power Trac is always looking for unique
                    products or items we Can offer our customers. Please see
                    guidelines for becoming a vendor on our
                  </p>
                </div>
              </div>
              <div className="dots-arrow">
                <Image src={DotsBlue} />
              </div>
              <div className="arrow">
                <Image src={Arrow} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
