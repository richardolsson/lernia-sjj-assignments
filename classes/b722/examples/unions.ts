type Coin = {
  material: 'gold' | 'silver' | 'bronze';
  value: number;
}

type Gem = {
  color: string;
  value: string;
}

type Treasure = Coin | Gem;

type TreasureChest = {
  weight: number;
  //content: Coin[] | Gem[];
  content: Treasure[];
}

const myChest: TreasureChest = {
  weight: 100,
  content: [
    {
      material: 'gold',
      value: 25,
    },
    {
      material: 'silver',
      value: 10,
    },
    {
      color: 'blue',
      value: '$1000',
    },
  ],
};

const firstItem = myChest.content[0];
firstItem;            // Inferred type: Treasure (i.e. Coin | Gem)
firstItem.value;      // Inferred type: string | number (Coin.value | Gem.value)


const myCoin: Coin = {
  material: 'gold',
  value: 25,
}

// (JS does not know about Gem or Coin, nor "gold" | "silver" | "bronze" types)
console.log(typeof firstItem); // Prints "object"
console.log(typeof myCoin.material); // Prints "string"

