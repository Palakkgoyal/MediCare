"use client"
import '@styles/globals.css'
import SignUp from '@components/SignUp'
import Hero from '@components/Hero'
import Health from '@components/Health'
import Greeting from '@components/Greeting'
import Instructions from '@components/Instructions'


const page = () => {

  return (
    <div className='relative'>
      <SignUp />
      <Hero />
      <Greeting />
      <Instructions />
      <Health />
    </div>
  )
}

export default page
