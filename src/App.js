import React, { Component } from "react";
import "./App.css";
// import Counter from './components/Counter';
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  hendleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  hendleDelete = counterID => {
    // console.log('Event Called',counterID);
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  hendleIncrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // console.log(counters[0].value);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.hendleReset}
            onIncrement={this.hendleIncrement}
            onDelete={this.hendleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
