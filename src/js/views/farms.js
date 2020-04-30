import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { FarmCard } from "../component/farmcard";
import { Context } from "../store/appContext";

export const Farms = () => {
	const [state, setState] = useState({
		showModal: false,
		index: null
	});
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="row ">
					<div className="col w-100 ">
						{store.allFarms.map((item, index) => {
							return (
								<FarmCard
									key={index}
									index={index}
									name={item.name}
									address={item.address}
									location={item.location}
									logo={item.logo.sizes.medium}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
