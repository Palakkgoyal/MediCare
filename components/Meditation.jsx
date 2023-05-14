import styles from '@styles/meditation.module.css'

const Meditation = () => {
  return (
    <div className={`${styles.container}`}>
        <h1 className={`${styles.heading}`}>Meditate here</h1>
        <iframe  className={`${styles.videoFrame}`} src="https://www.youtube.com/embed/DulNz2CkoHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Meditation
