import React, { useState } from 'react';
import { data, sliderSettings } from '../Evaluate/data';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
} from './Evaluate.elements';

const Carousel = () => {
	const [setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="center"  padding="4rem 0rem" opacity="0.8" wrap="wrap">
				<Heading width="auto" fontsize="1.8rem" inverse>
					Comment
				</Heading>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.8rem" margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;
