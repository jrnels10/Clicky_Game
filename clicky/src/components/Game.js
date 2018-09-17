import React, { Component } from "react";
import Wrapper from './Wrapper/Wrapper'
import Card from "./Card/Card";
import Doggie from '../DogImages.json';
// import './Game.css';



class Game extends Component {
  state = {
    Doggie

  }

  render() {
    return (
      <Wrapper>
        <div>
          <Card
            cycleFriends={this.cycleFriend}
            id={Doggie.id}
            key={Doggie.id}
            image={Doggie.image}

          />
        </div>
      </Wrapper>

    );
  }
}

export default Game;