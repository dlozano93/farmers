import React from "react";
import PropTypes from "prop-types";

export const Card = props => (
	<div className="card border m-3" style={{ width: 550 }}>
		<img className="card-img-top" src={props.ximage} alt="Classification" />

		<div className="card-body">
			<div className="justify-content-center">
				{/* <div className="card-footer"> */}
				<a href={props.xid} className={props.xbuttonLink} />
				{/* </div> */}
			</div>
			<p className="card-text" />
			<div className="d-flex justify-content-center" />
			<p className="card-text">{props.xtext}</p>
		</div>

		<div className="card-footer">
			<div className="justify-content-center" />
			<a className="btn btn-danger btn-lg" href={props.xbuttonLink} role="button">
				{props.xname}
			</a>
		</div>
	</div>
);

Card.propTypes = {
	xcard: PropTypes.string,
	ximage: PropTypes.string,
	xtext: PropTypes.string,
	xbuttonLink: PropTypes.string,
	xid: PropTypes.number,
	xname: PropTypes.string
};
