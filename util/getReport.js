import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

async function getReport() {
    const res = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: "How are you today?",
          max_tokens: 7,
          temperature: 0,
        });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    const data = res.json();
    console.log(data)
  }

  export default async function Page() {
    const data = await getReport();
    console.log(data);
    return <h1>This is an API request to Openai</h1>;
  }