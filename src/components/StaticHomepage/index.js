import React, { Component } from 'react'
import { Button, Card, Divider, Elevation, Tab, Tabs, Icon } from '@blueprintjs/core'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { AltField } from '../UIComponents/InputTypes'
import { AltButton } from '../UIComponents/Button'
import { AltTextArea } from '../UIComponents/TextArea'
import { required, email } from '../UIComponents/validate'
import pawan from './images/Pavan Sathiraju photo.jpeg'
import akshat from './images/akshat.jpg'
import './style.scss'

class Homepage extends Component {
	state = {
		currTab: 'corporates'
	}
	onTabChange = (currTab) => this.setState({ currTab })
	onCorporation = () => this.setState({ currTab: 'corporates' })
	onStudent = () => this.setState({ currTab: 'students' })
	render() {
		const { handleSubmit } = this.props
		const Corporates = (
			<div className="cards">
				<Card className="half-card left-align" elevation={Elevation.TWO} interactive={true}>
					<h3>Campus Hiring Partners</h3>
					<div className="wodosection">
						<div className="about-member-data">
							<Icon icon="tick-circle" iconSize={60} intent="primary" />
							<p>Conduct initial assessments and shortlist eligible candidates before you step into the campus</p>
						</div>
						<div className="about-member-data">
							<Icon icon="people" iconSize={60} intent="primary" />
							<p>Continuous engagement of the students even after offer roll out to minimize drop offs.</p>
						</div>
					</div>
				</Card>
				<Card className="half-card left-align" elevation={Elevation.TWO} interactive={true}>
					<h3>On-demand Freshers Hiring</h3>
					<div className="wodosection">
						<div className="about-member-data">
							<Icon icon="search-template" iconSize={60} intent="primary" />
							<p>Assess freshers at various college campuses to fulfill your immediate / bulk requirements.</p>
						</div>
						<div className="about-member-data">
							<Icon icon="phone" iconSize={60} intent="primary" />
							<p>
								Bot interviews candidates and analyses the call screening large pool of freshers, saving time & effort
								for recuiters.
							</p>
						</div>
					</div>
				</Card>
			</div>
		)
		const Students = (
			<div className="cards">
				<Card className="half-card left-align" elevation={Elevation.TWO} interactive={true}>
					<h3>Student Engagement</h3>
					<div className="wodosection">
						<div className="about-member-data">
							<Icon icon="id-number" iconSize={60} intent="primary" />
							<p>
								We coach students on 1-1 basis while preparing for campus placements (e.g. management consulting, public
								policy, technology)
							</p>
						</div>
						<div className="about-member-data">
							<Icon icon="people" iconSize={60} intent="primary" />
							<p>We introduce and get students acquainted with 21st century skills.</p>
						</div>
					</div>
				</Card>
				<Card className="half-card left-align" elevation={Elevation.TWO} interactive={true}>
					<h3>Campus Activities</h3>
					<div className="wodosection">
						<div className="about-member-data">
							<Icon icon="search-template" iconSize={60} intent="primary" />
							<p>
								We energize students by helping them understand the various industries and carrier choices that are
								available.
							</p>
						</div>
						<div className="about-member-data">
							<Icon icon="highlight" iconSize={60} intent="primary" />
							<p>We conduct employability improvement workshops and mock interviews on campuses.</p>
							<br />
						</div>
					</div>
				</Card>
			</div>
		)
		return (
			<div>
				<section id="home" data-stellar-background-ratio="0.5">
					<div className="overlay" />
					<div className="container">
						<div className="home-info">
							<h1>
								Transforming campus placements for <span onClick={this.onCorporation}>Corporations</span> &{' '}
								<span onClick={this.onStudent}>Students</span>
							</h1>
							<Link to="/signup">
								<Button rightIcon="arrow-right" intent="success" text="Signup to get started" large={true} />
							</Link>
						</div>
					</div>
				</section>
				<div className="whatwedo">
					<div className="heading">
						<h2>What we do</h2>
					</div>
					<Divider />
					<div className="work">
						<Tabs
							large={true}
							animate={true}
							id="whatwedo"
							onChange={this.onTabChange}
							selectedTabId={this.state.currTab}>
							<Tab id="corporates" title="Corporates" panel={Corporates} />
							<Tab id="students" title="Students" panel={Students} />
						</Tabs>
					</div>
				</div>
				<section>
					<div className="overlay" />
					<div className="whatwedo">
						<div className="heading">
							<h2>Our Team</h2>
						</div>
						<Divider />
						<div className="cards">
							<Card elevation={Elevation.TWO} interactive={true} className="half-card">
								<h3>Pavan Sathiraju, CEO</h3>
								<div className="team-members">
									<img src={pawan} alt="pawan" />
									<div className="about-member">
										<p> Background in Management Consulting, Analytics and IT</p>
										<p>Worked with organizations such as McKinsey & Company, Accenture, and MuSigma</p>
										<p>MBA from INSEAD</p>
									</div>
								</div>
							</Card>
							<Card elevation={Elevation.TWO} interactive={true} className="half-card">
								<h3>Akshat Shrivastava, Co-Founder</h3>
								<div className="team-members">
									<img src={akshat} alt="pawan" />
									<div className="about-member">
										<p>Background in Management Consulting, Public Sector Consulting, and Entrepreneurship</p>
										<p>
											{' '}
											Worked with organizations such as the Ministry of Rural Development, Ministry of Finance and
											Dalberg
										</p>
										<p>MBA from INSEAD</p>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</section>
				<div className="contactus">
					<div className="heading">
						<h2>Feel free to drop us a message</h2>
					</div>
					<Divider />
					<form onSubmit={handleSubmit} className="alt-form">
						<div className="alt-form-title">
							<h3>It may take us some time, but we will reply your query</h3>
						</div>
						<Field
							component={AltField}
							label="name"
							name="name"
							placeholder="Enter your name"
							type="text"
							validate={[required]}
							id="name"
						/>
						<Field
							name="email"
							type="email"
							component={AltField}
							label="email"
							validate={[required, email]}
							placeholder="Enter your email"
						/>
						<Field
							name="message"
							component={AltTextArea}
							label="message"
							validate={[required]}
							placeholder="Enter your message or query"
						/>
						<div className="alt-form-btn">
							<AltButton type="submit" text="submit" large={true} />
						</div>
					</form>
				</div>
			</div>
		)
	}
	onInputChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}
}

Homepage = reduxForm({
	form: 'homePage'
})(Homepage)
export default withRouter(connect(null)(Homepage))
