import React from 'react'
import { Container } from '../Blog/Blog.element'
import blog3 from '../Images/blog3.jpg'
import blog4 from '../Images/blog4.jpg'
import blog5 from '../Images/blog5.png'

const Blog = () => {

  return (
    <>
        <Container>
            <div className='Content'>
                <div className='ContentAbout'>
                    <h1>Blog</h1>
                    <p className='ContentAbout-name'>Hình ảnh lưu trữ những điều nổi bật nhất từ Slyder.</p>
                </div>
            </div>

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
        </Container>    
    </>
  )
}

export default Blog
