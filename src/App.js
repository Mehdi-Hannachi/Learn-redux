import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Addition from "./Components/Addition/Addition";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Counter
        <Counter />
        <Addition />
      </header>
    </div>
  );
}

export default App;
