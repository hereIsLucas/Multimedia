import React from 'react'
import './Blog.css';
import images from '../images';


export default function Blog() {
    return (
        <div id='body'>
            <div className="blog">
                {images.map((image, index) => (
                    <div className="blog-item" key={index}>
                        <img src={image} alt={'Image ${index + 1}'} />
                    </div>
                ))}
            </div>
        </div>
    )
}