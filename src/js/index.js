//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

<ul>
	<li>
		<a className="active" href="#home">
			Local Farms
		</a>
	</li>
	<li>
		<a className="active" href="#news">
			Farmers Market
		</a>
	</li>
	<li>
		<a className="active" href="#contact">
			Organic Farms
		</a>
	</li>
	<li>
		<a className="active" href="#about">
			Contact
		</a>
	</li>
</ul>;
