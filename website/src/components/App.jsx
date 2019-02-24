import React, { Component } from 'react';
const api = 'http://localhost:8080/api/animals/';

class App extends Component {
  fetchAnimals = async () => {
    let animals;
    await fetch(api)
      .then(animals => animals.json())
      .then(result => animals = result);
    return animals;
  }
  constructor(props) {
    super(props);

    this.state = {
      animals: [],
    };
  }
  async componentDidMount() {
    const animals = await this.fetchAnimals();
    this.setState({animals});
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.animals.map(animal => <li>{animal.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App;