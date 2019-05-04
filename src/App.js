import React, { Component } from 'react'
import Card from './components/Card'
import './App.css'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  state = {
    cardData: []
  }
  async componentDidMount() {
    this.loadCardData()
  }

  loadCardData = async () => {
    const response = await fetch('http://localhost:3030/api/cards')
    const cardData = await response.json()
    this.setState({
      cardData: cardData.cards
    })
  }

  render() {
    return (
      <div className="App">
        {/* <button>Add</button> */}
        <div className="card-list">
          {
            this.state.cardData.map(card => <Card key={card.id} card={card} />)
          }
        </div>
      </div>
    )
  }
}

export default App
