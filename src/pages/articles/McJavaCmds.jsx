import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';
import '../../assets/scss/index.scss';
import BackArrow from '../../components/BackArrow';

function McJavaCmds() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const rawGistUrl = 'https://gist.githubusercontent.com/kitsuiwebster/84c66c29bbf45b4dff9e9f7ecd840a2b/raw/4d463677c5709d1b27c0bf6facbc3582624eb751/minecraft--server-java-admin-commands.md'
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
      <div id="mcjavacmds">
          <div className="markdown-body">
              <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
      </div>
    </>
  );
}

export default McJavaCmds;
