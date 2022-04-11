
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: []
		},
		actions: {
			getData : () => {
				fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/liciagaangelo",{
					method: "GET",
					redirect: "follow",
			    }
			)
					.then((response) => response.json())
					.then((result) => setStore({list : result}))
					.catch((error) => console.log("error", error));

					fetch(
						"https://assets.breatheco.de/apis/fake/todos/user/liciagaangelo",
						{
							method: "PUT",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify(list),
							redirect: "follow",
						}
					)
						.then((response) => {
							response.status === 200 ? setStore(list) : "";
						})
						.catch((error) => console.log("error", error));
						fetch(
							"https://assets.breatheco.de/apis/fake/todos/user/liciagaangelo",
							{
								method: "PUT",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify(dele),
								redirect: "follow",
							}
						)
							.then((response) => {
								response.status === 200 ? setList(dele) : "";
							})
							.catch((error) => console.log("error", error));
			}
		}
	};
};

export default getState;
