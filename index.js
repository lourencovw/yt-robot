require('dotenv').config();
// Get script

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
fetch('https://customsearch.googleapis.com/customsearch/v1?' + new URLSearchParams({
    cx: process.env.MECHANISM_ID,
    key: process.env.GOOGLE_KEY,
    q: 'chicken',
    searchType: 'image',
    num: 2
}))
    .then(res => res.json())
    .then(res => console.log(res))

// Create video from images
// Mix host video and video from images