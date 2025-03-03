import React from 'react'
import "./Blog.css"


const Blog = () => {
  return (
    <div className='Blog'>
      <div className='Blog-title'>
        <h1>Words Can Change the World</h1>
        <p>My thoughts and ideas</p>
      </div>
      <div className="Blog-container">
        <div className="Blog-box">
          <h3>My journey into Tech</h3>
          <div className="Blog-links">
            <a href="http://your-blog-url.com" className="btn">visit</a>
            <a href="https://dev.to/liz_decoder/understanding-tuple-unpacking-and-iteration-in-python-a-beginners-guide-42ee">
            </a>
          </div>
        </div>
      </div>
      <div className="Blog-container">
        <div className="Blog-box">
          <h3>Understanding Tuples</h3>
          <div className="Blog-links">
            <a href="https://dev.to/liz_decoder/understanding-tuple-unpacking-and-iteration-in-python-a-beginners-guide-42ee" className="btn">visit</a>
            <a href="https://dev.to/liz_decoder/how-to-build-a-simple-chat-app-with-react-and-websockets-497a">
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
