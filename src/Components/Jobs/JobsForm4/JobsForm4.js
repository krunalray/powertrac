import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Input from "@material-ui/core/Input";
import "react-datepicker/dist/react-datepicker.css";
import GasStation from "../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../assets/images/dots01.png";
import Switch from "react-switch";
import { useDropzone } from "react-dropzone";
import "./jobs-form4.scss";
import { useHistory } from "react-router-dom";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
const JobsForm4 = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const history = useHistory();

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  return (
    <>
      <div>
        <div className="jobs-form4-section">
          <Container>
            <div className="jobs-form4-inner">
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
                <div className="signature-date">
                  <Row className="align-items-center">
                    <Col md={9}>
                      <p>
                        Please list your last three jobs, beginning with your
                        present or last job
                      </p>
                    </Col>
                    <Col md={3}>
                      <div className="signature">
                        <Button>
                            <span>
                              <i class="fas fa-plus-circle"></i> Add more
                            </span>
                        </Button> 
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="box-main">
                  <div className="form-sec">
                    <Row>
                      <Col md={4}>
                        <h6>Company Name (Period of employment)</h6>
                        <Input placeholder="Company name" />
                      </Col>
                      <Col md={4}>
                        <h6>Phone</h6>
                        <div className="maintopfirst">
                            <Input placeholder="Phone number" />
                        </div>
                      </Col>
                      <Col md={4}>
                        <h6>Name of Supervisor</h6>
                        <div className="maintopfirst">
                        <Input placeholder="Enter name" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={4}>
                        <h6>Employment (Month and Year)</h6>
                        <Input placeholder="Duration date" />
                      </Col>
                      <Col md={4}>
                        <h6>Rate of Pay</h6>
                        <div className="maintop">
                          <Input placeholder="Pay" />
                        </div>
                      </Col>
                      <Col md={4}>
                        <h6>Date</h6>
                        <div className="maintop">
                          <Input placeholder="Duration date" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={6}>
                        <h6>Address</h6>
                        <Input placeholder="Enter Address" />
                      </Col>
                      <Col md={6}>
                        <h6>Home Address during time of employment</h6>
                        <Input placeholder="Enter Address" />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={12}>
                        <h6>Reason For Leaving</h6>
                        <Input placeholder="Enter Describe" />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={12}>
                        <h6>Position Held</h6>
                        <Input placeholder="Enter Position Held" />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h5>Can we contact this employer?</h5>
                      </Col>
                      <Col md={2}>
                        <div className="switch-main">
                          <Switch
                            onChange={handleChange}
                            checked={checked}
                            className="react-switch"
                            offColor="#5D8EFE"
                            onColor="#E1F2F8"
                            offHandleColor="#E1F2F8"
                            onHandleColor="#5D8EFE"
                            uncheckedIcon={
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "100%",
                                  fontSize: 15,
                                  color: "#ffffff",
                                  backgroundColor: "#5D8EFE",
                                  paddingRight: 2,
                                  borderRadius: "30px",
                                  paddingTop: "2px",
                                  textAlign: "center",
                                }}
                              >
                                No
                              </div>
                            }
                            checkedIcon={
                              <div
                                style={{
                                  height: "100%",
                                  fontSize: 15,
                                  color: "#000000",
                                  backgroundColor: "#E1F2F8",
                                  paddingRight: 2,
                                  borderRadius: "30px",
                                  paddingTop: "3px",
                                  textAlign: "center",
                                }}
                              >
                                Yes
                              </div>
                            }
                            uncheckedHandleIcon={
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "100%",
                                  fontSize: 15,
                                  color: "#000000",
                                  backgroundColor: "#E1F2F8",
                                  borderRadius: "30px",
                                }}
                              >
                                Yes
                              </div>
                            }
                            checkedHandleIcon={
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "100%",
                                  color: "#ffffff",
                                  fontSize: 15,
                                }}
                              >
                                No
                              </div>
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                
                <div className="next-btn">
                  <Button onClick={() => history.push("/jobs-form5")}>
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
      <div className="bottom4-footer-section">
            <div className="bottom4-footer-inner"></div>
      </div>
    </>
  );
};

export default JobsForm4;
