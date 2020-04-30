import { get } from "http";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allFarms: [],
			randomListWithThreeItems: []
		},
		actions: {
			getAllFarms: () => {
				fetch("https://8080-ea518b00-ea49-4c5a-a1c0-1e4f37b6cdf7.ws-us02.gitpod.io/wp-json/sample_api/v1/farms")
					.then(resp => resp.json())
					.then(data => {
						data.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
						const random = () => Math.floor(Math.random() * data.length);
						let ranList = [],
							itemList = [];
						let ran = random();
						while (ranList.length < 3)
							if (!ranList.includes(ran)) {
								ranList.push(ran);
								itemList.push(data[ran]);
							} else ran = random();
						setStore({
							allFarms: data,
							randomListWithThreeItems: itemList
						});
					});
			}
		}
	};
};

export default getState;
