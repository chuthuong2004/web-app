import React from 'react'
import {ContainerBlogs} from "./FormBlogs.element"
import Data from './DataBlog'


const Blogelement = () => {
  return (
    <>
        <ContainerBlogs>
            <div className='blog_news'><p>Tin Tức</p></div>

            <div className='blog_news-items'>
              <div className="news">
                {Data.map((news) => {
                  return (
                    <div className="new">
                      <p className='date_news'>{news.date}</p>
                      <img src={news.image} alt="" />
                      <div className="info">
                        <h5>{news.title}</h5>
                        <h4>{news.detail}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </ContainerBlogs>
    </>
  )
}

export default Blogelement