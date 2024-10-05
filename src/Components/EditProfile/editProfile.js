import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import ProfileImage from "../../assets/images/profileimg.png";
import GasStation from "../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../assets/images/dots01.png";
import DotsBlueOangeImg from "../../assets/images/dotsblueorange.png";
import Input from "@material-ui/core/Input";
import "./edit-profile.scss";
const EditProfile = () => {
  return (
    <>
    <div className="edit-profile-section">
      <Container>
        <div className="edit-profile-inner">
          <Row>
            <Col md={3}>
              <div className="profile-image">
                <Image src={ProfileImage} />
                <div className="image-pick">
                  <i class="fas fa-camera"></i>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <div className="profile-right">
                <div className="profile-form">
                  <Row>
                    <Col md={6}>
                      <h6>Name</h6>
                      <Input
                        placeholder="Enter Name"
                        defaultValue="Amanda Lee"
                      />
                    </Col>
                    <Col md={6}>
                      <h6>Email</h6>
                      <Input
                        placeholder="Enter Email"
                        defaultValue="amanda@gmail.com"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="profile-form">
                  <Row>
                    <Col md={6}>
                      <h6>Birth</h6>
                      <Input
                        placeholder="Enter Birth"
                        defaultValue="28 Feb 2000"
                      />
                    </Col>
                    <Col md={6}>
                      <h6>Phone</h6>
                      <Input
                        placeholder="Enter Phone"
                        defaultValue="+1 252525"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="profile-form">
                  <Row>
                    <Col md={6}>
                      <h6>Address</h6>
                      <Input
                        placeholder="Enter Address"
                        defaultValue="801 N Brooks Brazoria Texas"
                      />
                    </Col>
                    <Col md={6}>
                      <h6>About me some</h6>
                      <Input
                        placeholder="Enter About me some"
                        defaultValue="I have been wanting to go out and get some spicy 
                        chicken wings for a while… But with everything that is 
                        going on out there, I haven’t gotten any wings "
                      />
                    </Col>
                  </Row>
                </div>
                <div className="social">
                  <h5>Social share</h5>
                  <div className="profile-form">
                    <Row>
                      <Col md={6}>
                        <h6>Facebook</h6>
                        <Input
                          placeholder="Enter Facebook"
                          defaultValue="Amanda lee"
                        />
                      </Col>
                      <Col md={6}>
                        <h6>Twitter</h6>
                        <Input
                          placeholder="Enter Twitter"
                          defaultValue="@amanda12"
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="profile-form">
                    <Row>
                      <Col md={6}>
                        <h6>Pinterest</h6>
                        <Input
                          placeholder="Enter Pinterest"
                          defaultValue="Amanda12"
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="save-btn">
                  <Button>Save Profile</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
       
      </Container>
    </div>
    <div className="bottom-edit"></div>
  </>  
  );
};

export default EditProfile;
