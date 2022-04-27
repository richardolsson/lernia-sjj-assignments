// Union types
// A type that can be one of several other types
// let x: string | number;

(() => {
  type StringTreasureChest = {
    owner: string;
    weight: number;
    content: string[];
  };

  type CoinTreasureChest = {
    owner: string;
    weight: number;
    content: { material: string; value: number }[];
  };

  type TreasureChest = StringTreasureChest | CoinTreasureChest;

  const stringChest: StringTreasureChest = {
    owner: "Richard",
    weight: 100,
    content: ["ruby", "emerald"],
  };

  const coinChest: CoinTreasureChest = {
    owner: "Richard",
    weight: 10,
    content: [
      { material: "gold", value: 10 },
      { material: "silver", value: 5 },
    ],
  };

  function printChest(chest: TreasureChest) {
    const item = chest.content[0];
    if (typeof item == "object") {
      // In here, TS knows the type of item
      console.log(item.material);
    } else {
      console.log(item);
    }
  }

  printChest(stringChest);
  printChest(coinChest);
})();
