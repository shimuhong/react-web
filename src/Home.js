import { Button } from 'antd';
import './App.css';
import { get, post } from './fetch';
function App() {

  function antdclk(ev) {
    console.log(this)
    console.log(window)
    get('/api2',{ee: '22244'}).then(res => {
      console.log(res)
    }).catch(error => {
      console.error(error)
    })
    post('/api3',{ee: '22244'}).then(res => {
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
