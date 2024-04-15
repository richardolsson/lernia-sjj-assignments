import fs from 'fs/promises';

import initApp from './src/app';
import ListWordRandomizer from './src/game/ListWordRandomizer';
import MemGameStore from './src/game/MemGameStore';
import MongoDbAdapter from './src/db/MongoDbAdapter';

async function init() {
  const wordData = await fs.readFile('./words.txt');
  const words = wordData.toString().split('\r\n');

  const randomizer = new ListWordRandomizer(words);
  const gameStore = new MemGameStore(randomizer);
  const db = new MongoDbAdapter('mongodb://127.0.0.1:27017/test');

  const app = initApp(gameStore, db);

  app.listen(5080);
}

init();
