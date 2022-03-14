import styled from "styled-components";

export const ContainerPlantList = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	width: 100%;
`;

export const ContainerMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	width: 100%;
	color: ${({ theme }) => theme.colors.text};
	padding: 0 24px;
`;

export const ContainerSection = styled.div`
	display: flex;
	flex-direction: column;

	margin-bottom: 18px;
`;

export const ContainerSectionTitle = styled.h1``;

export const ContainerSectionSubtitle = styled.span`
	font-size: 1.6vw;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.text};
`;
