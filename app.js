const { createReadStream, createWriteStream } = require('fs');
const file = './video.mp4';

const readStream = createReadStream(file);
const writeStream = createWriteStream('./copy.mp4');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
})

readStream.on('error', (error) => {
    console.log('Error occured : ' + error.message);
})

readStream.on('end', () => {
    writeStream.end();
})

writeStream.on('close', () => {
    process.stdout.write('file copied');
})