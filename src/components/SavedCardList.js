import React from 'react'
import Card from './Card'

const SavedCardList = ({ cards, deleteCard }) => (
  <div className="saved-card-list">
    {
      cards.map(card => <Card id={cards.id} card={card} handleDeleteClick={deleteCard(card)} />)
    }
  </div>
)

export default SavedCardList