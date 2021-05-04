import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/leaderboardActions";
import PropTypes from "prop-types";
import Navbar from "../layouts/Navbar";
import "../App.css";

const Leaderboard = ({ getUsers, leaderboard }) => {
	useEffect(() => {
		getUsers();
	// eslint-disable-next-line
	}, []);
	return (
		<div className="main-bg">
			<Navbar />
			{!leaderboard.users ? (
				<h1> Loading ...</h1>
			) : (
				<div className="table-container">
					<table className="table table-hover table-dark">
						<thead class="table-header">
							<tr>
								<th scope="col">Rank</th>
								<th scope="col">Name</th>
								<th scope="col">Instituition</th>
								<th scope="col">Level</th>
							</tr>
						</thead>
						<tbody>
							{" "}
							{leaderboard.users.map((detail, index) => (
								<tr key={index + 1}>
									<th scope="row">{index + 1}</th>
									<td>{detail.name}</td>
									<td>{detail.university}</td>
									<td>{detail.atLevel}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

Leaderboard.propTypes = {
	getUsers: PropTypes.func.isRequired,
	leaderboard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	leaderboard: state.leaderboard
});

export default connect(mapStateToProps, { getUsers })(Leaderboard);
