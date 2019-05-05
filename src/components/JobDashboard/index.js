import React from 'react'
import { HTMLTable } from '@blueprintjs/core'

const JobDashboard = (props) => {
	return (
		<div className="alt-table">
			<HTMLTable striped={true} interactive={true}>
				<thead>
					<tr>
						<th>Date</th>
						<th>Profile</th>
						<th>Company</th>
						<th>Application Status</th>
						<th>No. of Applicants</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Blueprint</td>
						<td>CSS framework and UI toolkit</td>
						<td>Sass, TypeScript, React</td>
					</tr>
					<tr>
						<td>TSLint</td>
						<td>Static analysis linter for TypeScript</td>
						<td>TypeScript</td>
					</tr>
					<tr>
						<td>Plottable</td>
						<td>Composable charting library built on top of D3</td>
						<td>SVG, TypeScript, D3</td>
					</tr>
				</tbody>
			</HTMLTable>
		</div>
	)
}

export default JobDashboard
