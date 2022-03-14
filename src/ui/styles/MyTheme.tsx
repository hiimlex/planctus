import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		text: "#1b2317",
		textAlt: "#ffffff",
		textSecondary: "#cfcfcf",
		gray: "#828282",
		input: "#e3e4ea",
		primary: "#14976a",
		secondary: "#1ebb88",
		hover: "#087a55",
		link: "#fe9f0d",
		background: "#ffffff",
		button: "#252525",
	},
};

export const MyTheme = ({ children }: any) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
