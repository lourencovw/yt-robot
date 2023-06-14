class VideoGenerator {
    constructor(theme) {
        this.theme = theme
        this.editSpec = {
            outPath: './result/speedTest.mp4',
            width: 1280,
            height: 720,
            defaults: {
                transition: { name: 'crossZoom', duration: 1 }
            },
            clips: [
                { duration: 3, layers: [{ type: 'image', path: './temp/img1.jpg', zoomDirection: 'out' }] },
                { duration: 3, layers: [{ type: 'image', path: './temp/img1.jpg', zoomDirection: 'in' }] },
            ],
        }
        this.script = '';
    }

    async getImagesFromScript() {
        const newScript = []
        const resp = await fetch('https://customsearch.googleapis.com/customsearch/v1?' + new URLSearchParams({
            cx: process.env.MECHANISM_ID,
            key: process.env.GOOGLE_KEY,
            q: 'chicken',
            searchType: 'image',
            num: 2
        }))

        const json = await resp.json();
        json.items.forEach()
        // for (let i = 0; i < this.scrip.length; i++) {
        //     const isEven = number % 2 == 0
        //     if (isEven) {
        //         newScript.push(this.scrip[i])
        //     } else {
        //         const imageSearch = this.scrip[i].toLowerCase().replace('imgdesc:', '');

        //         await progress(request(imageSearch.trim()))
        //             .on('progress', progress => console.log("progress", progress.percent))
        //             .on('response', response => console.log("status code", response.statusCode))
        //             .on('error', error => console.error("error", error))
        //             .on('end', () => console.log("done"))
        //             .pipe(fs.createWriteStream(path))
        //     }

        // }

        // this.script = newScript;

        return this
    };

    async getScript() {
        // const CHATGPT_URL = "https://api.openai.com/v1/chat/completions";
        // const HEADERS = {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //     Authorization: "Bearer " + process.env.GPT_KEY,
        // };
        // const MODEL_CONFIG = JSON.stringify({
        //     "model": "gpt-3.5-turbo",
        //     "messages": [{
        //         "role": "user",
        //         "content": `Create a text with the theme "${this.theme}", ` +
        //             `and for each paragraph describe an image separately with three words with a indicator "imgdesc"`
        //     }]
        // })

        // const resp = await fetch(CHATGPT_URL, { method: "POST", headers: HEADERS, body: MODEL_CONFIG })
        // const json = await resp.json()

        // this.script = json?.choices[0]?.message?.content;
        this.scrip = [
            'Pigs are fascinating creatures that have captivated the attention of people all around the world. These intelligent animals are known for their curly tails, snouts, and floppy ears. In the world of biology, pigs take center stage due to their unique anatomy and physiology. ',
            'Imgdesc: Curly tails, snouts, floppy ears.',
            'Pigs belong to the family Suidae and are native to Eurasia. They are omnivorous, which means they eat both plants and animals. Pigs can consume a variety of foods such as vegetables, fruits, insects, and even small animals. Pigs have a four-chambered stomach which allows them to digest complex foods. ',
            'Imgdesc: Omnivorous, four-chambered stomach.',
            'There are different breeds of pigs, each with its unique characteristics. Berkshire, Duroc, Hampshire, and Yorkshire are some of the most common breeds of pigs. Pigs can weigh up to 700 pounds and can live for up to 15 years. ',
            'Imgdesc: Berkshire, Duroc, Hampshire, Yorkshire.',
            'Pigs are highly social animals and enjoy the company of other pigs. In the wild, they live in groups known as sounders. Pigs communicate with each other using various sounds such as grunts, snores, and squeals. They also use body language to express themselves. ',
            'Imgdesc: Highly social, sounders, communication.',
            'Pigs have a well-developed sense of smell and taste. Their snouts are specially adapted to help them root through the ground in search of food. Pigs are also very clean animals and have been known to roll in mud to protect themselves against insects and sunburn. ',
            'Imgdesc: Well-developed senses, snouts, mud-roll.',
            'In conclusion, pigs are fascinating creatures with a unique biology that sets them apart from other animals. Their omnivorous nature, four-chambered stomach, and social behavior make them an important species to study in the fields of biology and animal science. ',
            'Imgdesc: Fascinating creatures, biology, animal science.'
        ]
        console.log(this.script.split('\n\n'));
        return this;
    }

    async downloadImage() {
        return
    }


    createVideo() {
        editly(this.editSpec)
    }

}

export default VideoGenerator;