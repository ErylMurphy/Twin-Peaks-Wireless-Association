import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

export default class Gallery extends Component {
  render() {
    const images = [
      {
        original: "https://www.dailyscandinavian.com/wp-content/uploads/2016/12/231216-tomten.jpg", 
      },
      {
        original: "https://images-na.ssl-images-amazon.com/images/I/51Z6H8spdXL.jpg",
      }
    ];
    return (
      <div className="Gallery">
        <h1>Gallery</h1>
        <ImageGallery items={images} />
      </div>
    );
  }
}

