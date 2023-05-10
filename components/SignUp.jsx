"use client";
import { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        weight: "58",
        age: "21",
        gender: ""
    })

    const [submitted, setSubmitted] = useState(false)
    
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

    setSubmitted(prev => !prev)
 }

 let hiddenOrNot = localStorage.getItem("firstName")? "hidden" : "block";

    return (
        <div className={`absolute w-full z-[9999] ${hiddenOrNot}`}>
            <div className='mx-5'>

            <div className='flex_center flex-col form_container mx-auto'>
                <form 
                    className='flex_start flex-col' 
                    id='sign_up_form'
                    onSubmit={handleSubmit}
                >
                <h1 
                    className='form_heading self-center'>MediCare</h1>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            placeholder="First Name" required 
                            onChange={handleChange}
                            value={formData.firstName}
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            placeholder="Last Name" 
                            required 
                            onChange={handleChange}
                            value={formData.lastName}
                        />
                    </div>

                    <div className="number_input" id="weight">
                        <label htmlFor="weight" className="my-0">Weight in Kg:</label>
                        <input 
                            type="number" 
                            id="weight" 
                            name="weight" min={10} 
                            max={250} 
                            onChange={handleChange}
                            value={formData.weight}
                        />
                    </div>

                    <div className="number_input" id="age">
                        <label htmlFor="age" className="my-0 py-2">Age:</label>
                        <input 
                            type="number" 
                            id="age" 
                            name="age" 
                            min={10} 
                            max={101} 
                            required 
                            className=' w-200px'
                            onChange={handleChange}
                            value={formData.age}
                        />
                    </div>

                    <div className='gender_input' id='gender_input'>
                        <span>
                            <label htmlFor="male" className='mr-2'>Male</label>
                            <input 
                                type="radio" 
                                id="male" 
                                required
                                name="gender" 
                                value="male" 
                                onChange={handleChange}
                                checked={formData.gender === "male"? true : false}
                            />
                        </span>
                        <span>
                            <label htmlFor="female" className='mr-2'>Female</label>
                            <input 
                                type="radio" 
                                id="female" 
                                name="gender" 
                                value="female" 
                                required
                                onChange={handleChange}
                                checked={formData.gender === "female"? true : false}
                            />
                        </span>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
            </div>
        </div>
    )
}

export default SignUp
