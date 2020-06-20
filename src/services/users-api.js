import axios from "axios";

const usersApi = async () => {
	const res = await axios.get("http://localhost:3001/api/users");
	return res.data;
};

export { usersApi };
