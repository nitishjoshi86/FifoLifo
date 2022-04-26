import React from 'react'
import styles from '../styles/Home.module.css'

function How() {
  return (
    <div className={styles.descriptionpara}>
    <section>
    <h2 className={styles.h22}>How to play?</h2>
    <p>This is an online game.<br />
    Alphabets from the previous word will first in and first out or may last in and first out, hence the name FifoLifo.<br />
    In addition, first alphabet of the word can be selected randomly from the previous word, player will type with it.<br />
    Player will have 5 minutes to write maximum words possible without any spelling error.<br />
    Stars will be awarded on the basis of total number of words entered.<br />
    One wrong spelling, GAME OVER!!!<br />
    Player can play again, only after 8 hours.<br />
    FIFOLIFO is free to play. You do not have to register or sign in to play.<br />
    We do not ask for user signup or signing. Hence, data would not be stored or available to transfer.<br />
    During single game play, player will not be able to repeat words. When player plays again after 8 hours, words can be used again.<br />
    </p>

    </section>
    </div>
  )
}

export default How