import React from 'react';
import '../assets/scss/layouts/Layout.scss';

function Layout({ children }) { 
    return (
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li className="tab"> <a href="/" >Home</a></li>
                        <li className="tab"> <a href="/projects">Projects</a></li>
                        <li className="tab"> <a href="/articles">Articles</a></li>
                        <li className="tab"> <a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer className="footer">
                <p>© Copyright @kitsuiwebster All Rights Reserved</p>
            </footer>
        </>
    );
}

export default Layout;
