import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import {
	HeaderContainer,
	HeaderInput,
	HeaderInputGroup,
	HeaderLeft,
	HeaderTitle,
	InputSuffix,
} from "./styles";

const HomeHeader = () => {
	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderTitle>Planctus</HeaderTitle>
			</HeaderLeft>
			<HeaderInputGroup>
				<InputSuffix>
					<HiOutlineSearch
						size={16}
						color="#1b2317"
						style={{ cursor: "pointer" }}
					/>
				</InputSuffix>
				<HeaderInput type="text" placeholder="Search" />
			</HeaderInputGroup>
		</HeaderContainer>
	);
};

export default HomeHeader;
