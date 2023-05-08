// Simple example --------------------------------------
export function myFunc(param: number | string) {
  param; // Typescript infers: string | number

  if (typeof param == 'number') {
    param; // Typescript infers: number
  }

  param; // Typescript infers: string | number
}

// ----------------------------------------------------


type Coin = {
  kind: 'coin',
  material: 'gold' | 'silver' | 'bronze';
  value: number;
}

type Gem = {
  kind: 'gem',
  color: string;
  value: string;
}

type Treasure = Coin | Gem;

/* An uglier version of this which helps us far less:
type Treasure = {
  kind: 'coin' | 'gem',
  color?: string;
  material?: 'gold' | 'silver' | 'bronze';
  value: number | string;
}

const treasure: Treasure = {
  kind: 'coin',
  value: 'foo',
  color: 'blue',
}
*/

type TreasureChest = {
  weight: number;
  content: Treasure[];
}

const myChest: TreasureChest = {
  weight: 100,
  content: [
    {
      kind: 'coin',
      material: 'gold',
      value: 25,
    },
    {
      kind: 'coin',
      material: 'silver',
      value: 10,
    },
    {
      kind: 'gem',
      color: 'blue',
      value: '$1000',
    },
  ],
};

const firstItem = myChest.content[0];
firstItem;            // Inferred type: Treasure (i.e. Coin | Gem)
firstItem.value;      // Inferred type: string | number (Coin.value | Gem.value)

console.log(typeof firstItem); // Prints: "object"

if (typeof firstItem == 'object') {
  firstItem;          // Inferred type: Treasure (i.e. Coin | Gem)
  firstItem.value;    // Inferred type: string | number (Coin.value | Gem.value)
}

if ('material' in firstItem) {
  firstItem;          // Inferred type: Coin
  firstItem.kind;     // Inferred type: 'coin'
  firstItem.value;    // Inferred type: number
}

firstItem.kind        // Inferred type: 'gem' | 'coin' (Gem.kind | Coin.kind)


if (firstItem.kind == 'coin') {
  firstItem;          // Inferred type: Coin
} else {
  firstItem;          // Inferred type: Gem
}