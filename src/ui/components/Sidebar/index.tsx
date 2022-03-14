import { TogglePayload, toggleSidebarAction } from "app/store/actions";
import { RootState } from "app/store/reducers";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { connect } from "react-redux";
import {
	SidebarClose,
	SidebarContainer,
	SidebarContent,
	SidebarDescription,
	SidebarImage,
	SidebarSeeButton,
	SidebarTitle,
} from "./styles";

export type SelectedPlant = {
	id: string;
	name: string;
	url: string;
};

type SidebarProps = {
	isOpen: boolean;
	selectedPlant: null | SelectedPlant;
	toggleSidebar: (value: TogglePayload) => void;
};

const Sidebar = ({ isOpen, selectedPlant, toggleSidebar }: SidebarProps) => {
	const [effect, setEffect] = useState(false);

	const handleToggleSidebar = () => {
		setEffect(true);

		setTimeout(() => {
			toggleSidebar({ isOpen: false, selectedPlant: null });
			setEffect(false);
		}, 200);
	};

	if (!isOpen) {
		return null;
	}

	return (
		<SidebarContainer hide={effect}>
			<SidebarClose onClick={handleToggleSidebar}>
				<MdClose size={18} color="#fff" />
			</SidebarClose>
			{!effect && selectedPlant && (
				<SidebarContent>
					<SidebarImage src={selectedPlant.url} alt="Plant" />
					<SidebarTitle>{selectedPlant.name}</SidebarTitle>
					<SidebarDescription>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
					</SidebarDescription>
				</SidebarContent>
			)}

			<SidebarSeeButton>
				<h3>See More</h3>
			</SidebarSeeButton>
		</SidebarContainer>
	);
};

const mapStateToProps = ({ sidebar }: RootState) => ({
	isOpen: sidebar.isOpen,
	selectedPlant: sidebar.selectedPlant,
});

const mapDispatchToProps = (dispatch: any) => ({
	toggleSidebar: (value: TogglePayload) => dispatch(toggleSidebarAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
