'use client'

import Result from "@components/Result"

const page = () => {
  return (
    <div>
       <button onClick={fetchData}>Report</button>
      <Result />
    </div>
  )
}

export default page


async function fetchData(){

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
          Authorization: `Bearer ${process.env.OPENAI_KEY}`,
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          model: "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": "Is it ok for a female who is 19 years old to have a 'blood pressure' of '120/90'. If not give some instructions on how to improve it.(About 100 words)"}]
      })
  })

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json()
  console.log(data)
  return data;
}