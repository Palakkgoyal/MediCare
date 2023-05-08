import React from 'react'

const SignUp = () => {
    return (
        <div className='mx-5'>

        <div className='flex_center flex-col form_container mx-auto'>
            <form className='flex_start flex-col' id='sign_up_form'>
            <h1 className='form_heading self-center'>MediCare</h1>
                <div>
                    <label for="first-name">First Name:</label>
                    <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
                </div>

                <div>
                    <label for="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                </div>

                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div>
                    <label for="age">Age:</label>
                    <input type="number" id="age" name="age" min={10} max={101} defaultValue={21} required className='py-0 w-200px'/>
                </div>

                <div className='gender_input' id='gender_input'>
                    <span>
                        <label for="male" className='mr-2'>Male</label>
                        <input type="radio" id="male" name="gender" value="male" />
                    </span>
                    <span>
                        <label for="female" className='mr-2'>Female</label>
                        <input type="radio" id="female" name="gender" value="female" />
                    </span>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
    )
}

export default SignUp
