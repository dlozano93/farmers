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
				<img
					src="https://ei.marketwatch.com/Multimedia/2019/02/26/Photos/ZQ/MW-HE601_farm_0_20190226111522_ZQ.jpg?uuid=b78f892e-39e1-11e9-8429-ac162d7bc1f7"
					className="img-fluid"
					alt="Responsive image"
				/>
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
			<div className="text-center mt-5">
				<h1>Farm Profile will be Here</h1>
				<p>
					<img src={farm.logo && farm.logo.sizes.medium} />
				</p>
				<h1>{farm.name}</h1>
				<p>{farm.description}</p>
				<h2>{farm.location}</h2>
				<h3>{farm.address}</h3>
				<h3>{farm.products}</h3>
				<h3>{farm.web}</h3>
				<h3>{farm.phone}</h3>
			</div>
		</>
	);
};
Farmview.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
