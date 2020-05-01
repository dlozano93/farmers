import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { FarmCard } from "../component/farmcard";
import { Context } from "../store/appContext";
import "../../styles/farms.scss";

export const Farms = () => {
	const [state, setState] = useState({
		showModal: false,
		index: null
	});
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="jumbotron jumbotron-fluid text-white orangefarm">
				<div className="container">
					<h1 className="header-text display-4">{"Local Florida Farms"}</h1>
					<p className="header-text lead">{"Below you'll find a selection of local farms in Florida"}</p>
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
