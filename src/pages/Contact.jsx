import '../assets/scss/pages/Contact.scss';
import '../assets/scss/index.scss'
import { useTheme } from '../ThemeContext';

function copyDiscordUsername() {
    navigator.clipboard.writeText('kitsuiwebster').then(() => {
        const copiedMessage = document.createElement('div');
        copiedMessage.id = 'copiedMessage';
        copiedMessage.innerText = 'Copied to clipboard!';
        document.body.appendChild(copiedMessage);
        setTimeout(() => {
            document.body.removeChild(copiedMessage);
        }, 3000);
    });
}

function Contact() {
    const { theme } = useTheme();

    return(
        <div id="contact" className={theme}>
            <div className="contact">
                <h2 className="contact-title">Contact</h2>
                <ul className="contact-list">
                    <li className="contact-list-item">
                        <span className="contact-list-item-label">📧 Email : </span> 
                        <a href="mailto:raphael.martin@bashroom.com" className="contact-list-item-link">raphael.martin@bashroom.com</a>
                    </li>
                    <li className="contact-list-item">
                        <span className="contact-list-item-label">📞 Téléphone : </span> 
                        <a href="tel:+33652639088" className="contact-list-item-link">+33 6 52 63 90 88</a>
                    </li>
                    <li className="contact-list-item">
                        <span className="contact-list-item-label">💬 WhatsApp : </span> 
                        <a href="https://wa.me/33652639088" className="contact-list-item-link">Send a message</a>
                    </li>
                    <li className="contact-list-item">
                        <span className="contact-list-item-label">💬 Telegram : </span> 
                        <a href="https://t.me/kitsuiwebster" className="contact-list-item-link">Send a message</a>
                    </li>
                    <li className="contact-list-item" id="contact-discord">
                        <span className="contact-list-item-label">💬 Discord : </span> 
                        <p onClick={copyDiscordUsername} className="contact-list-item-link" id="contact-discord-text">Copy my username</p>
                    </li>
                </ul>
                <p className='contact-emoji'>😎</p>
            </div>
        </div>
    )
}

export default Contact