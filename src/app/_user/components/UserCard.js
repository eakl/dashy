'use strcit'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleUserCard } from '../actions'

import './UserCard.css'

const UserCard = (props) => {
  // console.log(props)

  return (
    <div className='tw-card'>
      <div className='tw-card__header'>
        <div className='tw-card__header__border'></div>
        <div className='tw-card__header__price'>
          {'$'+props.total}
        </div>
        <div className='tw-card__header__main'>
          <div className='tw-card__header__main__name'>
            {props.name}
          </div>
          <div className='tw-card__header__main__email'>
            {props.email}
          </div>
          <div className='tw-card__header__main__msg'>
            will churn soon
          </div>
        </div>
        <div className='tw-card__header__country'>
          {props.country}
        </div>
        <div className='tw-card__header__time'>
          {props.hour+'h'}
        </div>
      </div>
      <div className={props.isActive ? 'tw-card__panel-show' : 'tw-card__panel'}>
        Hello 1
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   isActive: state.user_card.isActive
// })

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     toggleUserCard: (id) => toggleUserCard(id)
//   }, dispatch)
// }

export default UserCard

// connect(
//   null,
//   mapDispatchToProps
// )(UserCard)
