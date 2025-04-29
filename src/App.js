import logo from './870-200x300-blur_2-grayscale.jpg';
import HomePage from './HomePage.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomePage /> 
          
      </header>
    </div>
  );
}

export default App;
