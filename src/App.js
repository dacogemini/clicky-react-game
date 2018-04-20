import React, { Component } from 'react';
import logo from './Gravity_Falls_logo.png';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Header from './components/Header';
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
    status: "",
    friends,
    clickedIds: [],
    score: 0,
    topScore: 0,
  };

  componentDidMount () {
    this.shuffleCardArray(friends);
  }
// Shuffle array
shuffleCardArray = id => {
  console.log('click');
  let clickedIds = this.state.clickedIds;
  // iIf user clicks the same id the game is over 
  if(clickedIds.includes(id)){
    this.setState({
      clickedIds: [],
      score: 0, 
      status: 'Incorrect - Game Over! Click an Image to Play Again',      
    });
    console.log("Gamve Over!");
  } else {
    clickedIds.push(id);
    if(clickedIds === 9){
      this.setState({
        clickedIds: [], 
        score: 0, 
        status: 'Congratulations! You Win!! Click an Image to Play Again'
      });
      console.log('You Win!');  
      // return;
  }
  this.setState({friends, clickedIds, score: clickedIds.length, topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore, status:" "})
  }
  for(let p = friends.length - 1; p > 0; p--) {
    let q = Math.floor(Math.random() * (p + 1));
    // ES6
    [friends[p], friends[q]] = [friends[q], friends[p]];
  }
}
render () {
  return (
    <div className="gameContainer">
    <Header score = {this.state.score} topScore = {this.state.topScore} status = {this.state.status}/>
    <img src={logo} className="App-logo" alt="logo" />
    <Wrapper>
      {this.state.friends.map((friends, i) => (
        <FriendCard
          shuffleCardArray={this.shuffleCardArray}
          id={friends.id}
          key={friends.id}
          image={friends.image}
        />
      ))}
    </Wrapper>
      </div>
    );
  }
}

export default App;
