import { Component } from 'react'
import './App.css'
import Nyc from './Nyc';
import Paris from './Paris';


class App extends Component {
  state = {
    show: true
  }

  render() {
    const btnText = this.state.show ? "Paris" : "New York City";

    return (
      <div className="App">
        <p>{this.state.show ? <Nyc /> : <Paris />}</p>
        <button onClick={() => {this.setState({show: !this.state.show})}}>{btnText}</button>
      </div>
    );
  }
}

export default App
