import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { Card } from "../component/card";

const items = [
	{
		src: "https://66.media.tumblr.com/86efa06ecc187f1f0116b84e6c90f5d1/tumblr_oa44lpQf7E1qg2ny5o1_500.jpg",
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

	return (
		<div>
			<UncontrolledCarousel items={items} />
			<div>This will be the section we add Brunos mission statement for the Company</div>
			<div className="card-group d-flex justify-content-around">
				{list.map((item, index) => {
					return (
						<Card
							key={index}
							ximage={item.image}
							xtext={item.text}
							xbuttonLink={item.buttonLink}
							xid={item.id}
							xname={item.name}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
