import { fakeScript } from '../src/fakeData.js';
import VideoGenerator from '../src/VideoGenerator.js';

test('string with a single number should result in the number itself', async () => {
  const videoGenerator = new VideoGenerator('test')
  videoGenerator.script = fakeScript
  await videoGenerator.getImagesFromScript()
});