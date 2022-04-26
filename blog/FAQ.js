import React from 'react'
import styles from '../styles/Home.module.css'

function FAQ() {
  return (
    <div className={styles.descriptionpara}>
    <section>
    <h2 className={styles.h22}>FAQ</h2>
    <h4>Where to Play?</h4>
    <p>As of now, FifoLifo is available on Google Play Store. Coming soon in Apple App Store and Web as well.</p>
    
    <h4>Can I transfer my game data to new FifoLifo game?</h4>
    <p>Nope, we do not ask for user registration or signing. Hence, data would not be stored or available to transfer.</p>
    
    <h4>Can I repeat words in one game?</h4>
    <p>During single game play, player will not be able to repeat words. When player plays again after 8 hours, words can be used again.</p>
    
    <h4>Do I have to register with FifoLifo or pay to play FifoLifo?</h4>
    <p>No, FifoLifo is free to play. You do not have to register or sign in to play.</p>
    
    <h4>Will you change the way I play FifoLifo?</h4>
    <p>Updates will improve the game every time.</p>
    
    </section>
    </div>
  )
}

export default FAQ