import Server from "../services/server";
import PropTypes from "prop-types";

class UsersAPI {
	static async getUsers() {
		return await Server.sendGet({
			url: `https://jsonplaceholder.typicode.com/users`,
		});
	}

	static async getUser(options) {
		return await Server.sendGet({
			url: `https://jsonplaceholder.typicode.com/users/${options.userId}`,
		});
	}
}

export const UserShape = PropTypes.shape({
	id: PropTypes.number,
	name: PropTypes.string,
	username: PropTypes.string,
	email: PropTypes.string,
	address: PropTypes.shape({
		street: PropTypes.string,
		suite: PropTypes.string,
		city: PropTypes.string,
		zipcode: PropTypes.string,
		geo: PropTypes.shape({
			lat: PropTypes.string,
			lng: PropTypes.string,
		}),
	}),
	phone: PropTypes.string,
	website: PropTypes.string,
	company: PropTypes.shape({
		name: PropTypes.string,
		catchPhrase: PropTypes.string,
		bs: PropTypes.string,
	}),
});

export default UsersAPI;
