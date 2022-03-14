import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	width: calc(100% - 24px);
	margin: 12px;
	padding: 12px;
	border-radius: 12px;
`;

export const HeaderLeft = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	* {
		margin-right: 12px;
	}
`;

export const HeaderTitle = styled.h2`
	color: ${({ theme }) => theme.colors.secondary};
	font-weight: bold;
`;

export const HeaderInput = styled.input`
	max-width: 520px;
	width: 100%;
	border-radius: 0 12px 12px 0;
	padding: 12px;
	height: 40px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
	background: ${({ theme }) => theme.colors.input};
	border: none;
	font-family: "Poppins", sans-serif;
`;

export const HeaderInputGroup = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const InputSuffix = styled.div`
	height: 40px;
	width: 48px;
	border-radius: 12px 0 0 12px;
	background: ${({ theme }) => theme.colors.input};
	display: flex;
	align-items: center;
	justify-content: center;
`;
