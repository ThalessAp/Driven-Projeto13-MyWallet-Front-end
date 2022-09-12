//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import SingUp from "./components/SingUp";
import NewEntry from "./components/NewEntry.js";

import GlobalStyles from "./GlobalStyle.js";

function App() {
	return (
		
		<>
			<GlobalStyles>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={Home} />
						<Route path="/sing-in" component={Login} />
						<Route path="/sing-up" component={SingUp} />
						<Route path="/entry" component={NewEntry} />
					</Routes>
				</BrowserRouter>
			</GlobalStyles>
		</>
	);
}

export default App;
