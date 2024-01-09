import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';
import '../../assets/scss/pages/articles/HackAPrompt.scss';
import '../../assets/scss/index.scss'

function HackAPrompt() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const rawGistUrl = 'https://gist.githubusercontent.com/kitsuiwebster/8102d128c174d3f93ed1904b9a2953ec/raw/768ba76428f640377f29b4f79ad79b1dddd28f58/hackaprompt2023.md'
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
    <div id="hackaprompt">
        <div className="markdown-body">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    </div>
  );
}

export default HackAPrompt;
