import logo from './logo.svg';
import './Sass/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>
          <h1 className='title-text'>
            Header text
          </h1>
        </div>

        <nav className='list'>
          <li><a href="https://www.w3docs.com/">Home</a></li>
          <li><a href="https://www.w3docs.com/quiz/">Quizzes</a></li>
          <li><a href="https://www.w3docs.com/snippets">Snippets</a></li>
          <li><a href="https://www.w3docs.com/tool/">Tools</a></li>
          <li><a href="https://www.w3docs.com/string-functions/">String Functions</a></li>
        </nav>

        <div className="banner">
          <img className="banner-img" src="cat_two.jpg" alt="Walking Cat"></img>
        </div>

        <h3 className='paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
        </h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <body className='body-class'>
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
        <h3 className='f_test_one'>This text is to test invert, text originally orange</h3>

        <div className='class_one'>
          text, text, text, text.
        </div>

        <div className='class_two'>
          text, text, text, text.
        </div>


      </body>

      <footer>
        <p>Author: Hege Refsnes</p>
        <p><a href="mailto:hege@example.com">hege@example.com</a></p>
      </footer>

    </div>
  );
}

export default App;
