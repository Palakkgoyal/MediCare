"use client"
import styles from '@styles/greeting.module.css'

const Health = () => {
    const name = localStorage.getItem("firstName")? localStorage.getItem("firstName") : "User"

    return (
        <div className={`${styles.container}`}>
           <h3 className={`${styles.name}`}>Hello {name}!</h3>
        </div>
    )
}

export default Health
