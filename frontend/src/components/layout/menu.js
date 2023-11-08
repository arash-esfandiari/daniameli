import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className="menu-hasdropdown"><a>Foundry Equipment</a>
                        <ul className="menu-dropdown">
                            <li><Link to='/'>Induction Furnaces</Link></li>
                            <li><Link to='/'>Electric Arc Furnaces</Link></li>
                            <li><Link to='/'>Ladle Furnaces</Link></li>
                            <li><Link to='/'>CCM Lines</Link></li>
                            <li><Link to='/'>Sand Plants</Link></li>
                            <li><Link to='/'>Disa Lines</Link></li>
                            <li><Link to='/'>HWS Lines</Link></li>
                            <li><Link to='/'>Mixers</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Rolling Mill Lines</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/'}>Hot Rolling Mill</Link></li>
                            <li><Link to={'/'}>Cold Rolling Mill</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Industrial Equipment</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/'}>Industrial Equipment</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Raw Material</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/'}>Raw Material</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Electrical Equipment</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/about'}>Electromotors</Link></li>
                            <li><Link to={'/about'}>Drivers and Inverters</Link></li>
                            <li><Link to={'/about'}>Electropumps</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Parts </a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/about'}>Spare parts for all the above equipment</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>More</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/'}>Reference Standards (Chemical Reagents)</Link></li>
                            <li><Link to={'/'}>Food and Dairy Equipment</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>About Us</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/about'}>About Us</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

        )
    }
}