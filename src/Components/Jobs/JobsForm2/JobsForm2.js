import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import GasStation from "../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../assets/images/dots01.png";
import { useDropzone } from "react-dropzone";
import "./jobs-form2.scss";
import { FormLabel } from "@material-ui/core";
import Switch from "react-switch";
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
const JobsForm2 = () => {
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
  const positionOptions = [
    { value: "Employee", label: "Employee" },
    { value: "HR", label: "HR" },
  ];
  const workTimeOptions = [
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "11:00 AM", label: "11:00 AM" },
  ];
  return (
    <>
      <div>
        <div className="jobs-form2-section">
          <Container>
            <div className="jobs-form2-inner">
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
                  <h6>Declaration And Authorization To Release Information</h6>
                  <h5>
                    Please Read This Statement Carefully Before You Complete
                    This Application
                  </h5>
                  <p>
                    The company in considering my application for employment or
                    any subsequent changes such as but not limited to promotion
                    or transfer may verify the information set forth on this
                    application and obtain additional information relating to my
                    background. I authorize all persons, schools, companies,
                    corporations, credit bureaus, and government agencies to
                    supply any information concerning my background which may
                    include, but not limited to criminal, credit and driver’s
                    license, provided state law permits and where such inquiries
                    are job related.
                  </p>
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
                  <p>Print Name</p>
                  <div className="selected">
                    <Input placeholder="Enter Print Name" />
                  </div>
                </div>
                <div className="box-main">
                  <div className="form-sec">
                    <Row>
                      <Col md={4}>
                        <h6>Position for which you are applying</h6>
                          <Select
                            placeholder="Select Position"
                            options={positionOptions}
                          />                       
                      </Col>
                      <Col md={4}>
                        <h6>Do you want to work</h6>
                        <div className="selected">

                        <Select
                          placeholder="Select Work Time"
                          options={workTimeOptions}
                        />
                        </div>
                      </Col>
                      <Col md={4}>
                        <h6>Rate of Pay expected</h6>
                        <div className="selected">
                            <Input placeholder="Enter Pay" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={4}>
                        <h6>Date Available</h6>
                        <TextField
                          id="date"
                          // label="Date Available"
                          type="date"
                          defaultValue="2017-05-24"
                          className="date-av"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={10} sm={10}>
                        <h5>
                          Our stores operate seven days a week from 6:00 AM to
                          11:59 PM. Are you willing to work any day, shift or
                          hours assigned by your supervisor/manager?
                        </h5>
                      </Col>
                      <Col md={2} sm={2}>
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
                  <div className="form-sec">
                    <h6>What times/day are you unable to work? </h6>
                    <Input placeholder="Enter Here" />
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={10} sm={10}>
                        <h5>Will you work overtime if directed to do so?</h5>
                      </Col>
                      <Col md={2} sm={2}>
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10} sm={10}>
                        <h5>Have you worked for us before?</h5>
                      </Col>
                      <Col md={2} sm={2}>
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10} sm={10}>
                        <h5>
                          Do you have friends or relatives working for us?{" "}
                        </h5>
                      </Col>
                      <Col md={2} sm={2}>
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
                  <div className="form-sec">
                    <h6>List names(s) and position </h6>
                    <Input placeholder="Enter Here" />
                  </div>
                  <div className="form-sec">
                    <Row>
                      <Col md={10} sm={10}>
                        <h5>
                          Do you have a reliable means of transportation to get
                          to work?
                        </h5>
                      </Col>
                      <Col md={2} sm={2}>
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10} sm={10}>
                        <h5>
                          Will Your car stay at work while you are working?
                        </h5>
                      </Col>
                      <Col md={2} sm={2}>
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
                <div className="box-main second-box">
                  <div className="form-sec">
                    <Row>
                      <Col md={10} sm={10}>
                        <h5>
                          Are you over the minimum age for selling alcoholic
                          beverages in this state?
                        </h5>
                      </Col>
                      <Col md={2} sm={2}>
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
                  <div className="form-sec">
                    <Row>
                      <Col md={10} sm={10}>
                        <h5>
                          As a part of your routine duties, you may have to lift
                          as much as 50 pounds, stand for extended periods of
                          time, and work in a cold environment (stocking cooler)
                          for a short period of time. Can you perform these
                          physical requirements with or without reasonable
                          accommodation?
                        </h5>
                      </Col>
                      <Col md={2} sm={2}>
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
                  <div className="form-sec">
                    <h6>Please explain the accommodation</h6>
                    <Input placeholder="Enter Here" />
                  </div>
                </div>
                <div className="next-btn">
                  <Button onClick={() => history.push("/jobs-form3")}>
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
      <div className="bottom2-footer-section">
        <div className="bottom2-footer-inner"></div>
      </div>
    </>
  );
};

export default JobsForm2;
