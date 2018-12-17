import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Game from "./components/Game";
import RacerCard from "./components/RacerCard"
import racers from "./racers.json";
import "./App.css";

class App extends Component {
  state = {
    friends: racers,
    count: 0
  };

  filterState = (id) =>{
    let filteredFriends = this.state.friends.filter((friend, index)=> friend.id !== id);
    this.setState({friends:filteredFriends});
  }

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
      <Header>
        {this.state.count}
      </Header>
      <Wrapper>
        {/* <Game> */}
        {this.state.friends.map((friend, index) =>
          <RacerCard
            id={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            handleIncrement={this.handleIncrement}
          />
        )}
        {/* </Game> */}
      </Wrapper>
      </div>
    );
  }
}

export default App;
