import { Link } from "react-router-dom";
import { tryLogin } from "../services/axios";
import Logo from "../../public/MyWallet.svg";
import styled from "styled-components";


function Login() {
	return (
		<>
			<StyledHome>
				<StyledLogo className="logo">
					<Logo />
				</StyledLogo>
				<StyledForm>
					<input type="email" placeholder=" E-mail" />
					<input type="password" placeholder=" Senha" />
					<button type="submit" onClick={tryLogin}>
						Entrar
					</button>
				</StyledForm>
				<StyledLink>
					<Link to="/login">Primeira vez? Cadastre-se!</Link>
				</StyledLink>
			</StyledHome>
		</>
	);
}

export default Login;

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
  margin-bottom: 25px;
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
