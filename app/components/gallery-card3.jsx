import React from 'react'

import GalleryCard3Style from './gallery-card3.css'

export let links = () => {
  return [{ rel: 'stylesheet', href: GalleryCard3Style }]
}

export default function GalleryCard3({ image_alt, rootClassName, image_src }) {
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
