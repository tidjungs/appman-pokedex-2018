import React from 'react'
import Card from './Card'

const SavedCardList = ({ cards }) => (
  <div className="saved-card-list">
    {
      cards.map(card => <Card id={cards.id} card={card} />)
    }
  </div>
)

export default SavedCardList