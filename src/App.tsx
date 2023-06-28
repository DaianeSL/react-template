import React from 'react'
import Card from './components/Card'
import Star from './assets/svg/star.svg'

export const App: React.FC = () => {
  return (
    <div>
      <Card cardText="Card text" />
      <Star />
    </div>
  )
}
