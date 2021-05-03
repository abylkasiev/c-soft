import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import fire from '../../../config/fire';
import './Header.css'
import kg from '../../../container/img/kg.png'

function Header() {

    const handleLogout = () => {
        fire.auth().signOut();
    };

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
                                            <NavDropdown.Item >
                                                <NavLink className="nav-link" to="/Сoming" exact>Приход</NavLink>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item >
                                                <NavLink className="nav-link" to="/Spending" exact>Расход</NavLink>
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown title="Отчёт" id="collasible-nav-dropdown" drop="right">
                                                <NavDropdown.Item >
                                                    <NavLink className="nav-link" to="/ArrivalOnEvents" exact>Приход по мероприятиям</NavLink>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item >
                                                    <NavLink className="nav-link" to="/ExpenseForEvents" exact>Расход по мероприятиям</NavLink>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item >
                                                    <NavLink className="nav-link" to="/GenInfOnEvents" exact>Общий сведения по мероприятиям</NavLink>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </NavDropdown>
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="language ml-5">
                        <form className="d-flex align-items-center justify-content-center">
                            <label className="mb-0 text-black-50 mr-1">Язык</label>
                            <select className="text-black-50">
                                <option value="kg" className="text-black-50">kg</option>
                                <option value="ru" className="text-black-50">ru</option>
                                <option value="uz" className="text-black-50">uz</option>
                            </select>
                        </form>
                    </div>
                    <div className="logout">
                        <button className="btn btn-danger" onClick={handleLogout}>Выйти</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;