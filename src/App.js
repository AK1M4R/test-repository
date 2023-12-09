import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект Акимова Александра Владимировича";
  const rel = "Added semantic-release"
  const vers = 'Version - 1.0.0'

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
      </header>
      <div>
        {rel}
        {vers}
      </div>
    </div>
  );
}

export default App;
