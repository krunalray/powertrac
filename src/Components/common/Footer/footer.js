import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import './footer.scss';
import FooterLogo from '../../../assets/images/web-icon/Home-Page/footer-logo.svg';
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container-fluid">
                <div className="footer-inner row">
                    <div className="footer-left col-sm-5 ">
                        <div className="footer-logo m-auto">
                            <Image src={FooterLogo} />
                            <div className="wb-line">
                                <div className="blue-line"></div>
                            </div>
                            <div className="footer-links-left">
                                <ul>
                                    <li>
                                        <a>
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i class="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7 footer-right">
                        <div className="right-inner">
                            <Container>
                                <Row className="justify-content-end">
                                    <Col md={3} sm={4}>
                                        <h4>Information</h4>
                                        <ul>
                                            <li>
                                                <a>About Us</a>
                                            </li>
                                            <li>
                                                <a>Contact Us</a>
                                            </li>
                                            <li>
                                                <a>Categories</a>
                                            </li>
                                            <li>
                                                <a>Offers</a>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md={3} sm={4}>
                                        <h4>Helpful Links</h4>
                                        <ul>
                                            <li>
                                                <a>Services</a>
                                            </li>
                                            <li>
                                                <a>Supports</a>
                                            </li>
                                            <li>
                                                <a>Terms & Condition</a>
                                            </li>
                                            <li>
                                                <a>Privacy</a>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md={3} sm={4}>
                                        <h4>Job Application</h4>
                                        <ul>
                                            <li>
                                                <a>Apply for Job</a>
                                            </li>
                                            <li>
                                                <a>Inquiry</a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                                <div className="row d-none d-lg-block">
                                    <Col md={12} sm={12}>
                                        <div className="ag-link">
                                            <p>
                                                For even better experience
                                                <span>
                                                    <a>
                                                        <i class="fab fa-google-play"></i>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a>
                                                        <i class="fab fa-apple"></i>
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
                                    </Col>
                                </div>
                            </Container>
                            <div className="row d-block d-lg-none">
                                <Col md={12} sm={12}>
                                    <div className="ag-link">
                                        <p>
                                            For even better experience
                                            <span>
                                                <a>
                                                    <i class="fab fa-google-play"></i>
                                                </a>
                                            </span>
                                            <span>
                                                <a>
                                                    <i class="fab fa-apple"></i>
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
