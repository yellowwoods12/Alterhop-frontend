import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class UserProvider extends Component {
	render() {
		return <Provider>{this.props.children}</Provider>
	}
}

export { UserProvider, Consumer as UserConsumer }
