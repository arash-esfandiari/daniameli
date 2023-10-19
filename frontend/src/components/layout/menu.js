import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className="menu-hasdropdown"><a>Home</a>
                        <ul className="menu-dropdown">
                            <li><Link to='/'>Homepage</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>pages</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/aboutus_01'}>About Us</Link></li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>services</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/it_consultancy'}>IT Consultancy</Link></li>
                            <li><Link to={'/digital_services'}>Digital Services</Link></li>
                            <li><Link to={'/advisory_services'}>Advisory Services</Link></li>
                            <li><Link to={'/data_structuring'}>Data Structuring</Link></li>
                            <li><Link to={'/experience_design'}>Experience Design</Link></li>
                            <li><Link to={'/content_engineering'}>Content Engineering</Link></li>
                        </ul>
                    </li>

                    <li className="menu-hasdropdown"><a>Shop</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/Shop'}>Default Shop</Link></li>
                            <li><Link to={'/Product_details'}>Single Product Details</Link></li>
                            <li><Link to={'/Cart'}>Cart</Link></li>
                            <li><Link to={'/Checkout'}>Checkout</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

        )
    }
}