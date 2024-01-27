import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';
import '../../assets/scss/index.scss'
import BackArrow from '../../components/BackArrow';

function HackAPrompt() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const rawGistUrl = 'https://gist.githubusercontent.com/kitsuiwebster/b41c8af863c98120a22e8b2bcc20dc85/raw/c8129954d2d6c2e8f66cea50ca452e31664f3036/hackaprompt2023_b.md'
    fetch(rawGistUrl)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(text => setMarkdown(text))
      .catch(error => {
        console.error('Fetching markdown failed: ', error);
        setMarkdown('# Error\nCould not load the article.');
      });
  }, []);

  return (
    <>
      <BackArrow path="/articles"/>
      <div id="hackaprompt">
          <div className="markdown-body">
              <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
      </div>
    </>
  );
}

export default HackAPrompt;
