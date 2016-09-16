'use strcit'

import React from 'react'

import './UserCard.css'

const UserCard = ({ card, toggleUserCard}) => {
  let border = { }
  let header = { }
  if (card.status === 'active') {
    border.backgroundColor = '#2ecc71'
    header.backgroundColor = '#d5f6e3'
  }
  else if (card.status === 'halt') {
    border.backgroundColor = '#f39c12'
    header.backgroundColor = '#fcebcf'
  }
  else {
    border.backgroundColor = '#c0392b'
    header.backgroundColor = '#f6d9d5'
  }

  return (
    <div className='tw-card' onClick={() => toggleUserCard(card.id)}>
      <div className='tw-card__header' style={header}>
        <div className='tw-card__header__border' style={border}></div>
        <div className='tw-card__header__price'>
          {'$' + card.total}
        </div>
        <div className='tw-card__header__main'>
          <div className='tw-card__header__main__name'>
            {card.name}
          </div>
          <div className='tw-card__header__main__email'>
            {card.email}
          </div>
          <div className='tw-card__header__main__msg'>
            will churn soon
          </div>
        </div>
        <div className='tw-card__header__country'>
          {card.country}
        </div>
        <div className='tw-card__header__time'>
          {card.hour + 'h'}
        </div>
      </div>
      <div className={card.isActive ? 'tw-card__panel-show' : 'tw-card__panel'}>
        Hello 1
      </div>
    </div>
  )
}

export default UserCard
