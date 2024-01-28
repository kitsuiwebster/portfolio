import { Link } from 'react-router-dom';
import '../assets/scss/pages/Articles.scss';
import '../assets/scss/index.scss';
import Article from '../components/Article';


function Articles() {
    return (
        <>
            <div id="articles">
                <div className="articles">
                    <p className='articles-title'>Articles</p>
                    <Link to="/articles/hackaprompt2023" className="articles-link">
                        <Article
                        title="HackAPrompt 2023 : How I tricked the AI models."
                        date="August 4, 2023"
                        description="I participated in the HackAPrompt challenge where competitors had to trick AI models into outputting 'I have been PWNED' while following strict rules. I placed 11th out of over 2600 participants by testing various strategies to manipulate the AI on the competition platform. The experience improved my skills in AI security and creativity through learning prompt hacking techniques to control model behaviors."/> 
                    </Link>
                    <Link to="/articles/minecraft-java-admin-commands" className="articles-link">
                        <Article
                        title="Minecraft Server (Java) : All Admin Commands"
                        date="June 15, 2023"
                        description="This guide covers all admin commands for Java Minecraft servers. Learn to control worlds with teleportation, spawning, weather, and more. Master server administration to create custom player experiences." /> 
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Articles;
