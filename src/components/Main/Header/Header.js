import React from 'react';
import { Button, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Header.css'
import MyVerticallyCenteredModal from './Modal/MyVerticallyCenteredModal';

function Header(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="wrapper">
            <div className="container">
                <div className="headering">
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <ul className="menu">
                                    <li className="nav-list">
                                        <NavLink className="nav-link" to="/Events" exact>Мероприятия</NavLink>
                                    </li>
                                    <li className="nav-list">
                                        <NavLink className="nav-link" to="/Users" exact>Пользователи</NavLink>
                                    </li>
                                    <li className="nav-list dropdown">
                                        <NavDropdown title="Сведения о денежных средствах" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Приход</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Расход</NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown title="Отчёт" id="collasible-nav-dropdown" drop="right">
                                                <NavDropdown.Item href="#action/3.1">Приход по мероприятиям</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">Приход по мероприятиям</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Общий сведения по мероприятиям</NavDropdown.Item>
                                            </NavDropdown>
                                        </NavDropdown>
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* <div className="sign-in">
                        <>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                Войти
                            </Button>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </>
                    </div> */}
                    <div className="language">
                        <Form>
                            <Form.Group controlId="exampleForm.SelectCustom" className="form">
                                <Form.Label className="label" >Язык</Form.Label>
                                <Form.Control as="select" custom>
                                    <option>kg</option>
                                    <option>ru</option>
                                    <option>uz</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;