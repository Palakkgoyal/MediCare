import styles from '@styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.container}`}>
      <p className={`${styles.para}`}>Thank you for visiting our website dedicated to promoting better health and wellness for all. If you have any questions or concerns, please don't hesitate to <a href="https://twitter.com/Palaktwts" target='_blank' className='underline hover:no-underline'>contact us</a>. Your feedback is greatly appreciated and will help us improve our services. Together, we can work towards a healthier future.</p>
    </footer>
  )
}

export default Footer
