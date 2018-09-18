import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import characters from '.characters.json'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import characterCard from './components/characterCard'


class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    currScore: 0,
    unselectedChars: characters
  }

  componentDidMount() {
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let a = Math.floor(Math.random() * (i + 1));
      [array[i], array[a]] = [array[a], array[i]];
    }
  }

  selectChar = character => {
    const findChar = this.state.unselectedChars.find(item => item.character === character);

    if(findChar === undefined) {
      //fails to select a new character
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.currScore > this.state.topScore) ? this.state.currScore : this.state.topScore,
        currScore: 0,
        characters: characters,
        unselectedChars: characters
      });
    }

    else {
      //success to select a new character
      const newCharacters = this.state.unselectedChars.filter(item => item.character !== character);

      this.setState({
        message: "You guessed correctly!",
        currScore: this.state.currScore + 1,
        characters: characters,
        unselectedChars: characters
      });
    }

    this.shuffleArray(characters);
  };

  render() {
    return (
      <Wrapper>
        message={this.state.message}
        currScore={this.state.currScore}
        topScore={this.state.topScore}

        <Title />
        {
          this.state.characters.map(dog => (
            <characterCard
              character={characters.character}
              image={characters.image}
              selectChar={this.selectChar}
              currScore={this.state.currScore}
              />
          ))
        }
      </Wrapper>
    );
  }
}

export default App;
