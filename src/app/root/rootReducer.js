'use strict'

import { combineReducers } from 'redux'

import { reducers as user } from '../_user'

export default combineReducers({
  user_card: user.userCardReducer
})
