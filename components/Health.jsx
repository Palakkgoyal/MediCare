import Image from "next/image"

const Health = () => {

    return (
        <main className="w-full flex flex-col justify-center items-center mb-48">
            <div>
                <div className="flex flex-col">
                    <span>
                        <label htmlFor="bloodPressure">Enter Your Blood Pressure</label>
                    </span>
                    <input type="text" name="bloodPressure" id="bloodPressure" />
                </div>
                {/* <Image/> */}
            </div>
            <div>
                <div className="flex flex-col">
                    <span>
                        <label htmlFor="heartRate">Enter Your Heart Rate <em>(beats per minute)</em></label>
                    </span>
                    <input type="text" name="heartRate" id="heartRate"/>
                </div>
                {/* <Image/> */}
            </div>
            <div>
                <div className="flex flex-col">
                    <span>
                        <label htmlFor="sugarLevel">Enter Your Sugar Level <em>(mg/dl)</em></label>
                    </span>
                    <input type="text" name="sugarLevel" id="sugarLevel"/>
                </div>
                {/* <Image/> */}
            </div>
        </main>
    )
}

export default Health
