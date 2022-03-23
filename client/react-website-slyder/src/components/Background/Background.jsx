import React from 'react'
import { Section } from './Background.element'
import homeImage from '../Images/hero.png'

export default function Hero() {
  return (
    <Section id = "hero">
      <div className='background'>
        <img src= {homeImage} alt = "" />
      </div>
    </Section>
  )
}
