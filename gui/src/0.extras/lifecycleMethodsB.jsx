import React from "react"

export default class App extends React.Component {
  state = {
    character: {
      name: "",
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchCharacter().then(this.updateCharacter);
  }

  fetchCharacter() {
    return fetch("https://swapi.py4e.com/api/people/1")
      .then(res => {
        return res.json();
      });
  }

  updateCharacter = (data) => {
    this.setState({ character: data });
  }

  render() {
    console.log("render");
    return (
      <h1>{this.state.character.name || "Loading..."}</h1>
    );
  }
}
