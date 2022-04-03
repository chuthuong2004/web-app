import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';

export const CarouselImage = styled.img`
	width: 50%;
	height: 50%;
	border-radius: 100%;
	object-fit: cover;
	margin-bottom: 8px;
	vertical-align: middle;
`;

export const ImageWrapper = styled.div`
	width: 80%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	outline: none;
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}

	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;

	.slick-track {
		display: flex;
		padding: 30px;
		gap: 1rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}

	@media screen and (max-width: 960px){
		.slick-track{
			padding: 0;
			padding-top: 30px;
		}
	}
`;