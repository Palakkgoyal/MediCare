import styles from '@styles/instruction.module.css'

const Instructions = () => {
  return (
    <div className={`${styles.container}`}>
      <h5 className={`${styles.heading}`}>How to use Medicare?</h5>
      <p className={`${styles.para}`}>You have to enter your health condition such as blood pressure and our AI will analyse you on the basis of your age and gender whether your condition is <em>Ok</em> or not. It will give you some advice on how you can improve it <span className={`${styles.warning}`}>(Consider your health advisor before following any kind of Instructions)</span></p>
    </div>
  )
}

export default Instructions
