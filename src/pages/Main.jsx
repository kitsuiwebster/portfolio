import React from 'react';
import '../assets/scss/pages/Main.scss';
import { Link } from 'react-scroll';

function Main() {
    return (
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li className="tab"><Link className="nav-link" to="home" smooth={true} duration={500} offset={-50}>Accueil</Link></li>
                        <li className="tab"><Link className="nav-link" to="books" smooth={true} duration={500} offset={-50}>Livres</Link></li>
                        <li className="tab"><Link className="nav-link" to="bio" smooth={true} duration={500} offset={-50}>Bio</Link></li>
                        <li className="tab"><Link className="nav-link" to="contact" smooth={true} duration={500} offset={-50}>Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <h1 id="title">Raphaël MARTIN</h1>
            <p id="emoji">😎</p>

            <footer className="footer">
                <p>© Copyright @kitsuiwebster All Rights Reserved</p>
            </footer>
        </>
    );
}

export default Main;
