import LogoIcon from "./components/LogoIcon";
import "./App.css";
import Card from "./components/Card";
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoIcon />
        <h1>Dev Labs</h1>
      </header>
      <div className="App-main">
      <Card>
        <Content/>
      </Card>

      </div>
    </div>
  );
}

export default App;
