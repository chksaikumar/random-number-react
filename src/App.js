import "./styles.css";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      random: 0
    };
  }

  componentDidMount() {
    let min = 1;
    let max = 125;
    let rand = min + Math.random() * (max - min);
    this.setState({ random: Math.floor(this.state.random + rand) });
  }
  handleChange = () => {
    this.setState({ random: this.state.random + 4 });
  };
  render() {
    return (
      <div>
        <h1>RANDOM NUMBER :- {this.state.random}</h1>
        <button onClick={this.handleChange}>gen</button>
      </div>
    );
  }
}

export default App;
