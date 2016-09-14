'use strcit'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleUserCard } from '../_user/actions'

import UserCard from '../_user/components/UserCard'

import './App.css'

const App = (props) => {
  // console.log(props.cards)

  return (
    <section>
      {props.cards.map((x, i) => (
        <UserCard
          { ...x }
          key={x.id}
          onClick={props.toggleUserCard(props.cards[i].id)} />
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
