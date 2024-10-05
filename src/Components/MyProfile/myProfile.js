import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ProfileImage from "../../assets/images/profileimg.png";
import GasStation from "../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../assets/images/dots01.png";
import DotsBlueOangeImg from "../../assets/images/dotsblueorange.png";

import "./profile.scss";
const MyProfile = () => {
  return (
    <>
    <div className="my-profile-section">
      <Container>
        <div className="my-profile-inner">
          <Row>
          <span className="justify-content-end text-right"><i className="fas fa-times"></i></span>
            <div className="profile-inner row">
            <Col md={3}>
              <div className="profile-image">
                <Image src={ProfileImage} />
              </div>
              <div className="share">
                <ul>
                  <li>
                    <span> Share :</span>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={9}>
              <div className="profile-right">
                <div className="profile-link">
                  <p>
                    <a href="/edit-profile">
                      <span>
                        <i class="fas fa-edit"></i>
                      </span>
                      Edit Profile
                    </a>
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <span> Name : </span> Amanda Lee
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <span>Email :</span> amanda@gmail.com
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <span> Birth : </span> 28 Feb 2000
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <span> Phone : </span> +1 252525
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <span> Address : </span> 801 N Brooks Brazoria Texas
                  </p>
                </div>
                <div className="about-me">
                  <h6>About me some :</h6>
                  <p>
                    I have been wanting to go out and get some spicy chicken
                    wings for a while… But with everything that is going on out
                    there, I haven’t gotten any wings for a long time.
                  </p>
                </div>
              </div>
            </Col>
            </div>
          </Row>
        </div>
        
        
      </Container>
    </div>
    <div className="bottom-profile"></div>
    </>
  );
};

export default MyProfile;
