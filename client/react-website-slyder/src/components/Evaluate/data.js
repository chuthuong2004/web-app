import Pic1 from '../Images/pic1.png'
import Pic2 from '../Images/pic2.png'
import Pic3 from '../Images/pic3.png'
import Pic4 from '../Images/pic4.png'
import Pic5 from '../Images/pic5.png'

export const data = [
	{
		title: 'Tuan Nguyen',
		description:'Sản phẩm rất đẹp và chất lượng đáng đồng tiền',
		image: Pic1,
	},
	{
		title: 'Van Thuong ',
		description: 'Sản phẩm rất đẹp và chất lượng đáng đồng tiền',
		image: Pic2,
	},
	{
		title: 'Long',
		description: 'Sản phẩm rất đẹp và chất lượng đáng đồng tiền',
		image: Pic3,
	},
	{
		title: 'Van Hanh',
		description: 'Sản phẩm rất đẹp và chất lượng đáng đồng tiền',
		image: Pic4,
	},
	{
		title: 'Toan',
		description: 'Sản phẩm rất đẹp và chất lượng đáng đồng tiền',
		image: Pic5,
	},
];

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
				slidesToShow: 1,
			},
		},
	],
};
