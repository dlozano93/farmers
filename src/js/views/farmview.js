import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Farmview = props => {
	const { store, actions } = useContext(Context);

	let farm = store.allFarms.length > 0 ? store.allFarms[props.match.params.index] : {};

	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<div className="row">
						<div className="col py-auto">
							<h1 className="display-4">{farm.name}</h1>
							<p className="lead">{farm.description}</p>
						</div>
						<div className="col-sm-auto d-flex justify-content-center">
							<img src={farm.logo && farm.logo.sizes.medium} />
						</div>
					</div>
				</div>
			</div>
			<div className="text-center mt-5">
				<p>
					<img src={farm.logo && farm.logo.sizes.medium} />
				</p>
				<h2>{farm.location}</h2>
				<h3>{farm.address}</h3>
				<h3>{farm.products}</h3>
				<h3>
					<a href={farm.web}>{farm.web}</a>
				</h3>
				<h3>{farm.phone}</h3>
			</div>
		</>
	);
};
Farmview.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
