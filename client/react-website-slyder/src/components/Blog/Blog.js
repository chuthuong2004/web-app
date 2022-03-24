import React from 'react'
import { Container, BlogIcon } from '../Blog/Blog.element'
import blog3 from '../Images/blog3.jpg'
import blog4 from '../Images/blog4.jpg'
import blog5 from '../Images/blog5.png'
import {CgCalendarDates} from 'react-icons/cg'
import {BsFillCaretRightFill, BsFillCaretLeftFill} from 'react-icons/bs'
import Data from '../Blog/Data'

const Blog = () => {

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
                <div className='ImagesItem'>
                    <div className='Image'>
                        <img src={blog3} alt="" />
                    </div>

                    <div className='Image'>
                        <img src={blog4} alt="" />
                    </div>

                    <div className='Image'>
                        <img src={blog5} alt="" />
                    </div>  
                </div>
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

            <div className='blogsweets'>
                {Data.map((course) => {
                    return (
                        <course id = "blogl">
                            <img src = {course.img} alt = "/" />
                            <div id = "BloglItems">
                                <h2>{course.title}</h2>
                                <p><CgCalendarDates />{course.date}</p>
                                <span>{course.content}</span>
                            </div>
                        </course>
                    )
                })}
            </div>
        </Container>
    </>
  )
}

export default Blog
