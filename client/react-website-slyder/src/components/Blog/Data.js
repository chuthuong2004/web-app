import blog6 from '../Images/blog6.jpg'
import blog7 from '../Images/blog7.jpg'
import blog8 from '../Images/blog8.jpg'
import blog9 from '../Images/blog9.jpg'
import blog10 from '../Images/blog10.jpg'
import blog11 from '../Images/blog11.jpg'
import blog12 from '../Images/blog12.jpeg'

const Data = [
    {   
        img: blog6,
        id: '1',
        title: 'Những mẫu áo đẹp',
        date: '07/12/2021',
        content: 'Sản phẩm áo hoodie của Slyder tối ưu những đặc điểm vượt trội về....'
    },

    {
        img: blog7,
        id: '2',
        title: 'Slyder Tee Signature....',
        date: '14/06/2021',
        content: 'SLYDER TEE SIGNATURE - Một phiển bản áo thun streetwear ma.....'
    },

    {
        img: blog8,
        id: '3',
        title: 'Cả thế giới thu lại bằ...',
        date: '09/02/2021',
        content: 'Đây là một trong những sản phẩm ví đựng tiền đầu tiên của SLYDER....'
    },
    {
        img: blog9,
        id: '3',
        title: 'Cả thế giới thu lại bằ...',
        date: '09/02/2021',
        content: 'Đây là một trong những sản phẩm ví đựng tiền đầu tiên của SLYDER....'
    },
    {
        img: blog10,
        id: '3',
        title: 'Cả thế giới thu lại bằ...',
        date: '09/02/2021',
        content: 'Đây là một trong những sản phẩm ví đựng tiền đầu tiên của SLYDER....'
    },
    {
        img: blog11,
        id: '3',
        title: 'Cả thế giới thu lại bằ...',
        date: '09/02/2021',
        content: 'Đây là một trong những sản phẩm ví đựng tiền đầu tiên của SLYDER....'
    },
    {
        img: blog12,
        id: '3',
        title: 'Các khái niệm thườn...',
        date: '09/02/2021',
        content: 'Thời trang đường phố Việt Nam phát triển với sự xuất hiện của...'
    },
]

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

export default Data