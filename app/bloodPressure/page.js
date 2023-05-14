'use client'

import Result from "@components/Result"
import fetchData from "@app/api/user"


const page = () => {
  return (
    <div>
       <button onClick={fetchData}>Report</button>
      <Result />
    </div>
  )
}

export default page
