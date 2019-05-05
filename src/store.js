import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localforage from 'localforage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// all reducers here
import loginReducer from './containers/Login/reducer'
import signupReducer from './containers/Signup/reducer'
import userReducer from './containers/Home/reducer'
import companyUserReducer from './containers/Company/Personal/reducer'
import organizationReducer from './containers/Company/Organization/reducer'
import jobsReducer from './containers/Company/Jobs/reducer'

const rootReducer = combineReducers({
	form: formReducer,
	loginReducer,
	signupReducer,
	userReducer,
	companyUserReducer,
	organizationReducer,
	jobsReducer
})

const persistConfig = {
	key: 'alterhop@123',
	storage: localforage,
	blacklist: ['form'],
	stateReconciler: autoMergeLevel2
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = () => {
	let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
	let persistor = persistStore(store)
	return { store, persistor }
}

export default store()
