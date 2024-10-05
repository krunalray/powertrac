import React from 'react';
import './novelties-content.scss';
import { Row, Col, Image, Container, Card } from 'react-bootstrap';
import Select from 'react-select';
import Dotsimg from '../../../assets/images/dots01.png';
import Pizzaicon from '../../../assets/images/web-icon/Home-Page/pizza.svg';
import BurgerIcon from '../../../assets/images/web-icon/Home-Page/burger.svg';
import NoveltiesImg01 from '../../../assets/images/web-images/Novelties/noveltiesimg01.svg';
import NoveltiesImg02 from '../../../assets/images/web-images/Novelties/noveltiesimg02.svg';
import NoveltiesImg03 from '../../../assets/images/web-images/Novelties/noveltiesimg03.svg';
import NoveltiesImg04 from '../../../assets/images/web-images/Novelties/noveltiesimg04.svg';
import NoveltiesImg05 from '../../../assets/images/web-images/Novelties/noveltiesimg05.svg';
import NoveltiesImg06 from '../../../assets/images/web-images/Novelties/noveltiesimg06.svg';
import NoveltiesImg07 from '../../../assets/images/web-images/Novelties/noveltiesimg07.svg';
import NoveltiesImg08 from '../../../assets/images/web-images/Novelties/noveltiesimg08.svg';
import NoveltiesImg09 from '../../../assets/images/web-images/Novelties/noveltiesimg09.svg';

const NoveltiesContent = () => {
    const NoveltiesOption = [{ label: 'jull', value: 'jull' }];
    return (
        <div className="novelties-tab-section">
            <div className="novelties-title">
                <h6>Explore our</h6>
                <h3>Novelties</h3>
            </div>
            <div className="select-main">
                <Row className="justify-content-end">
                    <Col md={3} sm={12}>
                        <Select placeholder="Select " options={NoveltiesOption} />
                    </Col>
                </Row>
            </div>
            <div className="novelties-card-section">
                <Container>
                    <div className="novelties-bottom">
                        <Row>
                            <Col md={4} sm={6}>
                                <div className="novelties-card">
                                    <Card>
                                        <Card.Img variant="top" src={NoveltiesImg01} />
                                        <Card.Body>
                                            <Card.Title>Villa Puccini Pinot Grigio</Card.Title>
                                            <Card.Text>
                                                Instead of brown sugar and the sugarcane brandy Cachaça the Licor Beirão is used. Instead of brown
                                                sugar and the sugarcane brandy Cachaça the Licor Beirão is used.
                                            </Card.Text>
                                            <div className="breadcrumb-section">
                                                <ul>
                                                    <li>
                                                        <a href="#">Pork /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Veggie /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoyu</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="novelties-card">
                                    <Card>
                                        <Card.Img variant="top" src={NoveltiesImg02} />
                                        <Card.Body>
                                            <Card.Title>Indomita Reserva Pinot Noir</Card.Title>
                                            <Card.Text>Instead of brown sugar and the sugarcane brandy Cachaça the Licor Beirão is used.</Card.Text>
                                            <div className="breadcrumb-section">
                                                <ul>
                                                    <li>
                                                        <a href="#">Pork /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Veggie /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoyu</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="novelties-card">
                                    <Card>
                                        <Card.Img variant="top" src={NoveltiesImg03} />
                                        <Card.Body>
                                            <Card.Title>Indomita Reserva Pinot Noir</Card.Title>
                                            <Card.Text>Instead of brown sugar and the sugarcane brandy Cachaça the Licor Beirão is used.</Card.Text>
                                            <div className="breadcrumb-section">
                                                <ul>
                                                    <li>
                                                        <a href="#">Pork /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Veggie /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoyu</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="novelties-bottom">
                        <Row>
                            <Col md={4} sm={6}>
                                <div className="novelties-card">
                                    <Card>
                                        <Card.Img variant="top" src={NoveltiesImg04} />
                                        <Card.Body>
                                            <Card.Title>Licor Beirao</Card.Title>
                                            <Card.Text>
                                                Licor Beirão can be drunk fresh as a digestive, with dessert, on ice with the addition of an orange
                                            </Card.Text>
                                            <div className="breadcrumb-section">
                                                <ul>
                                                    <li>
                                                        <a href="#">Pork /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Veggie /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoyu</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="novelties-card">
                                    <Card>
                                        <Card.Img variant="top" src={NoveltiesImg05} />
                                        <Card.Body>
                                            <Card.Title>Taylor's Port</Card.Title>
                                            <Card.Text>Sample some of the best port in Lisbon – it's a cultural experience!</Card.Text>
                                            <div className="breadcrumb-section">
                                                <ul>
                                                    <li>
                                                        <a href="#">Pork /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Veggie /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoyu</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="novelties-card">
                                    <Card>
                                        <Card.Img variant="top" src={NoveltiesImg06} />
                                        <Card.Body>
                                            <Card.Title>Indomita Reserva Pinot Noir</Card.Title>
                                            <Card.Text>Instead of brown sugar and the sugarcane brandy Cachaça the Licor Beirão is used.</Card.Text>
                                            <div className="breadcrumb-section">
                                                <ul>
                                                    <li>
                                                        <a href="#">Pork /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Veggie /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoyu</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="novelties-bottom">
                        <Row>
                            <Col md={4} sm={6}>
                                <div className="novelties-card">
                                    <Card>
                                        <Card.Img variant="top" src={NoveltiesImg07} />
                                        <Card.Body>
                                            <Card.Title>Portugal, Porto</Card.Title>
                                            <Card.Text>
                                                The liqueur The delicate and well-known liqueur "Licor Beirão" is made in the area of Lousã. It is
                                                made by double distillation of selected plants and ...
                                            </Card.Text>
                                            <div className="breadcrumb-section">
                                                <ul>
                                                    <li>
                                                        <a href="#">Pork /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Veggie /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoyu</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="novelties-card">
                                    <Card>
                                        <Card.Img variant="top" src={NoveltiesImg08} />
                                        <Card.Body>
                                            <Card.Title>Port wine</Card.Title>
                                            <Card.Text>
                                                The liqueur The delicate and well-known liqueur "Licor Beirão" is made in the area of Lousã. It is
                                                made by double distillation of selected plants and ...
                                            </Card.Text>
                                            <div className="breadcrumb-section">
                                                <ul>
                                                    <li>
                                                        <a href="#">Pork /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Veggie /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoyu</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="novelties-card">
                                    <Card>
                                        <Card.Img variant="top" src={NoveltiesImg09} />
                                        <Card.Body>
                                            <Card.Title>Indomita Reserva Pinot Noir</Card.Title>
                                            <Card.Text>Instead of brown sugar and the sugarcane brandy Cachaça the Licor Beirão is used.</Card.Text>
                                            <div className="breadcrumb-section">
                                                <ul>
                                                    <li>
                                                        <a href="#">Pork /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Veggie /</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoyu</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NoveltiesContent;
