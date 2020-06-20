import React, { useEffect } from "react";
import "./App.css";
import { usersApi } from "./services/users-api";

function App() {
	useEffect(() => {
		usersApi()
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}, []);

	return <div className="App"></div>;
}

export default App;
