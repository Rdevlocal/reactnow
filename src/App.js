import logo from './logo.svg';
import './App.css';
import YouTubeSubscribe from './components/YoutubeSubscribe';

function App() {
  return (
    <div className="App">
      <header>Header</header>
      <div className='content'>
        <pre className='crt'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is a React application!
          </p>
        </pre>
        <div className='subscribe'>
            <YouTubeSubscribe/>  
        </div>
      </div>
      
      <footer>
      <div className="right">
            <a href="https://github.com/hackenshaw">
                <img className="github-logo" alt="" src="images/github-logo.png"/>
            </a>
        
            <a href="https://www.youtube.com/channel/UCZEnbGBfukY7hukNcRr1vjA">
                <img className="yt-logo" alt="" src="images/yt-logo.png"/>
            </a>
        
            <a href="https://www.instagram.com/hackenshaw/">
                <img className="insta-logo" alt="" src="images/instagram-logo.png"/>
            </a>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
