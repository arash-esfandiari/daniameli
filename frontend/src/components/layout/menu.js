import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className="menu-hasdropdown"><a>Home</a>
                        <ul className="menu-dropdown">
                            <li><Link to='/'>Homepage 1</Link></li>
                            <li><Link to='/home2'>Homepage 2</Link></li>
                            <li><Link to={'/home3'}>Homepage 3</Link></li>
                            <li className="menu-hasdropdown menu-hasflyout">
                                <a>header styles</a>
                                <ul className="menu-dropdown">
                                    <li><Link to={'/'}>Header Style 01</Link></li>
                                    <li><Link target="_blank" to={'/Header_style_02'}>Header Style 02</Link></li>
                                    <li><Link target="_blank" to={'/Header_style_03'}>Header Style 03</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>pages</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/aboutus_01'}>About Us 1</Link></li>
                            <li><Link to={'/aboutus_02'}>About Us 2</Link></li>
                            <li><Link to={'/Services_01'}>Services 1</Link></li>
                            <li><Link to={'/Services_02'}>Services 2</Link></li>
                            <li><Link to={'/Our_expert'}>Our Expert</Link></li>
                            <li><Link to={'/Faq'}>FAQs</Link></li>
                            <li><Link to={'/Contact_01'}>Contact Us 1</Link></li>
                            <li><Link to={'/Contact_02'}>Contact Us 2</Link></li>
                            <li><Link to={'/Error'}>Error Page</Link></li>
                            <li><Link to={'/Element'}>Elements</Link></li>
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
                    <li className="menu-hasdropdown"><a>Project</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/project_style1'}>Project Style 1</Link></li>
                            <li><Link to={'/project_style2'}>Project Style 2</Link></li>
                            <li className="menu-hasdropdown menu-hasflyout">
                                <a to={process.env.PUBLIC_URL + '/single_style1'}>Project Single</a>
                                <ul className="menu-dropdown">
                                    <li><Link to={'/single_style1'}>Single Style 1</Link></li>
                                    <li><Link to={'/single_style2'}>Single Style 2</Link></li>
                                    <li><Link to={'/single_style3'}>Single Style 3</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Blog</a>
                        <ul className="menu-dropdown">
                            <li><Link to={'/blog'}>Blog Classic</Link></li>
                            <li><Link to={'/blog_grid'}>Blog Grid View</Link></li>
                            <li><Link to={'/blog_top_image'}>Blog Top Image</Link></li>
                            <li><Link to={'/blog_left_image'}>Blog Left Image</Link></li>
                            <li><Link to={'/single_blog'}>Blog Single View</Link></li>
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