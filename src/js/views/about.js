import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const About = () => (
	<div className="text-center mt-5">
		<h1>About us!</h1>
		<div className="container-fluid">
			<div className="row">
				<div className="col-2" />
				<div className="col">
					<img src="https://i.ibb.co/KXfYX83/alo50.png" />
					<p>
						{
							"Is a platform connecting local growers to local consumers. Connecting local farmers, organic farmers, farmers market & aquaponic micro growers. Creating a relationship of trust, helping the microeconomy and allowing consumers to have a healthier and fresher produce."
						}
					</p>
					<h5>
						<b>Vision:</b> Connect every single grower in the state of Florida to consumers and give them
						tools to sell their produce.
					</h5>
					<br />
					<h5>
						<b>Mission Statement:</b> To become a platform where every grower in the state of Florida is
						welcomed to sell their produce and connect to consumers making an effortless experience.
					</h5>
					<br />
					<h5>
						<b>Why and how we came up with the idea?</b> In the beginning of April, we came across a few
						articles talking about all the produce that were going to be left in the field to rot. Farmers
						typically lose between 10% to 12% and this time they would lose about 80%. So we thought, how
						can we connect these farmers and any local growers to sell their produce to consumers? The
						platform ALO which is Nourish in Latin bridges this gap between local growers and consumers. It
						facilitates consumers to register on the platform database and allows consumers to connect and
						order from their local grower. It gives options for consumers to buy fresh, healthy and seasonal
						produce, which in some cases is not easily found at the local grocery store. It gives a broader
						view of what is being produced around them. You can’t buy what you can’t see!
					</h5>
					<br />
				</div>
				<div className="col-2" />
			</div>
		</div>
	</div>
);
