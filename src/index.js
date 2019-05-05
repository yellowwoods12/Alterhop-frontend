/**
 * Author OooO
 * [Application Bootstrap File]
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'
import * as serviceWorker from './serviceWorker'
import store from './store'
import Loading from './components/LoadingComponent'
import Navbar from './containers/Navbar'
import Footer from './components/Footer'
import AppRouter from './routes'

const App = () => {
	return (
		<div>
			<div className="alt-main-navbar">
				<Navbar />
			</div>
			<div className="alt-main-body">
				<AppRouter />
			</div>
			<div className="alt-main-footer">
				<Footer />
			</div>
		</div>
	)
}

render(
	<Provider store={store.store}>
		<PersistGate loading={<Loading size={100} />} persistor={store.persistor}>
			<Router>
				<App />
			</Router>
		</PersistGate>
	</Provider>,
	document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
