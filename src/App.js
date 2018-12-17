import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import RacerCard from "./components/RacerCard"
import racers from "./racers.json";
import "./App.css";

class App extends Component {
  state = {
    friends: racers,
    clickedRacers: [],
    count: 0,
    highscore: 0
  };

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleIncrement = (id) => {
    if (this.state.clickedRacers.indexOf(id) == -1) {
      this.setState({ count: this.state.count + 1 });
      if (this.state.count >= this.state.highscore) {
        this.setState({ highscore: this.state.count + 1 });
      }
      this.state.friends.filter((friend, index) => friend.id == id);
      this.setState({ clickedRacers: [...this.state.clickedRacers, id] });
      this.shuffleArray(this.state.friends);

    }
    else {
      alert("You lose");
      this.setState({ count: 0 });
      this.setState({ clickedRacers: [] });
    }
  };

  render() {
    return (
      <div>
        <Header>
          {this.state.count}
          {this.state.highscore}
        </Header>
        <Wrapper>
          {this.state.friends.map((friend, index) =>
            <RacerCard
              id={friend.id}
              image={friend.image}
              handleIncrement={this.handleIncrement}
            />
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
