import React from "react";
import Sidebar from "ui/components/Sidebar";
import Routes from "./app/routes";
import { global as GlobalStyles } from "./ui/styles/globalStyles";
import { MyTheme } from "./ui/styles/MyTheme";

function App() {
	return (
		<MyTheme>
			<GlobalStyles />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Routes />
				<Sidebar />
			</div>
		</MyTheme>
	);
}

export default App;
