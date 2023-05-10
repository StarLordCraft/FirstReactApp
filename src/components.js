import logo from './logo.svg';
import reactbg from './reactjs-bg.svg'
import './App.css';

function NavBar(){
  return(
    <header className="header">
      <div className="logo-container">
        <img
        width='40px'
        height='40px' 
        src={logo} 
        alt=""/>
        <h2>ReactFacts</h2>
      </div>
      <div className="details">
        <h3>
          React Course - Project 1
        </h3>
      </div>
    </header>
  )
}

function MainContent(){
  return(
    <main>
       <h1>Fun facts about React</h1>
       <ul>
        <li>Was first released in 2013</li>
        <li>Way originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is mainteined by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
       </ul>
       <img
        width='300px'
        height='300px' 
        src={reactbg} 
        className="imgbg" 
        alt=""/>
    </main>
  )
}

export {NavBar, MainContent}