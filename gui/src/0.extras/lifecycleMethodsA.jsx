import React from "react"

export default class App extends React.Component {
  state = {
    character: {
      name: "",
    }
  }

  /**
   * Challenge:
   * 
   * Save the Star Wars character object in state! Then,
   * display the `name` property of the character on the
   * screen.
   */

  componentDidMount() {
    console.log("componentDidMount")
    this.fetchCharacter();
  }

  /** In functional components, we use useEffect()
   * 
   * React.useEffect(() => {
   *   // Your code here
   * }, [])
   * 
   * This is run once, the first time the component mounts
   * and never again due to the empty dependencies array
   */

  fetchCharacter() {
    fetch("https://swapi.py4e.com/api/people/1")
      .then(res => res.json())
      .then(data => this.updateCharacter(data));
    // tutorial method:   .then(data => this.setState({character:data}));
  }

  updateCharacter = (data) => {
    this.setState({ character: data });
    console.log(data);
  }

  render() {
    console.log("render")
    return (
      <h1>{this.state.character.name}</h1>
    )
  }
}