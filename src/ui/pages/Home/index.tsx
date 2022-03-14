import React from "react";
import HomeHeader from "../../components/HomeHeader";
import HomePlantContainer from "../../components/HomePlantContainer";
import { HomeContainer, HomeContent } from "./styles";

const Home = () => (
	<HomeContainer>
		<HomeContent>
			<HomeHeader />
			<HomePlantContainer />
		</HomeContent>
	</HomeContainer>
);

export default Home;
