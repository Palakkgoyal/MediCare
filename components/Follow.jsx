import styles from '@styles/follow.module.css'
import Image from 'next/image'

const Follow = () => {
  return (
    <div className={`${styles.container}`}>
      <h3 className={`${styles.heading}`}>Follow me on:-</h3>
      <ul className={`${styles.sub_container}`}>
        <li>
          <a href="https://github.com/Palakkgoyal" target="_blank" className={`${styles.tag}`}>
            GitHub
            <Image
              src="/assets/github.png"
              width={20}
              height={20}
              alt="Follow Palak Goyal on github"
              className={`${styles.img}`}
            />
            </a>
          </li>
        <li>
          <a href="https://twitter.com/Palaktwts" target="_blank" className={`${styles.tag}`}>
            Twitter
            <Image
              src="/assets/twitter.png"
              width={20}
              height={20}
              alt="Follow Palak Goyal on twitter"
              className={`${styles.img}`}
            />
            </a>
          </li>
        <li>
          <a href="https://www.linkedin.com/in/palak-goyal-037a02269/" target="_blank" className={`${styles.tag}`}>
            LinkedIn
            <Image
              src="/assets/linkedin.png"
              width={20}
              height={20}
              alt="Follow Palak Goyal on LinkedIn"
              className={`${styles.img}`}
            />
            </a>
          </li>
        <li>
          <a href="https://discord.com/channels/Palakkgoyal#7921" target="_blank" className={`${styles.tag}`}>
            Discord
            <Image
              src="/assets/discord.png"
              width={20}
              height={20}
              alt="Follow Palak Goyal on Discord"
              className={`${styles.img}`}
            />
            </a>
          </li>
      </ul>
    </div>
  )
}

export default Follow
