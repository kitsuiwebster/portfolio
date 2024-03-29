// CozyBot.jsx
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';
import '../../assets/scss/index.scss';
import '../../assets/scss/pages/projects/CozyBot.scss';
import { Link } from 'react-router-dom';
import BackArrow from '../../components/BackArrow';
import { useTranslation } from 'react-i18next';

function CozyBot() {
  const [markdown, setMarkdown] = useState('');
  const { t } = useTranslation('cozybot')

  useEffect(() => {
    const rawGistUrl = 'https://gist.githubusercontent.com/kitsuiwebster/e7d1de9b870eae047872979dc52a5f96/raw/145844d6677e108148fa6ac54a5b74fa60296cba/cozybot';

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
          <Link className="cozybot-try" to="/projects/cozybot/invite">{t('button')}</Link>
          <div className="markdown-body">
              <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
          <a href="https://github.com/kitsuiwebster/cozy-bot" id="cozybot-repo"
          target="_blank" rel="noopener noreferrer" className="cozybot-repo">{t('repo')}</a>
          <a href="https://github.com/kitsuiwebster/cozy-bot/blob/main/CHANGELOG.md"
          target="_blank" rel="noopener noreferrer" className="cozybot-changelog">{t('changelog')}</a>
          <Link id="cozybot-try-bottom" className="cozybot-try" to="/projects/cozybot/invite">{t('button')}</Link>
      </div>
    </>
  );
}

export default CozyBot;
