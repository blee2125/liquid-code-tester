import './App.css';
import ExpectedValue from './components/inputs/ExpectedValue';
import LiquidLogic from './components/inputs/LiquidLogic';
import Results from './components/outputs/Results';

function App() {
  return (
    <div className="App">
      <p>liquid code tester</p>
      <ExpectedValue />
      <LiquidLogic />
      <Results />
    </div>
  );
}

export default App;