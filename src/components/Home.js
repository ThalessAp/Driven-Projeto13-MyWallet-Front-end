import { useEffect, useState } from "react";
import { getUserTransactions, token } from "../services/axios";
import LogOut from "../../public/logout.svg";

function HomePage() {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const [user, setUser] = useState({});

	useEffect(() => {
		const req = getUserTransactions(config);
		req.then((res) => {
			setUser(res.data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="header">
				<div className="Nome">Olá, {user.user}</div>
				<LogOut />
			</div>

			<div className="main">
				{user.entrys.length > 0
					? user.entrys.map((entry) => {
							return (
								<>
									<div>
										{entry.time}
										{entry.description}
										{entry.type === "plus"
											? ` ${entry.value} `
											: `${entry.value}`}
									</div>
								</>
							);
					  })
					: ` Não há registros de entrada ou saída `}
			</div>
		</>
	);
}

export default HomePage;
