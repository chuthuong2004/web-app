import React, {useState} from 'react'
import { 
    Container, 
    BlogIcon, 
    ReviewSlider,
    ImgBlogl,
    CrouseImg,
    ImgShow,
    BloglCourse,
    Bloglnext,
    sliderSettings,
} from './Blog.element'
import {BsFillCaretRightFill, BsFillCaretLeftFill} from 'react-icons/bs'
import {FcCalendar} from 'react-icons/fc'
import data from './Data'
import dataOfficail from './DataOfficail'
import { TextBlogl } from '../../globalStyles'

const Blog = () => {

    const [setSliderRef] = useState(null);

    return (
    <>
        <Container>
            <div className='Content'>
                <div className='ContentAbout'>
                    <h1>SLYDER OFFICIAL</h1>
                    <p className='ContentAbout-name'>Hình ảnh lưu trữ những điều nổi bật nhất từ Slyder.</p>
                </div>
            </div>
            <div className='ImagesIcon'>
                <ReviewSlider {...sliderSettings} ref={setSliderRef}>
                    {dataOfficail.map((course, index) => (
                        <ImgShow>
                            <ImgBlogl key={index}>
                                <CrouseImg src = {course.images} height="400px" width="400px"/>
                            </ImgBlogl>
                        </ImgShow>
                    ))}
                </ReviewSlider>
    
                <BlogIcon>
                    <BsFillCaretLeftFill className='BsLeft'/>
                    <BsFillCaretRightFill className='BsRight' />
                </BlogIcon> 
            </div>
        </Container>    

        <Container>
            <div className='Content'>
                <div className='ContentAbout'>
                    <h1>BLOGL</h1>
                    <p className='ContentAbout-name'>Hành trình của Slyder.</p>
                </div>
            </div>

            <ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((course, index) => (
                    <ImgShow>
					<ImgBlogl key={index}>
                        <CrouseImg src = {course.img} height="200px" width="200px"/>
                        <BloglCourse>
                            <TextBlogl size="1.2rem"  weight="bold">
                                {course.title}
                            </TextBlogl>
                            <TextBlogl color="#A9A9A9" size="0.8rem" margin="12px 0">
                                <FcCalendar />
                                {course.date}
                            </TextBlogl>
                            <TextBlogl>
                                {course.content}
                            </TextBlogl>
                            <Bloglnext>Xem Thêm</Bloglnext>
                        </BloglCourse>
                    </ImgBlogl></ImgShow>
				))}
			</ReviewSlider>
        </Container>
    </>
  )
}

export default Blog
