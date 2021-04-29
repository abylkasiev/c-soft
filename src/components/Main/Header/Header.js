import React from 'react';
import { Button, Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Header.css'

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
                        <h6 className="language-title">Язык</h6>
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