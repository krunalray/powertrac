import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Input from "@material-ui/core/Input";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import GasStation from "../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../assets/images/dots01.png";
import { useDropzone } from "react-dropzone";
import { FormLabel } from "@material-ui/core";
import Switch from "react-switch";
import "./jobs-form5.scss";
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
const JobsForm5 = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

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
        <div className="jobs-form5-section">
          <Container>
            <div className="jobs-form5-inner">
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
                    Do not answer the following question if your state prohibits
                    such disclosure
                  </p>
                </div>
                <div className="record">
                  <p>
                    A record or conviction does not necessarily disqualify you
                    from employment consideration.
                  </p>
                </div>
                <div className="box-main">
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h5>
                          Have you ever been convicted of a felony or
                          misdemeanor, other than minor traffic violations?
                        </h5>
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
                                  fontSize: 12,
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
                                  fontSize: 11,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <h6>YES Describe in full</h6>
                    <Input placeholder="Enter Here" />
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h5>
                          Only those U.S. Citizens or aliens who have a legal
                          right to work in the United States are eligible of
                          employment. Can you, upon employment, submit
                          documentation verifying your legal right to work in
                          the United States and your identity?{" "}
                        </h5>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                <div className="emergency-title">
                  <p>In case of emergency, notify the following person</p>
                </div>
                <div className="box-main second-box">
                  <div className="form-sec">
                    <Row>
                      <Col md={4}>
                        <h6>Name</h6>
                        <Input placeholder="Enter Name" />
                      </Col>
                      <Col md={4}>
                        <h6>Phone</h6>
                        <Input placeholder="Enter Number" />
                      </Col>
                      <Col md={4}>
                        <h6>Relationship</h6>
                        <Input placeholder="Enter Relationship" />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={12}>
                        <h6>
                          Describe any other experiences, or qualifications
                          which you feel would especially fit you for work with
                          the company?
                        </h6>
                        <Input placeholder="Enter Describe" />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="signature-date">
                  <Row>
                    <Col md={6} sm={6}>
                      <div className="signature">
                        <FormLabel>Signature</FormLabel>
                        <section className="container">
                          <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            <span>
                              <i class="fas fa-plus-circle"></i> Add Photo
                            </span>
                          </div>
                          <aside style={thumbsContainer}>{thumbs}</aside>
                        </section>
                      </div>
                    </Col>
                    <Col md={6} sm={6}>
                      <div className="date">
                        <TextField
                          id="date"
                          label="Date"
                          type="date"
                          defaultValue="2017-05-24"
                          className="date-main"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="print-name">
                  <Row>
                    <Col md={4}>
                      <p>Print Name</p>
                      <Input name="printname" />
                    </Col>
                  </Row>
                </div>
                <div className="emergency-title">
                  <p>Select store you are willing to apply</p>
                </div>
                <div className="box-main ">
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#1</span> 470 Bessie Rd, Piedmont, Sac 29673
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#2</span> 16 N. Greenwood Avenue Ext, Ware
                          Shoals, SC 29692
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#3</span>9303 Long Creek Highway, Westminster,
                          SC 29693
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#4</span> 3109 West Oak Highway, Westminster,
                          SC 29693
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#5</span> 3301 Highway 88, Central, SC 29630
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#8</span> 2560 N. Pleasantburg Dr. Greenville,
                          SC 29609
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#9</span> 2800 Highway 29 South, Anderson, SC
                          29626
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#10</span> 704 Whitehall Road, Anderson, SC
                          29625
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#11</span> 450 Church St. Honea Path, SC 29654
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#12</span> 1120 Wren School Road, Piedmont, SC
                          29673
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10}>
                        <h6>
                          <span>Pt#13</span> 1701 Pearman Dairy Rd, Anderson, SC
                          29625
                        </h6>
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                                  fontSize: 12,
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
                <div className="thank-you">
                  <p>
                    Thank you, for completing this application form and <br />
                    for your interest in our business.
                  </p>
                </div>
                <div className="next-btn">
                  <Button>Submit</Button>
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
      <div className="bottom-footer-section">
        <div className="bottom-footer-inner"></div>
      </div>
    </>
  );
};

export default JobsForm5;
