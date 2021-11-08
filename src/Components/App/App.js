import { Component } from "react";
import Select from "../select/Select";
import Battle from "../battleSea/Battle";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      level: ''
    }
  }

  selectLevel = (click) => {
    console.log(click)
    localStorage.setItem('level', click);
    this.setState({
      gender: localStorage.getItem('gender'),
      level: localStorage.getItem('level')
    })
    this.forceUpdate();
  }

  goOk=()=>{
    this.forceUpdate();
  }

  componentDidMount() {
    if (localStorage.getItem('gender') !== null && localStorage.getItem('level') !== null) {
      this.setState({
        gender: localStorage.getItem('gender'),
        level: localStorage.getItem('level')
      })
    }
  }

  newGame = () => {
    localStorage.clear();
    this.setState({
      gender: '',
      level: ''
    })
    this.forceUpdate();
  }

  newPers = () => {
    localStorage.removeItem('gender');
    this.setState({
      gender: ''
    })
    this.forceUpdate();
  }

  newLevel = () => {
    localStorage.removeItem('level');
    this.setState({
      level: ''
    })
    this.forceUpdate();
  }

  render() {
    const main = (localStorage.getItem('gender') !== null && localStorage.getItem('level') !== null) ?
      <Battle
        newGame={this.newGame}
        newPers={this.newPers}
        newLevel={this.newLevel} /> :
      <Select 
      selectLevel={this.selectLevel}
      goOk={this.goOk} />;
    return (
      <>
        {main}
      </>
    )
  }
}

export default App;