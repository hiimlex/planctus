import {
	TogglePayload,
	toggleSidebarAction,
} from "app/store/actions/toggleSidebarAction";
import React from "react";
import { connect } from "react-redux";
import {
	PlantBoxContainer,
	PlantBoxImage,
	PlantBoxInformation,
	PlantBoxInformationDescription,
	PlantBoxInformationTitle,
} from "./styles";

type PlantBoxProps = {
	toggleSidebar: (value: TogglePayload) => void;
	name: string;
	url: string;
	id: string;
};

const PlantBox = ({ name, id, url, toggleSidebar }: PlantBoxProps) => {
	const handleToggleSidebar = () => {
		toggleSidebar({
			isOpen: true,
			selectedPlant: { id, name, url },
		});
	};

	return (
		<PlantBoxContainer onClick={handleToggleSidebar}>
			<PlantBoxImage src={url} />
			<PlantBoxInformation>
				<PlantBoxInformationTitle>{name}</PlantBoxInformationTitle>
				<PlantBoxInformationDescription>
					A common plant, usually a shrub or small tree, of the genus
				</PlantBoxInformationDescription>
			</PlantBoxInformation>
		</PlantBoxContainer>
	);
};

const mapDispatchToProps = (dispatch: any) => ({
	toggleSidebar: (value: TogglePayload) => dispatch(toggleSidebarAction(value)),
});

export default connect(null, mapDispatchToProps)(PlantBox);
