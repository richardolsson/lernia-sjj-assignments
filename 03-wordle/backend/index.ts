import initApp from "./src/app";
import MemGameStore from "./src/game/MemGameStore";

const gameStore = new MemGameStore();

const app = initApp(gameStore);

app.listen(5080);