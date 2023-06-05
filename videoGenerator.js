const ffmpeg = require('fluent-ffmpeg');

// Input video path
const videoPath = 'path/to/input/video.mp4';

// Input image path
const imagePath = 'path/to/input/image.jpg';

// Output video path
const outputPath = 'path/to/output/video.mp4';

// Zoom parameters
const zoomInScale = 1.5;  // Zoom in by 1.5x
const zoomOutScale = 0.5; // Zoom out by 0.5x

// Pan parameters
const panLeftOffset = 100;   // Pan left by 100 pixels
const panRightOffset = -100; // Pan right by 100 pixels

ffmpeg()
    .input(videoPath)
    .input(imagePath)
    .complexFilter([
        // Zoom in
        {
            filter: 'zoompan',
            options: `z='if(lte(zoom,1.0),${zoomInScale},1.0)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=WxH`,
            inputs: '0:v',
            outputs: 'zoomedInVideo',
        },
        // Zoom out
        {
            filter: 'zoompan',
            options: `z='if(lte(zoom,1.0),${zoomOutScale},1.0)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=WxH`,
            inputs: 'zoomedInVideo',
            outputs: 'zoomedOutVideo',
        },
        // Pan left
        {
            filter: 'crop',
            options: `out_w=in_w-2*${panLeftOffset}:out_h=in_h:x=${panLeftOffset}:y=0`,
            inputs: 'zoomedOutVideo',
            outputs: 'panLeftVideo',
        },
        // Pan right
        {
            filter: 'crop',
            options: `out_w=in_w-2*${panRightOffset}:out_h=in_h:x=${panRightOffset}:y=0`,
            inputs: 'panLeftVideo',
            outputs: 'panRightVideo',
        },
        // Overlay image
        {
            filter: 'overlay',
            options: 'x=(W-w)/2:y=(H-h)/2',
            inputs: ['panRightVideo', '1:v'],
            outputs: 'outputVideo',
        },
    ])
    .outputOptions('-c:v libx264') // Output video codec
    .outputOptions('-preset ultrafast') // Output video encoding preset (optional)
    .output(outputPath)
    .on('end', () => {
        console.log('Video processing finished');
    })
    .run();