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
						let getRandomNumberFromListLength = () => {
							Math.floor(Math.random() * data.length);
						};
						let randomList = [];
						let ran = getRandomNumberFromListLength();
						while (randomList.length < 3) {
							if (!randomList.includes(ran)) randomList.push(ran);
							else ran = getRandomNumberFromListLength();
						}
						let newList = [oldList[randomList[0]], oldList[randomList[1]], oldList[randomList[2]]];
						setStore({ randomListWithThreeItems: newList });
						console.log("new" + newList);
						data.sort((a, b) => {
							if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
							return -1;
						});
						setStore({ allFarms: data });
						console.log(data);
					});
			}
		}
	};
};

export default getState;
