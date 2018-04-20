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
    status: "Click an Image to begin!",
    friends:friends,
    clickedIds: [],
    score: 0,
    topScore: 0,
  };

  componentDidMount () {

  }
// Shuffle array
shuffleCardArray = id => {
  let clickedIds = this.state.clickedIds;
  for(var i = friends.length - 1; i > 0; i--) {
    var q = Math.floor(Math.random() * (i + 1));
    [friends[i], friends[q]] = [friends[q], friends[i]];
  }
  // if statement for if user clicks the same id - Game Over
  if(clickedIds.includes(id)){
    this.setState({
      status: 'Incorrect! Click an Image to Play Again',      
      friends:friends,
      clickedIds: [], 
      topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore,
      score: 0,       
    });
    
      console.log('Game Over!');
    // return;
  } else {
    // otherwise push the id the user clicked to the clickedIds array
     clickedIds.push(id);
     this.shuffleCardArray(friends);
     
  }

  // if the user clicks nine images in a row - User Wins
if(clickedIds === 9){
  this.setState({friends: friends, score: this.state.score + 1, status: 'Congratulations! You Won!! Click an Image to Play Again'});
  console.log('You Win!');  
  console.log('Your score is: ' + clickedIds.length);
}
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header count = {this.state.score} topScore = {this.state.topScore}/>
        </header>
        <p className="App-intro">
         
        </p>
        <Wrapper>
        {this.state.friends.map((friends, i) => (
          <FriendCard
            onClickHandler={this.onClickHandler}
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
