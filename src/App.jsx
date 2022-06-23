import { useState } from 'react';
import './App.css';
import { Landing } from './components/Landing';

function App() {
  const [isLoding, setIsLoding] = useState(true);
  setTimeout(() => {
    setIsLoding(false);
  }, 3000);
  return (
    <div 
     className="App">
      {isLoding ? (
        <div id="loading">
          <div id="main">
            <div id="left"></div>
            <div id="right"></div>
          </div>
        </div>
      ) : (
        ""
      )}
     <Landing />
    </div>
  );
}

export default App;
