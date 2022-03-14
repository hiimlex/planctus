import { combineReducers } from "redux";
import { sidebarReducer, SidebarState } from "./sidebarReducer";

export type RootState = { sidebar: SidebarState };

export const Reducers = combineReducers<RootState>({ sidebar: sidebarReducer });
