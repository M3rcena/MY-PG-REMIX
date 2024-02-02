import React from 'react'

import featureCardStyles from './feature-card.css'

export let links = () => {
  return [{ rel: 'stylesheet', href: featureCardStyles }]
}

export function FeatureCard({ Heading, SubHeading, Color, Icon }) {
  return (
    <div className={Color}>
      {Icon}
      <div className="feature-card-container">
        <h3 className="feature-card-text heading3">{Heading}</h3>
        <span className="feature-card-text1">{SubHeading}</span>
      </div>
    </div>
  )
}
