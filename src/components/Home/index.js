import { Tab, Tabs } from '@blueprintjs/core'
import React, { Component } from 'react'
import './style.scss'

import Profile from '../Profile'
import Test from '../Test'

class Home extends Component {
	state = {
		currTab: 'profile'
	}
	render() {
		const {
			handleTechnicalChange,
			handleQuantChange,
			handleInternshipsChange,
			onSubmit,
			loading,
			data: { technical, quant, internships }
		} = this.props
		const profile = (
			<Profile
				loading={loading}
				onSubmit={onSubmit}
				initialValues={this.props.data}
				onTechnicalChange={handleTechnicalChange}
				technical={technical}
				onQuantChange={handleQuantChange}
				quant={quant}
				onInternshipsChange={handleInternshipsChange}
				internships={internships}
			/>
		)
		return (
			<div className="alt-tab-container">
				<Tabs large={true} animate={true} id="homepgae" onChange={this.onTabChange} selectedTabId={this.state.currTab}>
					<Tab id="profile" title="profile" panel={profile} />
					<Tab id="test" title="Test" panel={<Test />} />
				</Tabs>
			</div>
		)
	}

	onTabChange = (currTab) => this.setState({ currTab })
}

export default Home
