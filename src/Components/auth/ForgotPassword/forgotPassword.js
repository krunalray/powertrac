import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import GasStation from "../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../assets/images/dots01.png";
import DotsBlue from "../../../assets/images/blueorange.png";
import Arrow from "../../../assets/images/bottomright.png";
import "./forgot-password.scss";
const ForgotPassword = () => {
  return (
    <div className="forgotpassword-section">
      <div className="bg-bl-blue"></div>
      <div className="forgotpassword-inner">
        <Container>
          <Row>
            <Col md={4} sm={6}>
              <div className="forgotpassword-content">
                <div className="welcome-content">
                  <h6>Welcome to</h6>
                  <h4>Power Trac</h4>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  style={{ margin: 8 }}
                  placeholder="Enter Email"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <div className="forgotpassword-btn">
                  <Button block>Send</Button>
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
              <div className="forgotpassword-right">
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

export default ForgotPassword;
