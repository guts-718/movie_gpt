// import {GoogleGenerativeAI} from "@google/generative-ai";

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// // ...

// // For text-only input, use the gemini-pro model
// const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// // ...

// async function run(prompt) {
//     let prompt1 = "Suggest some movies or series which are similar to "+prompt+" and give in the form of array";
//     const result = await model.generateContent(prompt1);
//     const response = await result.response;
//     const text = response.text();
//     console.log(text);
//   }
  
//   run();
  
