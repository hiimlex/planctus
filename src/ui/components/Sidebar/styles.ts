import styled from "styled-components";

export const SidebarContainer = styled.div<{ hide: boolean }>`
	z-index: 4;
	width: 280px;
	height: 100vh;
	background: ${({ theme }) => theme.colors.primary};
	box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.2);
	position: relative;

	border-radius: 34px 0 0 34px;

	@keyframes openSidebar {
		from {
			width: 0;
		}
		to {
			width: 280px;
		}
	}

	@keyframes closeSidebar {
		from {
			width: 280px;
		}
		to {
			width: 0;
		}
	}

	${({ hide }) =>
		hide
			? `
		animation: closeSidebar 0.2s forwards ease-in-out;
	`
			: `animation: openSidebar 0.2s forwards ease-in-out;`}
`;

export const SidebarClose = styled.div`
	position: absolute;
	top: 24px;
	left: 24px;
	cursor: pointer;
	width: fit-content;
	height: fit-content;
`;

export const SidebarContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	text-align: justify;

	padding: 18px;

	height: 100%;
`;

export const SidebarImage = styled.img`
	width: 14vw;
	height: auto;
	align-self: center;
	margin: 8px 0;
	filter: drop-shadow(0 8px 3px rgba(0, 0, 0, 0.3));
`;

export const SidebarTitle = styled.h2`
	color: ${({ theme }) => theme.colors.textAlt};
`;

export const SidebarSeeButton = styled.button`
	border: none;
	background: ${({ theme }) => theme.colors.secondary};
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 72px;
	border-radius: 48px 0 0 48px;
	color: ${({ theme }) => theme.colors.textAlt};
	font-family: "Poppins";
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.colors.hover};
	}
`;

export const SidebarDescription = styled.h4`
	color: ${({ theme }) => theme.colors.textSecondary};

	font-weight: 400;
`;
