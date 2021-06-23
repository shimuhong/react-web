import { Button } from 'antd';
import './App.css';

function App() {

  function antdclk(ev) {
    console.log('antdclk:', ev)
  }
  
  return (
    <div className="App">
      <Button type="primary" onClick={antdclk}>antd点击</Button>
    </div>
  );
}

export default App;
