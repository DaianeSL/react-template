import React from 'react'
import styles from './card.module.css'

const Card: React.FC<{ cardText: string }> = ({ cardText }) => {
  return (
    <div className={styles.Card}>
      <div>{cardText}</div>
      <a href="#link">Card link</a>
    </div>
  )
}

export default Card
