'use strict'

import * as t from './actionTypes'

const data = require('../data')

const initialState = data

export const userCardReducer = (state = initialState, action) => {
  switch(action.type) {
    case t.TOGGLE_USER_CARD: {
      const newState = [ ...state ]
      const card = newState.findIndex(x => x.id === action.id)
      const updatedCard = { ...newState, isActive: !newState[card].isActive }
      return [updatedCard]
    }
    // isActive: !state.isActive
    default:
      return state
  }
}
