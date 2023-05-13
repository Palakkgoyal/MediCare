import React from 'react'
import styles from '@styles/result.module.css'

const layout = ({children}) => {
  return (
    <div>
      <div>
        <div className={`${styles.gradient}`}></div>
      </div>
 
        {children}
    </div>
  )
}

export default layout
