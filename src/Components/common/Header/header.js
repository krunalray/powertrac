import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Image, Row, Col, Container } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import Cartimg from '../../../assets/images/cart.png';
import Profileimg from '../../../assets/images/profile.png';
import './header.scss';
import CartImg01 from '../../../assets/images/web-images/My-Cart/cart02.svg';
import CartImg02 from '../../../assets/images/web-images/My-Cart/cart1.svg';
import CartImg03 from '../../../assets/images/web-images/My-Cart/cart3.svg';
import Logoimg from '../../../assets/images/logo-img.png';
import BlueOangeImg from '../../../assets/images/blueorange.png';
import ModalComponent from '../Modal/modal';
// import Radium, { StyleRoot } from 'radium';

const Header = () => {
    const history = useHistory();
    const [openToggle, setOpenToggel] = useState(false);
    const [guestLogin, setGuestLogin] = useState(false);
    const [cart, setCart] = useState(false);

    const handleGuestLoginShow = () => {
        setGuestLogin(true);
        handleCartClose();
    };
    const handleGuestLoginClose = () => {
        setGuestLogin(false);
    };

    const handleCartShow = () => setCart(true);
    const handleCartClose = () => setCart(false);

    // const backgroundStyle = {
    //     '@media (max-width: 962px)': {
    //         display: 'none',
    //     },
    // };
    // const style = {
    //     backgroundColor: '#ef4323',
    //     '@media (max-width: 962px)': { backgroundColor: openToggle ? '#19227d' : 'transparent' },
    // };
    // const mediaMatch = window.matchMedia('(max-width: 962px) and (max-width: 320px)');
    // const [matches, setMatches] = useState(mediaMatch.matches);
    // useEffect(() => {
    //     const handler = (e) => setMatches(e.matches);
    //     mediaMatch.addListener(handler);
    //     return () => mediaMatch.removeListener(handler);
    // });
    // const styles = {
    //     container: (openToggle) => ({
    //         backgroundColor: openToggle ? '#19227d' : '#ef4323',
    //     }),
    // };
    const ModalBody = () => {
        return (
            <div className="guest-login-section">
                <div className="guest-login-inner">
                    <h6>Join with</h6>
                    <h4>Guest Login</h4>
                    <TextField
                        id="fullName"
                        label="Full Name"
                        style={{ margin: 8 }}
                        placeholder="Enter Full Name"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="number"
                        label="Number"
                        style={{ margin: 8 }}
                        placeholder="Enter number"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="email"
                        label="E-mail"
                        style={{ margin: 8 }}
                        placeholder="Enter E-mail"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="arrivaltime"
                        label="Arrival Time"
                        style={{ margin: 8 }}
                        placeholder="Enter Time"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <div className="login-btn">
                        <Button block>Login</Button>
                    </div>
                    <div className="signin-link">
                        <p>
                            Already you have account ?<a href="/login"> LOGIN</a>
                        </p>
                    </div>
                </div>
                <span className="model-close-icon" onClick={handleGuestLoginClose}>
                    <i className="fas fa-times"></i>
                </span>
            </div>
        );
    };

    const ModalCartBody = () => {
        return (
            <div className="cart-open">
                <div className="cart-section">
                    <div className="cart-inner">
                        <div className="cart-title">My Cart</div>
                        <div className="cart-box">
                            <Container>
                                <Row>
                                    <Col md={3} sm={3} xs={3}>
                                        <div className="cart-img">
                                            <Image src={CartImg01} />
                                        </div>
                                    </Col>
                                    <Col md={7} sm={7} xs={7}>
                                        <div className="cart-description">
                                            <h5>New Cabernet Sauvignon</h5>
                                            <div className="price">$ 60.00</div>
                                        </div>
                                    </Col>
                                    <Col md={2} sm={2} xs={2}>
                                        <div className="add-items">
                                            <div className="addding">
                                                <Button className="plus">
                                                    <i class="fas fa-plus"></i>
                                                </Button>
                                                <div className="numbers">2</div>
                                                <Button className="minus">
                                                    <i class="fas fa-minus"></i>
                                                </Button>
                                            </div>
                                            <Button className="close">
                                                <i class="fas fa-times"></i>
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="cart-box">
                            <Container>
                                <Row>
                                    <Col md={3} sm={3} xs={3}>
                                        <div className="cart-img">
                                            <Image src={CartImg02} />
                                        </div>
                                    </Col>
                                    <Col md={7} sm={7} xs={7}>
                                        <div className="cart-description">
                                            <h5>New Cabernet Sauvignon</h5>
                                            <div className="price">$ 60.00</div>
                                        </div>
                                    </Col>
                                    <Col md={2} sm={2} xs={2}>
                                        <div className="add-items">
                                            <div className="addding">
                                                <Button className="plus">
                                                    <i class="fas fa-plus"></i>
                                                </Button>
                                                <div className="numbers">2</div>
                                                <Button className="minus">
                                                    <i class="fas fa-minus"></i>
                                                </Button>
                                            </div>
                                            <Button className="close">
                                                <i class="fas fa-times"></i>
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="cart-box">
                            <Container>
                                <Row>
                                    <Col md={3} sm={3} xs={3}>
                                        <div className="cart-img">
                                            <Image src={CartImg03} />
                                        </div>
                                    </Col>
                                    <Col md={7} sm={7} xs={7}>
                                        <div className="cart-description">
                                            <h5>New Cabernet Sauvignon</h5>
                                            <div className="price">$ 60.00</div>
                                        </div>
                                    </Col>
                                    <Col md={2} sm={2} xs={2}>
                                        <div className="add-items">
                                            <div className="addding">
                                                <Button className="plus">
                                                    <i class="fas fa-plus"></i>
                                                </Button>
                                                <div className="numbers">2</div>
                                                <Button className="minus">
                                                    <i class="fas fa-minus"></i>
                                                </Button>
                                            </div>
                                            <Button className="close">
                                                <i class="fas fa-times"></i>
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="order-total">
                            <div className="order-title">Order Total</div>
                            <div className="order-price">$ 115.00</div>
                        </div>
                        <div className="continue-btn">
                            <Button block onClick={() => handleGuestLoginShow()}>
                                Continue
                            </Button>
                        </div>
                    </div>
                    <span className="model-close-icon" onClick={handleCartClose}>
                        <i className="fas fa-times"></i>
                    </span>
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="header-section">
                <div className="bg-blue"></div>

                <div className="header-inner">
                    <Navbar expand="md" style={{ backgroundColor: openToggle ? '#19227d' : '#19227d' }}>
                        <span className="navbar-brand px-3">
                            <div className="logos">
                                <div className="logo-img">
                                    <Image src={Logoimg} onClick={() => history.push('/')} />
                                </div>
                            </div>
                        </span>
                        {/* <div> */}
                        <div className="header-cart">
                            <Image src={Cartimg} onClick={() => handleCartShow()} />
                        </div>
                        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                        {!openToggle ? (
                            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setOpenToggel(true)}>
                                <i class="fas fa-bars"></i>
                            </Navbar.Toggle>
                        ) : (
                            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setOpenToggel(false)}>
                                <i class="fas fa-times"></i>
                            </Navbar.Toggle>
                        )}
                        {/* id="responsive-navbar-nav" */}
                        <Navbar.Collapse id="basic-navbar-nav" className="responsive-toggler">
                            <Nav>
                                <Nav.Link href="/food-menu" className="link-active">
                                    Food Menu
                                </Nav.Link>
                                <Nav.Link href="/location" className="link-active">
                                    Locations
                                </Nav.Link>
                                <Nav.Link href="/novelties" className="link-active">
                                    Novelties
                                </Nav.Link>
                                <Nav.Link href="/liquor-stores" className="link-active">
                                    Liquor Stores
                                </Nav.Link>
                                <Nav.Link href={'/about-us'} className="link-active">
                                    About us
                                </Nav.Link>
                                <Nav.Link href="/jobs-form1" className="link-active">
                                    Jobs
                                </Nav.Link>
                                <ul className="list-unstyled list-group list-group-horizontal header-action">
                                    <li className="cart-open nav-link d-none d-lg-block d-md-block">
                                        <Image src={Cartimg} onClick={() => handleCartShow()} />
                                    </li>
                                    <li className="bg-color nav-link">
                                        <Image src={Profileimg} onClick={() => history.push('/my-profile')} />
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                        {/* </div> */}
                    </Navbar>
                </div>
            </div>
            <ModalComponent isShow={guestLogin} onClose={handleGuestLoginClose} className="guest-login" size="md">
                <ModalBody />
            </ModalComponent>
            {/* cart */}
            <ModalComponent isShow={cart} onClose={handleCartClose} className="guest-login" size="md">
                <ModalCartBody />
            </ModalComponent>
        </>
    );
};

export default Header;
