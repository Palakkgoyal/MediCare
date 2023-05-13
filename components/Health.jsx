import Image from "next/image"
import styles from "@styles/health.module.css"
import Link from "next/link"

const Health = () => {

    return (
        <main className={`${styles.main_container}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.sub_container}`}>
                    <span>
                        <label
                            htmlFor="bloodPressure"
                            className={`${styles.health_label}`}>
                            Enter Your Blood Pressure <em>(mm Hg)</em>
                        </label>
                    </span>
                    <form className={`${styles.health_form}`}>
                        <input type="text" name="bloodPressure" id="bloodPressure" className={`${styles.health_input}`} />
                        <Link href="/health"
                            className={`${styles.check_btn}`}>
                            Check
                        </Link>
                    </form>
                </div>
                <Image
                    src='/assets/blood.png'
                    width={300}
                    height={300}
                    className={`${styles.img}`}
                />
            </div>
            <div className={`${styles.container}`}>
                <div  className={`${styles.sub_container}`}>
                    <span>
                        <label
                            htmlFor="heartRate"
                            className={`${styles.health_label}`}>
                            Enter Your Heart Rate <em>(beats per minute)</em>
                        </label>
                    </span>
                    <form className={`${styles.health_form}`}>
                        <input type="text" name="heartRate" id="heartRate" className={`${styles.health_input}`} />
                        <Link
                            href="/health"
                            className={`${styles.check_btn}`}>
                            Check
                        </Link>
                    </form>
                </div>
                <Image
                    src='/assets/heart.png'
                    width={250}
                    height={250}
                    className={`${styles.img}`}
                />
            </div>
            <div className={`${styles.container}`}>
                <div  className={`${styles.sub_container}`}>
                    <span>
                        <label
                            htmlFor="sugarLevel"
                            className={`${styles.health_label}`}>
                            Enter Your Sugar Level <em>(mg/dl)</em>
                        </label>
                    </span>
                    <form className={`${styles.health_form}`}>
                        <input type="text" name="sugarLevel" id="sugarLevel" className={`${styles.health_input}`} />
                        <Link
                            href="/health"
                            className={`${styles.check_btn}`}>
                            Check
                        </Link>
                    </form>
                </div>
                <Image
                    src='/assets/sugar.png'
                    width={300}
                    height={300}
                    className={`${styles.img}`}
                />
            </div>
        </main>
    )
}

export default Health
