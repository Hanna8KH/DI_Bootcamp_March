import React from "react";
import { Language } from "./componenets/Language";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0}
      ]
    }
  }
  render() {
    return (
    <>
      <h1>Vote your language!</h1>
      <p>{this.state.languages.map((lang) => (<Language name={lang.name} votes={lang.votes} />))}</p>
    </>)
    }
}
  

export default App;
