import styles from '@styles/meditation.module.css'

const Meditation = () => {
  return (
    <div className={`${styles.container}`}>
        <h1>Meditate here</h1>
        <div className={`${styles.level_container}`}>
            <span className={`${styles.level}`}>1</span>
            <span className={`${styles.level}`}>2</span>
            <span className={`${styles.level}`}>3</span>
            <span className={`${styles.level}`}>4</span>
            <span className={`${styles.level}`}>5</span>
            <span className={`${styles.level}`}>6</span>
            <span className={`${styles.level}`}>7</span>
            <span className={`${styles.level}`}>8</span>
            <span className={`${styles.level}`}>9</span>
            <span className={`${styles.level}`}>10</span>
        </div>
    </div>
  )
}

export default Meditation
