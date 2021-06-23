import { Button } from 'antd';
import './App.css';
import Http from "axios";
function App() {

  function antdclk(ev) {
    console.log('antdclk:', ev)
    console.log(process.env)

    Http.defaults.baseURL = 'shimuhong.com:8090'
    Http.get('/api2').then(res => {
        console.log(res)
    }).catch(error => {
        console.error(error)
    })
  }
  
  return (
    <div className="App">
      <Button type="primary" onClick={antdclk}>antd点击</Button>
    </div>
  );
}

export default App;
