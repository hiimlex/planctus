import { SelectedPlant } from "ui/components/Sidebar";
import { SidebarActionsGeneral } from "../reducers/sidebarReducer";

export type TogglePayload = {
	isOpen: boolean;
	selectedPlant: null | SelectedPlant;
};

export const toggleSidebarAction = (
	value: TogglePayload
): SidebarActionsGeneral => ({
	type: "TOGGLE_SIDEBAR",
	payload: { isOpen: value.isOpen, selectedPlant: value.selectedPlant },
});
