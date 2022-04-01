import styled from 'styled-components'
import Slider from 'react-slick';


export const Container = styled.div`
    padding: 0 8rem;
    .Content{
        text-align: center;
        margin-top: 6rem;
        opacity: 0.8;

        h1{
            font-size: 1.8rem;
            letter-spacing: 0.2rem;
        }

        .ContentAbout-name{
            margin-top: 0.8rem;
            font-weight: 500;
            letter-spacing: 1px;
        }

        .ContentAbout-From{
            margin-top: 0.8rem;
            font-weight: 700;
            font-family: 'Hurricane', cursive;
            font-size: 1.8rem;
        }
    }

    .blogsweets{
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2rem 8rem;
    }
`



export const BlogIcon = styled.div`
    justify-content: space-around;
    display: flex;
    font-size: 1.8rem;
    opacity: 0.4;
    display: none;
    .BsLeft{
        position: absolute;
        top: 50%;left: 0;
        margin-left: 16rem;
    }
        
    .BsRight{
        position: absolute;
        top: 50%;right: 0;
        margin-right: 16rem;
    }
`

export const ReviewSlider = styled(Slider)`
	width: 100%;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    :active{
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }
	.slick-track {
		display: flex;
		padding: 30px;
		gap: 1rem;
	}
	.slick-slide {
		display: flex;
		justify-content: space-around;
		margin-bottom: 1;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const ImgBlogl = styled.div`
    display: flex;
`

export const CrouseImg = styled.img`
    display: block;
`

export const ImgShow = styled.div`
    
`

export const Bloglnext = styled.div`
    margin-top: 12px;
    font-size: 0.7rem;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
`

export const BloglCourse = styled.div`
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 6px;
`

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
			},
		},
	],
};

