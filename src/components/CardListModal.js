import React from 'react'
import Modal from 'react-modal'
import Card from './Card'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    marginTop: '5%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
}

const CardListModal = ({ isOpen, cardData, closeModal, saveCard, searchText, changeSearchText, searchClick }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <input
        className="search-box"
        type="text"
        value={searchText}
        onChange={changeSearchText}
      />
      <a className="add-btn" onClick={searchClick}>Search</a>
    </div>
    <div className="card-list">
      {
        cardData.map(card => <Card key={card.id} card={card} handleSaveClick={saveCard(card)} />)
      }
    </div>
  </Modal>
)

export default CardListModal