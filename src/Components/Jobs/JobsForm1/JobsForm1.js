import React, { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import GasStation from "../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../assets/images/dots01.png";
import "./jobs-form.scss";
import { useHistory } from "react-router-dom";

const JobsForm1 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const history = useHistory();
  
  return (
    <>
      <div className="jobs-form1-section">
        <Container>
          <div className="jobs-form1-inner">
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
              <div className="employer-date">
                <Row>
                    <Col md={10}>
                    <div className="employer">
                        <p>Power Trac is An Equal Opportunity Employer.</p>
                    </div>
                    </Col>
                    <Col md={2}>
                    <div className="date-select">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="dd/mm/yyyy"
                      />
                    </div>
                    </Col>
                </Row>
              </div>
              <div className="box-main">
                <div>
                  <Row>
                    <Col md={6} sm={12}>
                      <TextField
                        id="fullname"
                        label="Full Name"
                        // style={{ margin: 8 }}
                        placeholder="Enter Full Name"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Col>
                    <Col md={6} sm={12}>
                      <TextField
                        id="date"
                        label="Date Of Birth"
                        type="date"
                        fullWidth
                        placeholder="Select Date"
                        // defaultValue="2017-05-24"
                        className=""
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col md={6}>
                      <TextField
                        id="presentaddress"
                        label="Present Address (Include City, State, and Zip Code)(Enter number of years at below address?)"
                        // style={{ margin: 8 }}
                        placeholder="Enter Address"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        className=""
                      />
                    </Col>
                    <Col md={6}>
                      <TextField
                        id="previousaddress"
                        label="Previous Address(Enter number of years at below address?)"
                        // style={{ margin: 8 }}
                        placeholder="Enter Address"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col md={6}>
                      <TextField
                        id="phonenumber"
                        label="Phone Number(Area Code)"
                        style={{ margin: 8 }}
                        placeholder="Enter PhoneNumber"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="next-btn">
                <Button onClick={() => history.push("/jobs-form2")}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Container>
        
      </div>
      <div className="bottom-footer1-section">
        <div className="bottom-footer1-inner"></div>
      </div>
    </>
  );
};

export default JobsForm1;
