import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="section">
          <div className="container">
              <div className="menu">
                <Link to="/">
                    <h1 className="title"><span className="title--primary">F</span><span className="title--secondary">M</span></h1>
                </Link>
                <nav className="nav">
                    <ul className="nav__wrapper">
                        <li className="nav__item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="nav__item">
                            <a href="https://github.com/freddiemixell">Github</a>
                        </li>
                        <li className="nav__item nav__item--primary">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
              </div>
          </div>
        </div>
    );
}

function Footer() {
 return (
     <div/>
 );
}

export default function Layout( props ) {
let { children } = props;

    return (
        <>
        <Header/>
            { children }
        <Footer/>
        </>
    );
}