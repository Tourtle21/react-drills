import React, {Component} from 'react';
import Image from './Components/Image'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTNKY7BYRhCnrZVhnyTtXOO_IPmkeEgOE4rY4PhJj5KmJOyo6f&usqp=CAU'
    }
  }

  render() {
    return (
      <div className="App">
        <Image image={this.state.image}/>
      </div>
    );
  }
}

export default App;
