import React, { useRef, useState } from 'react';
import '../assets/scss/pages/Pika.scss';

const Pika = () => {
    const emojis = ['💛', '😇', '🤗', '🥺', '😊', '😋', '⚡'];
    const textRefs = useRef([]);
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyToClipboard = (index) => {
        const text = textRefs.current[index];
        if (text) {
            const selection = window.getSelection();
            const range = document.createRange();
            selection.removeAllRanges();
            range.selectNodeContents(text);
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();

            setCopiedIndex(index);
            setTimeout(() => {
                setCopiedIndex(null);
            }, 2000); 
        }
    };

    return (
        <div className="emoji-container">
            {emojis.map((emoji, index) => (
                <div key={emoji} className="emoji-wrapper">
                    <span ref={(el) => textRefs.current[index] = el} className="emoji">{emoji}</span>
                    <button onClick={() => copyToClipboard(index)}>Copy</button>
                    {copiedIndex === index && <div className="copy-status">Copied!</div>}
                </div>
            ))}
        </div>
    );
};

export default Pika;
