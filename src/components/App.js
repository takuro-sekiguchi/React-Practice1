import './App.css';
import Button from './Button/Button';
import Timer from './Timer/Timer';

function App() {
  return (
    <div className="App-container">
      <h1 className="App-title">Hello, World!</h1>
      <Button>ボタン1</Button>
      <Button>ボタン2</Button>
      <Button>ボタン3</Button>
      <Timer seconds={30}></Timer>
    </div>
  );
}

export default App;
