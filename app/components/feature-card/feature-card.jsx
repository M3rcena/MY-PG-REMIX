// Import React
import React from 'react';

// Import CSS
import featureCardStyles from './feature-card.css';

// Load the CSS
export let links = () => {
  return [{ rel: 'stylesheet', href: featureCardStyles }]
};

// Feature Card Component
// Requires the following props:
// - Heading: string
// - SubHeading: string
// - Color: string
// - Icon: JSX
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
