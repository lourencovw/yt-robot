import dotenv from 'dotenv'
import VideoGenerator from './src/VideoGenerator.js';

dotenv.config()
// Get script
const theme = 'Biology about pigs'
const videoGenerator = new VideoGenerator(theme);

videoGenerator
.getScript()
// fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + process.env.GPT_KEY,
//     },
//     body: JSON.stringify({
//         "model": "gpt-3.5-turbo",
//         "messages": [{ "role": "user", "content": "Create a script explaining the history of bacon" }]
//     }),
// })
//     .then(resp => resp.json())
//     .then(json => console.log(json.choices))
//     .catch(error => console.error(error))
//     .finally(res => console.log(res))

// Get Images

//downloadImage("https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/16:9/w_5803,h_3264,c_limit/RoastChicken_RECIPE_080420_37993.jpg", "./temp/roast.jpg");

// Create video from images

