import React from 'react'
import ProgressBar from './ProgressBar'
import cute from '../cute.png'

const calculateCardDetail = (card) => {
  const hp = card.hp < 100 ? card.hp : 100
  const str = card.attacks && card.attacks.length <= 2 ? card.attacks.length * 50 : 0
  const weak = card.weaknesses && card.weaknesses.length === 1 ? 100 : 0
  const happiness = Math.floor((hp / 10 + str / 10 + 10 - (weak / 10)) / 5)
  return {
    hp, str, weak, happiness
  }
}

const Card = ({ card, handleSaveClick }) => {
  const cardDetail = calculateCardDetail(card)
  return (
    <div className="card">
      <div>
        <img src={card.imageUrl} alt="" />
      </div>
      <div className="card-detail">
        <p>{card.name}</p>
        <div className="detail-bar">
          <ProgressBar
            title="HP"
            percent={cardDetail.hp}
          />
        </div>
        <div className="detail-bar">
          <ProgressBar
            title="STR"
            percent={cardDetail.str}
          />
        </div>
        <div className="detail-bar">
          <ProgressBar
            title="WEAK"
            percent={cardDetail.weak}
          />
        </div>
        <div>
          {
            cardDetail.happiness > 0 &&
            new Array(cardDetail.happiness).fill(0).map((val, idx) =>
              <img key={idx} className="cute-img" src={cute} alt="" />
            )
          }
        </div>
      </div>
      {
        handleSaveClick && <a className="add-btn" onClick={handleSaveClick}>ADD</a>
      }
    </div>
  )
}


export default Card