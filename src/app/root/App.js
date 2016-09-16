'use strcit'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import UserCard from '../_user/components/UserCard'
import { toggleUserCard } from '../_user/actions'

import './App.css'

const App = (props) => {
  return (
    <section>
      {Object.keys(props.cards).map((x) => ( // props.cards.map((x) => (...
        <UserCard
          card={props.cards[x]} // card={x}
          key={x} // key={x.id}
          toggleUserCard={props.toggleUserCard} />
      ))}
    </section>
  )
}

const mapStateToProps = (state) => ({
  cards: state.user_card
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleUserCard: (id) => toggleUserCard(id)
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
