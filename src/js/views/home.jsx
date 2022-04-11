import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const [item, setItem] = useState("");
	const [list, setList] = useState([]);

	
	const cross = (index) => {
		let crossOut = [...list];
		crossOut[index].done = !crossOut[index].done;
		setList(crossOut);
	};

	const addItem = (secitem) => {
		let seclist = [...list, { label: secitem, done: false }];
		setList(seclist) 
	}
	const sent = (del) => {
		const dele = list.filter((lists, index) => index !== del);
		setList(dele);
	}
	const { store, actions } = useContext(Context)
	return (
		<>
			<div>
				<h1>Data</h1>
			</div>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="What's next?"
					onChange={(e) => setItem(e.target.value)}
					value={item}
				/>
				<a
					onClick={() => {
						if (item !== "") {
							addItem(item);
							setItem(" ");
						}
					}}
					type="button"
					className="btn btn-primary"
					id="basic-addon1">
					Button
				</a>
			</div>
			<div>
				{store.list.map((lists, index) => {
					return (
						<li key={index}>
								<span
									className={
										lists.done ? "crossed-line" : ""
									}>
									{lists.label}
								</span>
								<button
									type="button"
									onClick={() => cross(index)}>
									done
								</button>
								<button
									type="button"
									className="btn btn-danger"
									onClick={() => {
										sent(index);
									}}>
									X
								</button>
							</li>
					);
				})}
			</div>
		</>
	);

};

export default Home;