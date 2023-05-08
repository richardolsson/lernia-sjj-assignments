type Coin = {
  material: 'gold' | 'silver' | 'bronze';
  value: number;
}

type Gem = {
  color: string;
  value: string;
}

// Type params can have a shape restriction (extends) and a defualt value (=)
type TreasureChest<Treasure extends Coin | Gem = Gem> = {
  weight: number;
  content: Treasure[];
}

function makeChest<Treasure extends Coin | Gem>(content: Treasure[]): TreasureChest<Treasure> {
  return {
    weight: content.length,
    content: content,
  }
}

// --------------------------------------------------------------

const coinContent: Coin[] = [
  {
    material: 'gold',
    value: 25,
  },
  {
    material: 'silver',
    value: 10,
  },
];

// Typescript is able to infer Coin as the type param, from coinContent
const coinChest = makeChest(coinContent);

const firstItem = coinChest.content[0];
firstItem;            // Inferred type: Coin
firstItem.value;      // Inferred type: number


const gemContent = [
  {
    color: 'blue',
    value: '$1000',
  },
];

const gemChest = makeChest(gemContent);

const firstGem = gemChest.content[0];
firstGem;           // Inferred type: { color: string, value: string }

export {}