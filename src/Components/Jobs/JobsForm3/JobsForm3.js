import React,{useEffect} from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Input from "@material-ui/core/Input";
import "react-datepicker/dist/react-datepicker.css";
import GasStation from "../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../assets/images/dots01.png";
import { useHistory } from "react-router-dom";

import "./jobs-form3.scss";
const JobsForm3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
});
  const history = useHistory();

  return (
    <>
      <div>
        <div className="jobs-form3-section">
          <Container>
            <div className="jobs-form3-inner">
              <div className="title-form">
                <h3>Power Trac</h3>
              </div>
              <div className="form-content">
                <div className="application-name">
                  <h4>Application for Employment</h4>
                  <p>
                    Please complete all requested information except Signature.
                  </p>
                </div>
                <div className="declaration-information">
                  <p>
                    If you did not graduate from High School, circle the last
                    year completed in school. 7 8 9 10 11
                  </p>
                </div>

                <div className="box-main">
                  <div className="form-sec">
                    <Row>
                      <Col md={4}>
                        <h6>High School</h6>
                        <Input placeholder="School name" />
                      </Col>
                      <Col md={4}>
                        <h6>Location(complete Address)</h6>
                        <Input placeholder="School Location" />
                      </Col>
                      <Col md={4}>
                        <h6>Major and Degree</h6>
                        <Input placeholder="Enter Major/degree" />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={4}>
                        <h6>College</h6>
                        <Input placeholder="College name" />
                      </Col>
                      <Col md={4}>
                        <h6>Location(complete Address)</h6>
                        <Input placeholder="College Location" />
                      </Col>
                      <Col md={4}>
                        <h6>Major and Degree</h6>
                        <Input placeholder="Enter Major/degree" />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={4}>
                        <h6>Other</h6>
                        <Input placeholder="Other name" />
                      </Col>
                      <Col md={4}>
                        <h6>Location(complete Address)</h6>
                        <Input placeholder="Other Location" />
                      </Col>
                      <Col md={4}>
                        <h6>Major and Degree</h6>
                        <Input placeholder="Enter Major/degree" />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="next-btn">
                  <Button onClick={() => history.push("/jobs-form4")}>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </Container>
          <div className="gas-station">
            <Image src={GasStation} />
            <div className="dots-right">
              <Image src={Dots01} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom3-footer-section">
        <div className="bottom3-footer-inner"></div>
      </div>
    </>
  );
};

export default JobsForm3;
