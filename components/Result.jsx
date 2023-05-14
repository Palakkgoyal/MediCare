import styles from "@styles/result.module.css"

const Result = ({report}) => {
    return (
        <div className={`${styles.container}`}>
            <h1 className={`${styles.heading}`}>REPORT</h1>
            <p className={`${styles.para}`}>{report}</p>
        </div>
    )
}

export default Result
