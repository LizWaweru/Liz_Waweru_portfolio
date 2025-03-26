import React from 'react'
import "./Blog.css"


const Blog = () => {
  return (
    <div id='blog' className='Blog'>
      <div className='Blog-title'>
        <h1>Words Can Change the World</h1>
        <p>My thoughts and ideas</p>
      </div>
      <div className="Blog-container">
        <div className="Blog-box">
          <h3>NumPy: Python Library</h3>
          <div className="Blog-links">
            <a href="https://dev.to/liz_decoder/numpy-understanding-numpy-python-library-4pl6" className="btn">Read more</a>
            <a href="https://dev.to/liz_decoder/numpy-understanding-numpy-python-library-4pl6">
            </a>
          </div>
        </div>
      </div>
      <div className="Blog-container">
        <div className="Blog-box">
          <h3>Understanding Tuples</h3>
          <div className="Blog-links">
            <a href="https://dev.to/liz_decoder/understanding-tuple-unpacking-and-iteration-in-python-a-beginners-guide-42ee" className="btn">Read more</a>
            <a href="https://dev.to/liz_decoder/understanding-tuple-unpacking-and-iteration-in-python-a-beginners-guide-42ee">
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
