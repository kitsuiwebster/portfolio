// CozyBot.jsx
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';
import '../../assets/scss/index.scss'
import '../../assets/scss/pages/projects/CozyBot.scss';
import { Link } from 'react-router-dom';
import BackArrow from '../../components/BackArrow';

function CozyBot() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const rawGistUrl = 'https://gist.githubusercontent.com/kitsuiwebster/fa7cb342cc4ea46544df9214190b9562/raw/130b77f79efa57412a91d3c339b50998666e42e6/cozybot.md';

    fetch(rawGistUrl)
      .then(response => response.ok ? response.text() : Promise.reject('Failed to load'))
      .then(text => setMarkdown(text))
      .catch(error => {
        console.error('Fetching markdown failed: ', error);
        setMarkdown('# Error\nCould not load the article.');
      });
  }, []);

  return (
    <>
      <BackArrow path="/projects"/>
      <div id="cozybot">
          <Link className="cozybot-try" to="/projects/cozybot/invite">Try CozyBot 😋!</Link>
          <div className="markdown-body">
              <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
          <Link id="cozybot-try-bottom" className="cozybot-try" to="/projects/cozybot/invite">Try CozyBot 😋!</Link>
      </div>
    </>
  );
}

export default CozyBot;
