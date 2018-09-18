import Navbar from './components/Navbar/Navbar';
import React, { Component } from "react";
import FriendCard from "../src/components/Card/Card";
import friends from './DogImages.json';
import ShuffleArray from './components/Shuffle/Shuffle';


// ========= Dont quite understand component ========//
class App extends Component {
  state = {
    friends,
    match: [],
    count: 0,
    highscore: 0
  };

  ScoreBoard = (id) => {
    if (this.state.match.includes(id)) {
      console.log('match: ' + id)
      this.setState({ highscore: this.state.count })
      this.setState({ count: 0, match: [] })

    }
    else {

      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count)
    }
  }

  ShuffleFriend = id => {
    ShuffleArray(this.state.friends);
    this.ScoreBoard(id)
    console.log('Dogtag:' + id)
    this.setState({ friends });
    this.state.match.push(id)
    console.log(this.state.match)
    // CheckMatch(id)

  }

  render() {
    return (
      <div>
        <Navbar
          currentscore={this.state.count}
          highscore={this.state.highscore}
        >
          {this.state.friends.map(friends => (
            <FriendCard
              ShuffleFriend={this.ShuffleFriend}
              id={friends.id}
              key={friends.id}
              image={friends.image}
            />
          ))}
        </Navbar>
      </div>
    );
  }
}

export default App;
