import React from 'react'
import SignUp from '@components/SignUp'
import '@styles/globals.css'
import Hero from '@components/Hero'
import Health from '@components/Health'
import Greeting from '@components/Greeting'
import Page from '@util/getReport'

const page = () => {
  return (
    <div className='relative'>
      <SignUp />
      {/* <Page /> */}
      <Hero />
      <Greeting />
      <Health />
    </div>
  )
}

export default page
