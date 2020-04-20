import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/farmcard.scss";

export const FarmCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div
			className="
								d-inline-block
								border
								bg-light
								
								rounded-sm
                                py-2
                                px-2
								my-2
								mx-3
								 text-center">
			<img className="img-thumbnail" src={rigoImage} alt="Card image cap" />
			<br />
			<h2>{"Name"}</h2>

			<span>{"Address: "}</span>
			<br />
			<span>{"Price: "}</span>
			<br />
			<div className="btn btn-success btn-md round">{"More info"}</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
FarmCard.propTypes = {
	// history: PropTypes.object,
	// onOpen: PropTypes.func,
	// price: PropTypes.price,
	// address: PropTypes.address,
	// index: PropTypes.number,
	// name: PropTypes.name,
	// image: PropTypes.image
};

/**
 * Define the default values for
 * your component's properties
 **/
FarmCard.defaultProps = {};
