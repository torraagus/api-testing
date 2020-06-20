import mockAxios from "axios";
import { usersApi } from "./services/users-api";

describe("api testing", () => {
	test("should call axios and return users", async () => {
		mockAxios.get.mockImplementationOnce(() =>
			Promise.resolve({
				data: [
					{
						_id: "1010201",
						name: "Federico",
					},
					{
						_id: "1010253",
						name: "Manuel",
					},
				],
			})
		);

		const users = await usersApi();
		expect(mockAxios.get).toHaveBeenCalledTimes(1);
		expect(mockAxios.get).toHaveBeenCalledWith(
			"http://localhost:3001/api/users"
		);
		expect(users.length).toBe(2);
		expect(users[0]._id).toEqual("1010201");
		expect(users[0].name).toEqual("Federico");
	});
});

// test("renders learn react link", () => {
// 	const { getByText } = render(<App />);
// 	const linkElement = getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });
