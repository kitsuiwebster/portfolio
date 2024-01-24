import '../assets/scss/pages/NotFound.scss';

function NotFound() {
    return(
        <div id="error">
            <div className='error'>
                <div className='error-container'>
                    <p className="error-container-404">404</p>
                    <p className="error-container-message">Oops! The page you're looking for doesn't exist. 😵</p>
                    <a href="./">
                            <button className="error-container-gohome">Retourner à l'accueil</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NotFound