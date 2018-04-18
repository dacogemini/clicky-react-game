import React, { Component } from 'react';
import logo from './Gravity_Falls_logo.png';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

import './App.css';

//
//* ─── STORES ALL OF OUR MODIFIABLE CODE ──────────────────────────────────────────
//* Stores our main Render call from ReactDOM 
//* Imports our App.js component 
//* Tells React where to render it (remember that div with an id of root?)
//* ────────────────────────────────────────────────────────────────────── END ─────
//

class App extends Component {
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
         
        </p>
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            age={friend.age}
            personality={friend.personality}
          />
        ))}
      </Wrapper>

      </div>
    );
  }
}

export default App;
