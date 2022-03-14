import { SelectedPlant } from "ui/components/Sidebar";

export type SidebarActions = "TOGGLE_SIDEBAR";

export type SidebarActionsGeneral = {
	type: SidebarActions;
	payload: any;
};

export type SidebarState = {
	isOpen: boolean;
	selectedPlant: null | SelectedPlant;
};

const INITIAL_STATE: SidebarState = {
	isOpen: false,
	selectedPlant: null,
};

export const sidebarReducer = (
	state = INITIAL_STATE,
	action: SidebarActionsGeneral
) => {
	switch (action.type) {
		case "TOGGLE_SIDEBAR":
			return {
				...state,
				isOpen: action.payload.isOpen,
				selectedPlant: action.payload.selectedPlant,
			};
		default:
			return state;
	}
};
