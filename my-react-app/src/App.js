import logo from './logo.jpg'
import resume from '../public/Resume.pdf'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>Christian Larsen</p>
        <p>Class of 2028</p>  
        <p>Software Enginner, and Web Developer</p>
        <p><a href={resume}>Resume</a></p>
      </header>
      <div className='footer'>
        <div className='contact'>
          <p><b>Contact</b></p>
          <p>Email: christi9nl9rsen@gmail.com</p>
          <p>Phone: (469)-742-3710</p>
          <p>Discord: ka1ros._.</p>
        </div>
        <div className='links'>
          <p><b>Links</b></p>
          <p><a href='https://youtube.com/realkairos'>YouTube</a></p>
          <p><a href='https://twitch.tv/realka1ros'>Twitch</a></p>
          <p><a href='#'>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
