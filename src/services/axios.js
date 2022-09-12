import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "mongodb://127.0.0.1:27017";
let token = "";
const navigate = useNavigate;
async function tryLogin(user) {
	axios
		.post(`${API}/sing-in`, user)
		.then((response) => {
			token = response.data.token;
			return token;
		})
		.catch((err) => {
			console.error(err);
		});
}

async function tryCad(user) {
	axios
		.post(`${API}/sing-up`, user)
		.then(navigate("/sing-in"))
		.catch((err) => {
			console.error(err);
		});
}
async function getUserTransactions(user) {
  axios.get(`${API}`, user).then(

  )
}

export { token, tryLogin, tryCad, getUserTransactions };
