import fs from 'fs/promises';

import initApp from './src/app';
import ListWordRandomizer from './src/game/ListWordRandomizer';
import MemGameStore from './src/game/MemGameStore';

async function init() {
  const wordData = await fs.readFile('./words.txt');
  const words = wordData.toString().split('\r\n');

  const randomizer = new ListWordRandomizer(words);

  const gameStore = new MemGameStore(randomizer);

  const app = initApp(gameStore);

  app.listen(5080);
}

init();
