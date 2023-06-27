import React from 'react'
import styles from './card.module.css'

import type { ICardProps } from './types'

const Card: React.FC<ICardProps> = ({ cardText }) => {
  return (
    <div className={styles.Card}>
      <div>{cardText}</div>
      <a href="#link">Card link</a>
    </div>
  )
}

export default Card
