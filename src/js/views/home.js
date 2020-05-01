import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import { UncontrolledCarousel } from "reactstrap";
import { FarmCard } from "../component/farmcard";
import { Context } from "../store/appContext";

const items = [
	{
		header: "Newly Designed Farming",
		src: "https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg",
		// altText: "Slide 1",
		// caption: "Slide 1",
		key: "1"
	},
	{
		src: "https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg",
		// altText: "Slide 2",
		// caption: "Slide 2",
		header: "Farm Veggies",
		key: "2"
	},
	{
		src: "https://www.golegal.co.za/wp-content/uploads/2017/10/Fresh-Produce.jpg",
		// "https://images.squarespace-cdn.com/content/v1/5669150a9cadb6552c21494a/1462597946985-ZD0313N5II0OUZUW4GU9/ke17ZwdGBToddI8pDm48kLu-Er-4dNdZra0M11xOJLYUqsxRUqqbr1mOJYKfIPR7Wj4jzmqc6p6rk1DK47rYoqH9veER39_txRNOfzu-Agz2qGF4aeh8SMGSJO_jIt07InPi9iDjx9w8K4ZfjXt2dhqhd8tyOCqSYLQCVr0-rrHm2ReZZwwWqAZ2tt3nY15PCjLISwBs8eEdxAxTptZAUg/LFM_Home_Banner_Image.png?format=1500w",
		// altText: "Slide 3",
		// caption: "Slide 3",
		header: "Explore The Market",
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
