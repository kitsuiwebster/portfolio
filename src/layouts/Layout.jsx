import React from 'react';
import '../assets/scss/layouts/Layout.scss';

function Layout({ children }) { 
    return (
        <>
            <div className="layout">
                <header className="layout-header">
                    <h1 className='layout-header-title'>@kitsuiwebster</h1>
                    <nav>
                        <ul>
                            <li className="tab"> <a href="/" >Home</a></li>
                            <li className="tab"> <a href="/projects">Projects</a></li>
                            <li className="tab"> <a href="/articles">Articles</a></li>
                            <li className="tab"> <a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                <main className='layout-main'>
                    {children}
                </main>

                <footer className="layout-footer">
                    <p>© Copyright @kitsuiwebster All Rights Reserved</p>
                </footer>
            </div>
        </>
    );
}

export default Layout;
