import React, { Component } from 'react'
import CardListModal from './components/CardListModal'
import SavedCardList from './components/SavedCardList'
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
    cardData: [],
    modalOpen: false,
    savedCards: [],

  }
  async componentDidMount() {
    this.loadCardData()
  }


  deleteCard = (card) => () => {
    this.setState({
      savedCards: this.state.savedCards.filter(c => c.id !== card.id)
    })
  }

  saveCard = (card) => () => {
    const savedCards = this.state.savedCards
    // check unique
    const cardExited = savedCards.filter(c => c.id === card.id).length === 0 ? false : true
    if (!cardExited) {
      this.setState({
        savedCards: [...savedCards, card]
      })
    }
  }

  loadCardData = async () => {
    const response = await fetch('http://localhost:3030/api/cards')
    const cardData = await response.json()
    this.setState({
      cardData: cardData.cards
    })
  }

  activateModal = () => {
    this.setState({
      modalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <a className="modal-btn add-btn" onClick={this.activateModal}>Save Card</a>
        </div>
        <CardListModal
          isOpen={this.state.modalOpen}
          cardData={this.state.cardData.filter(card => {
            const saveIdList = this.state.savedCards.map(sc => sc.id)
            return !saveIdList.includes(card.id)
          })}
          closeModal={this.closeModal}
          saveCard={this.saveCard}
        />
        {
          <SavedCardList
            cards={this.state.savedCards}
            deleteCard={this.deleteCard}
          />
        }
      </div >
    )
  }
}

export default App
