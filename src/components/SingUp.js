import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../public/MyWallet.svg";

function SingUp() {
	return (
		<>
			<StyledHome>
				<StyledLogo className="logo">
					<Logo />
				</StyledLogo>
				<StyledForm>
					<input type="text" placeholder="Nome" />
					<input type="email" placeholder=" E-mail" />
					<input type="password" placeholder=" Senha" />
					<input type="password" placeholder=" Confirme a senha" />

					<button type="submit" onClick={""}>
						Cadastrar
					</button>
				</StyledForm>
				<StyledLink>
					<Link to="/register">Já tem uma conta? Entre agora!</Link>
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
