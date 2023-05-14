'use client'
import Result from "@components/Result"

const prompt = `Is it ok for a ${localStorage.getItem("gender")} who is ${localStorage.getItem("age")} years old to have a 'blood pressure' of '${localStorage.getItem('bloodPressure')} mmHg'. If not give some instructions on how to improve it.(About 100 words)`
const report = fetchData()

const page = () => {
  return (
    <div>
      <Result report={report} />
    </div>
  )
}

export default page




async function fetchData() {

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": prompt }]
    })
  })

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json()
  return data.choices[0].message.content;
}