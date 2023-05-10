import React from 'react'
import SignUp from '@components/SignUp'
import '@styles/globals.css'
import Hero from '@components/Hero'

const page = () => {
  return (
    <div className='relative'>
      <SignUp />
      <Hero />
    </div>
  )
}

export default page
