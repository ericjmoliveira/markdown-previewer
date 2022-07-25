import { useState, useEffect } from 'react';
import { marked } from 'marked';

import './App.css';

const App = () => {
    const initialText =
        '# This is a heading level 1\n\n## This is a heading level 2\n\n[Check out freeCodeCamp website](https://www.freecodecamp.org)\n\n`This is a inline code`\n\n         This is a block code\n\n* This is a list item  \n\n> This is a blockquote\n\nThis is a nice cat\n\n![A nice cat](https://images.unsplash.com/profile-fb-1512615084-1e6e0a7597b6.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128)\n\n**This is a bold text**';

    const [text, setText] = useState(initialText);

    useEffect(() => {
        document.querySelector('#preview').innerHTML = marked.parse(text);
    }, []);

    const handleChange = (e) => {
        setText(e.target.value);

        document.querySelector('#preview').innerHTML = marked.parse(e.target.value);
    };

    return (
        <div id="container">
            <textarea
                id="editor"
                value={text}
                onChange={handleChange}
                placeholder="Enter the markdown text and see the preview on the side..."
            ></textarea>

            <section id="preview"></section>
        </div>
    );
};

export default App;
