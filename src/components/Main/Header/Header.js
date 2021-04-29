import React from 'react';
import { Button, Dropdown, DropdownButton, Form, NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Header.css'
import kg from '../../../container/img/kg.png'

function Header(props) {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="header">
                    <nav className="nav">
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
                    </nav>
                    <div className="language">
                        <Form>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>Язык</Form.Label>
                                <Form.Control as="select" custom>
                                    <option>kg</option>
                                    <option>ru</option>
                                    <option>uz</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="sign-in">
                        <Button>Sign in</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;