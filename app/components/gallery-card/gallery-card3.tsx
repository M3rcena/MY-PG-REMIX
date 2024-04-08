// Import React
import React from 'react';

// Import CSS
import GalleryCard3Style from './gallery-card3.css?url';

// Load the CSS
export let links = () => {
  return [{ rel: 'stylesheet', href: GalleryCard3Style }]
};

// Gallery Card 3 Component
// Requires the following props:
// - image_alt: string
// - rootClassName: string
// - image_src: string
export function GalleryCard3({ image_alt, rootClassName, image_src }) {
  return (
    <div className={`gallery-card3-gallery-card ${rootClassName} `}>
      <img
        alt={image_alt}
        src={image_src}
        className="gallery-card3-image"
      />
    </div>
  )
}
