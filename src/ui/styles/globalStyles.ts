import { createGlobalStyle } from "styled-components";

export const global = createGlobalStyle`
	body {
		width: 100vw;
		height: 100vh;

		font-family: 'Poppins', sans-serif;

		font-size: 1.1vw;
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
`;
