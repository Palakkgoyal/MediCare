"use client"

import React from 'react'
import SignUp from '@components/SignUp'
import '@styles/globals.css'
import Hero from '@components/Hero'
import Health from '@components/Health'
import Greeting from '@components/Greeting'
import fetchData from './api/user'


const page = () => {

  return (
    <div className='relative'>
      <button onClick={fetchData}>Report</button>
      <SignUp />
      <Hero />
      <Greeting />
      <Health />
    </div>
  )
}

export default page
