import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/farmview.scss";

export const Farmview = props => {
	const { store, actions } = useContext(Context);

	let farm = store.allFarms.length > 0 ? store.allFarms[props.match.params.index] : {};

	return (
		<>
			<div className="jumbotron text-white jumbotron-fluid wheatfarm">
				<div className="container">
					<div className="row">
						<div className="col py-auto">
							<h1 className="header-text display-4">{farm.name}</h1>
							<p className="header-text lead">{farm.description}</p>
						</div>
						<div className="col-sm-auto d-flex justify-content-center">
							<img src={farm.logo && farm.logo.sizes.medium} />
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-1" />
				<div className="col">
					<p>{farm.name + " is located at:"}</p>
					<p>{"Address: " + farm.address}</p>
					<p>{farm.location}</p>

					<p>{"Products: " + farm.products}</p>
					<p>
						{"You can find more information here: "}
						<a href={farm.web}>{farm.web}</a>
					</p>
					<p>{"Give them a call here: " + farm.phone}</p>
				</div>
				<div className="col-2">
					<Link className="btn btn-success" to="./">
						{"Go back to farms"}
					</Link>
				</div>
			</div>
		</>
	);
};
Farmview.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
