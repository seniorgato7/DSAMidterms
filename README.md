# REACT JS

# Setting Up a React Application

## 1. Install Node.js
- Download and install Node.js from the [official website](https://nodejs.org/).
- Verify the installation by running the following commands in your terminal:

    ```bash
    node --version
    npm --version
    ```

## 2. Create a New React App
- Use Create React App to set up a new project. Open your terminal and run:

    ```bash
    npx create-react-app my-app
    ```

- Replace `my-app` with your desired project name.

## 3. Navigate to Your Project Directory
- Change into your project directory:

    ```bash
    cd my-app
    ```

## 4. Start the Development Server
- Run the following command to start the server:

    ```bash
    npm start
    ```

- This will open your new React app in the browser at `http://localhost:3000`.

## Using React Markdown

### 1. Install React Markdown
- To use markdown in your React application, install the `react-markdown` package:

    ```bash
    npm install react-markdown
    ```

### 2. Create a Markdown Component
- Create a new component to render markdown content. Here’s a simple example:

    ```javascript
    import React from 'react';
    import ReactMarkdown from 'react-markdown';

    const markdownText = `
    # Hello, React Markdown!
    This is a simple example of using **React Markdown** in your app.
    `;

    function MarkdownComponent() {
      return (
        <div>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      );
    }

    export default MarkdownComponent;
    ```

### 3. Fetch Markdown Content from a File
- You can also fetch markdown content from an external file. Here’s how:

    ```javascript
    import { useEffect, useState } from 'react';
    import ReactMarkdown from 'react-markdown';

    function MarkdownPage() {
      const [markdownContent, setMarkdownContent] = useState('');

      useEffect(() => {
        fetch('/path/to/your/markdown/file.md')
          .then((response) => response.text())
          .then((text) => setMarkdownContent(text));
      }, []);

      return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
    }

    export default MarkdownPage;
    ```

## Customizing Markdown Rendering

### 1. Using Custom Components
- You can customize how certain elements are rendered by passing a `components` prop:

    ```javascript
    import React from 'react';
    import ReactMarkdown from 'react-markdown';
    import CustomLink from './CustomLink';

    function MarkdownComponent() {
      return (
        <ReactMarkdown
          components={{
            a: CustomLink, // Use CustomLink instead of <a>
          }}
        >
          [Link to Custom Component](https://example.com)
        </ReactMarkdown>
      );
    }
    ```

### 2. Styling Code Blocks
- To add syntax highlighting to code blocks, you can use `react-syntax-highlighter`:

    ```bash
    npm install react-syntax-highlighter
    ```

- Then modify your component to include syntax highlighting:

    ```javascript
    import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
    import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

    function MarkdownComponent() {
      return (
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter style={solarizedlight} language={match[1]} PreTag="div">
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdownText}
        </ReactMarkdown>
      );
    }
    ```