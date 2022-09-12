import axios from "axios";
import { useState } from "react";


  
  const [token, setToken] = useState("");
  
  async function tryLogin(user) {
    axios
		.post("localhost/3000", user)
		.then((response) => {
      setToken(response.data.token);
			return token;
		})
		.catch((err) => {
      console.error(err);
		});
  }

async function tryCad(user) {
    
  }

    
export { tryLogin };
