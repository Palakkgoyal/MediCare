import Image from "next/image"
import styles from "@styles/health.module.css"
import Link from "next/link"
import { useState } from "react"

const Health = () => {
    const [formData, setFormData] = useState({
        bloodPressure: "",
        heartRate: "",
        sugarLevel: ""
    })

    console.log(formData)
    
    const handleChange = (event) => {
        const {name, value} = event.target;
       setFormData((prevFormData) => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

const handleSubmit = (event) => {
    event.preventDefault()
    for(let i in formData){
        localStorage.setItem(i, formData[i])
    }

 }


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
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="bloodPressure" 
                            id="bloodPressure" 
                            className={`${styles.health_input}`} 
                            required
                        />
                        <button  onClick={handleSubmit}>
                            <Link href={{ pathname: '/bloodPressure', query: { keyword: 'blood-pressure' } }}
                                className={`${styles.check_btn}`}>
                                Check
                            </Link>
                        </button>
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
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="heartRate" 
                            id="heartRate" 
                            className={`${styles.health_input}`} 
                            required
                            />
                            <button onClick={handleSubmit}>
                                <Link
                                    href="/heartRate"
                                    className={`${styles.check_btn}`}>
                                    Check
                                </Link>

                            </button>
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
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="sugarLevel" 
                            id="sugarLevel" 
                            className={`${styles.health_input}`} 
                            required
                            />
                            <button onClick={handleSubmit}>
                                <Link
                                    href="/sugarLevel"
                                    className={`${styles.check_btn}`}>
                                    Check
                                </Link>
                            </button>
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
