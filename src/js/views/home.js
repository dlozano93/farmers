import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import { UncontrolledCarousel } from "reactstrap";
import { FarmCard } from "../component/farmcard";
import { Context } from "../store/appContext";

const items = [
	{
		src: "https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg",
		altText: "Slide 1",
		caption: "Slide 1",
		header: "Slide 1 Header",
		key: "1"
	},
	{
		src: "https://data.whicdn.com/images/136308450/original.jpg",
		altText: "Slide 2",
		caption: "Slide 2",
		header: "Slide 2 Header",
		key: "2"
	},
	{
		src:
			"https://66.media.tumblr.com/d2326936f4b82d3b99ce2e1da8dc5ba9/6fb2ff3a0c1dfc45-ed/s400x600/e452ede2ee56d315161f82e06a22755c537f6a95.jpg",
		altText: "Slide 3",
		caption: "Slide 3",
		header: "Slide 3 Header",
		key: "3"
	}
];

export const Home = () => {
	let list = [
		{
			card: "Farmer",
			name: "The Farmer's Guild",
			image: "https://66.media.tumblr.com/cfe5606054b88f6b226893b497d1d9f5/tumblr_miyc1mU9111qao0rfo1_400.jpg",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
			buttonLink: "https://www.farmers.gov/",
			id: 1
		}
	];
	const [state, setState] = useState({
		showModal: false,
		index: null
	});
	const { store, actions } = useContext(Context);
	return (
		<div>
			<UncontrolledCarousel items={items} />
			<div>
				Mission Statement: To become a platform where every grower in the state of Florida is welcomed to sell
				their produce and connect to consumers making an effortless experience.
			</div>
			<h2>Featured Farms:</h2>
			<div className="card-group d-flex justify-content-around">
				{store.randomListWithThreeItems.map((item, index) => {
					return (
						<FarmCard
							key={index}
							index={index}
							name={item.name}
							location={item.location}
							logo={item.logo.sizes.medium}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
