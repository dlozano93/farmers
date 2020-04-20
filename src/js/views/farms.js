import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { FarmCard } from "../component/farmcard";

export const Farms = () => (
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
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
					<FarmCard />
				</div>
			</div>
		</div>
	</>
);
