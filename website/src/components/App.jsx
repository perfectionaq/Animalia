import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.state.animals.map((animal, index) => 
            <li key={`${index}${animal.name}`}>{animal.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default connect(null, null)(App);