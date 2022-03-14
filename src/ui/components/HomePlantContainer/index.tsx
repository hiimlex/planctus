import React from "react";
import PlantBox from "../PlantBox";
import { SelectedPlant } from "../Sidebar";
import { PLANTS } from "./plants";
import {
	ContainerMain,
	ContainerPlantList,
	ContainerSection,
	ContainerSectionSubtitle,
	ContainerSectionTitle,
} from "./styles";

const HomePlantContainer = () => {
	const plants = PLANTS;

	return (
		<ContainerMain>
			<ContainerSection>
				<ContainerSectionTitle>See All</ContainerSectionTitle>
				<ContainerSectionSubtitle>All your plant's are here</ContainerSectionSubtitle>
			</ContainerSection>
			<ContainerPlantList>
				{plants.map((item: SelectedPlant) => (
					<PlantBox
						key={item.id}
						name={item.name}
						url={item.url}
						id={item.id}
					/>
				))}
			</ContainerPlantList>
		</ContainerMain>
	);
};

export default HomePlantContainer;
