import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Card from "./components/Card";
import SmallNav from "./components/SmallNav";
import Images from "./imglist.json";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click image to score, but make sure you don't click the same one twice...",
    cards: Images
  }

  handleClick = (id) => {
    const isClicked = this.state.cards.find(image => image.id === id);

    
    if (isClicked.clicked) {
      if (this.state.score > this.state.topScore) {
        this.setState({ topScore: this.state.score})
      }
      this.setState({score: 0, message: "You guessed incorrectly!", cards: this.shufflearr(this.resetArray(this.state.cards))});
    } else {
      isClicked.clicked = true;
      let shuffled = this.shufflearr(this.state.cards);
      this.setState({ score: this.state.score + 1}, () => {
        if (this.state.score === 12) {
          this.setState({ score: 0, topScore: 0, message: "You won!", cards: this.resetArray(this.state.cards) });
        } else {
          this.setState({ message: "You guessed correctly!", cards: shuffled });
        }
      })
      
    }
  }

  shufflearr = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  crateCard = () => {
    let array = this.state.cards.map((e) => (<Card id={e.id} key={e.id} data={e.image} handleClick={this.handleClick} bool={e.clicked} />))
    return array
  }

  resetArray = array => {
    array.forEach(e => {  e.clicked = false});
    return array;
  }

  render() {
    return (
      <React.Fragment>
        <SmallNav score={this.state.score} tscore={this.state.topScore} />
        <Navbar score={this.state.score} tscore={this.state.topScore} msg={this.state.message}/>
        <Container clickFunc={this.handleClick} top={this.changeTopScore}>
          {this.shufflearr(this.crateCard())}
        </Container>
      </React.Fragment>
    )
  }
}

export default App;
