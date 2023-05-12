console.log(process.env.OPENAI_KEY)

export default async function fetchData(){
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
          Authorization: `Bearer ${process.env.OPENAI_KEY}`,
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          model: "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": "What are you doing?"}]
      })
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json()
  console.log(data)
}
