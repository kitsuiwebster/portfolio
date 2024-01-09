import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';

function HackAPrompt() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const rawGistUrl = 'https://gist.githubusercontent.com/kitsuiwebster/8102d128c174d3f93ed1904b9a2953ec/raw/b668ff771f76b77574d06a8ca077133e9f496b3e/hackaprompt2023.md';

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
    <div className="markdown-body">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default HackAPrompt;
