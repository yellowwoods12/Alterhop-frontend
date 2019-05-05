import React, { PureComponent } from 'react'
import './style.scss'

class Footer extends PureComponent {
	render() {
		return (
			<div className="footercontainer">
				<div className="content">
					<p>
						Copyright &copy; 2018 :
						<a rel="nofollow" href="http://alterhop.com" title="Alterhop">
							{' '}
							Alterhop
						</a>
					</p>
				</div>
			</div>
		)
	}
}

export default Footer
