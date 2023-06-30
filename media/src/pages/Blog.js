import React, { useState } from 'react';
import './Blog.css';
import images from '../images';

export default function Blog() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div id='body'>
      <div className="blog">
        {images.map((image, index) => (
          <div
            className={`blog-item ${expandedIndex === index ? 'expanded' : 'collapsed'}`}
            key={index}
            onClick={() => toggleExpand(index)}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
