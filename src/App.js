import logo from './logo.svg';
import './App.css';
import Header from './Header'
import selfie from './sunrise_at_delicate_arch.jpeg';

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
          <img src={selfie} alt = "Image of me at Delicate Arch at sunrise" width = "518" height = "533" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
