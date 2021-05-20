import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="section">
          <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Link to="/">
              <h1 className="title"><span className="title--primary">F</span><span className="title--secondary">M</span></h1>
            </Link>
            <nav className="nav">
              <ul className="menu">
                <li className="menu__item">
                  <Link to="/about">About</Link>
                </li>
                <li className="menu__item">
                  <a href="https://github.com/freddiemixell">Github</a>
                </li>
                <li className="menu__item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
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