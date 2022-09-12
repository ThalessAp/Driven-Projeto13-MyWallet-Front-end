import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../public/MyWallet.svg";
import { tryCad } from "../services/axios";

function SingUp() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	function singUp() {
		// eslint-disable-next-line no-restricted-globals
		event.preventDefault();
		tryCad(user);
	}

	return (
		<>
			<StyledHome>
				<StyledLogo className="logo">
					<Logo />
				</StyledLogo>
				<StyledForm onSubmit={singUp}>
					<input
						type="text"
						placeholder="Nome"
						value={user.name}
						onChange={(e) => setUser(e.target.value)}
					/>
					<input
						type="email"
						placeholder=" E-mail"
						value={user.email}
						onChange={(e) => setUser(e.target.value)}
					/>
					<input
						type="password"
						placeholder=" Senha"
						value={user.password}
						onChange={(e) => setUser(e.target.value)}
					/>
					<input
						type="password"
						placeholder=" Confirme a senha"
						value={user.password}
						onChange={(e) => setUser(e.target.value)}
					/>

					<button type="submit" >
						Cadastrar
					</button>
				</StyledForm>
				<StyledLink>
					<Link to="/sing-in">Já tem uma conta? Entre agora!</Link>
				</StyledLink>
			</StyledHome>
		</>
	);
}

export default SingUp;

const StyledHome = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
`;

const StyledLogo = styled.div`
	width: 147px;
	height: 50px;
	color: white;
	margin-bottom: 30px;
`;

const StyledForm = styled.form`
	width: 90%;
	input {
		font-weight: 400;
		font-size: 20px;
		height: 60px;
		border-radius: 5px;
		background: #ffffff;
		margin-bottom: 15px;
	}
	button {
		height: 50px;
		background: #a328d6;
		border-radius: 5px;

		font-weight: 700;
		font-size: 20px;
		color: #ffffff;

		cursor: pointer;
	}
`;

const StyledLink = styled.div`
	font-weight: 700;
	font-size: 15px;
	color: #ffffff;
	margin-top: 35px;

	a {
		cursor: pointer;
	}
`;
