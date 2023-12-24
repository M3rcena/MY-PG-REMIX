import React from 'react'

import PropTypes from 'prop-types'

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

// GalleryCard3.defaultProps = {
//   image_alt: 'image',
//   rootClassName: '',
//   image_src:
//     'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&w=1500',
// }

// GalleryCard3.propTypes = {
//   image_alt: PropTypes.string,
//   rootClassName: PropTypes.string,
//   image_src: PropTypes.string,
// }
