import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'

const initialCounterState = { counter: 0, showCounter: true }

const initialAuthState = {
	isAuthenticated: false
}

const store = configureStore({
	reducer: {
		reducer: { counter: counterReducer, auth: authReducer }
	}

})

export default store;