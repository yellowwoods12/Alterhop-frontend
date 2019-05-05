import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
	Alignment,
	Classes,
	Navbar as BlueprintNavbar,
	NavbarGroup,
	NavbarDivider,
	NavbarHeading,
	Button,
	Icon
} from '@blueprintjs/core'
import './style.scss'

class AltNavbar extends Component {
	state = {
		width: '',
		height: '',
		showNavItems: false,
		display: ''
	}

	componentWillMount() {
		this.updateDimension()
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimension)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimension)
	}

	updateDimension = () => {
		const innerWidth = window.innerWidth
		const innerHeight = window.innerHeight
		if (innerWidth <= 576) {
			this.setState({
				display: 'none'
			})
		}
		this.setState({
			width: innerWidth || window.clientWidth,
			height: innerHeight || window.clientHeight
		})
		this.desktopNavbar()
	}

	toggleMenu = () => {
		const display = this.state.display
		if (display === '') {
			this.setState({
				display: 'none'
			})
		}
		if (display === 'none') {
			this.setState({
				display: ''
			})
		}
	}

	desktopNavbar = () => {
		const { width } = this.state
		if (width >= 576) {
			this.setState({
				display: ''
			})
		}
	}

	render() {
		const { loggedIn, logout } = this.props
		const { display } = this.state

		return (
			<header>
				<div className="alt-navbar-toggle">
					<div className="bp3-navbar-heading alt-title">Alterhop</div>
					<Icon icon="align-justify" iconSize={35} onClick={this.toggleMenu} />
				</div>
				<BlueprintNavbar className="bp3-dark alt-navbar" style={{ display }}>
					<NavbarGroup align={Alignment.LEFT} className="alt-navbar-left">
						<NavbarHeading className="alt-title">Alterhop</NavbarHeading>
					</NavbarGroup>
					<NavbarGroup align={Alignment.RIGHT} className="alt-navbar-right">
						<Link to="/">
							<Button rightIcon="home" text="Home" className={Classes.MINIMAL} />
						</Link>
						<NavbarDivider />
						{loggedIn ? (
							<Button onClick={logout} className={Classes.MINIMAL} icon="log-out" text="logout" id="logout" />
						) : (
							<>
								<Link to="/login/student">
									<Button className={Classes.MINIMAL} rightIcon="arrow-right" text="Student" />
								</Link>
								<Link to="/login/company">
									<Button className={Classes.MINIMAL} rightIcon="arrow-right" text="Company" />
								</Link>
							</>
						)}
						<div className="alt-navbar-bg" />
					</NavbarGroup>
				</BlueprintNavbar>
			</header>
		)
	}
}

export default AltNavbar
