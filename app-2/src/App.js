import React, {Component} from 'react';
import List from './Components/List'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: ['Chicken', 'Pinapple', 'Suren', 'Bishop', 'Kaden', 'Alex', 'Pop']
    }
  }

  render() {
    return (
      <div className="App">
        <List list={this.state.newList}/>
      </div>
    );
  }
}

export default App;
