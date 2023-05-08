enum TreasureKind {
  COIN = 'coin',
  GEM = 'gem',
}

type Coin = {
  kind: TreasureKind.COIN,
  material: 'gold' | 'silver' | 'bronze';
  value: number;
}

type Gem = {
  kind: TreasureKind.GEM,
  color: string;
  value: string;
}

type Treasure = Coin | Gem;

type TreasureChest = {
  weight: number;
  content: Treasure[];
}

const myChest: TreasureChest = {
  weight: 100,
  content: [
    {
      kind: TreasureKind.COIN,
      material: 'gold',
      value: 25,
    },
    {
      kind: TreasureKind.COIN,
      material: 'silver',
      value: 10,
    },
    {
      kind: TreasureKind.GEM,
      color: 'blue',
      value: '$1000',
    },
  ],
};

const firstItem = myChest.content[0];
firstItem;            // Inferred type: Treasure (i.e. Coin | Gem)
firstItem.kind        // Inferred type: TreasureKind
firstItem.value;      // Inferred type: string | number (Coin.value | Gem.value)

if (firstItem.kind == TreasureKind.COIN) {
  firstItem;          // Inferred type: Coin
} else {
  firstItem;          // Inferred type: Gem
}