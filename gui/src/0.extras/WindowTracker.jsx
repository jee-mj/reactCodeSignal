import React from "react"

export default class WindowTracker extends React.Component {
  state = {
    windowWidth: window.innerWidth
  }

  watchWidth = () => {
    this.setState({ windowWidth: window.innerWidth })
  }

  componentDidMount() {
    window.addEventListener("resize", this.watchWidth)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.watchWidth) // What's so special about POJO anyway
  }

  render() {
    return (
      <h1>Window width: {this.state.windowWidth}</h1>
    )
  }
}
