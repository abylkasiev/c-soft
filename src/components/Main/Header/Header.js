import React from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
        <div className="top">
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
                                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" exact>Сведения о денежных средствах</NavLink>
                                <DropdownButton id="dropdown-basic-button" title="Сведения о денежных средствах">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </li>
                        </ul>
                    </nav>
                    <div className="language">
                        <h6 className="language-title text-light">Язык</h6>
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