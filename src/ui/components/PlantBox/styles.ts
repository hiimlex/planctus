import styled from "styled-components";

export const PlantBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;

	max-width: 220px;
	height: 46vh;
	margin: 48px 0;
	margin-right: 18px;

	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.textAlt};
	border-radius: 18px;
	cursor: pointer;

`;

export const PlantBoxImage = styled.img`
	width: 14vw;
	max-width: 172px;
	min-width: 148px;
	height: auto;
	align-self: center;
	filter: drop-shadow(0 8px 3px rgba(0, 0, 0, 0.3));
`;

export const PlantBoxInformation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	padding: 18px;
`;

export const PlantBoxInformationTitle = styled.h3`
	color: ${({ theme }) => theme.colors.textAlt};
	font-weight: 700;
`;

export const PlantBoxInformationDescription = styled.p`
	color: ${({ theme }) => theme.colors.textSecondary};
	font-weight: 400;
`;
