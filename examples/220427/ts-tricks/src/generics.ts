// Generics
// "A way to specify A PART of a type"

// Some examples of where Generics are used
// * React components, to specify props (which are different for every component)
// * React useState(), to specify type of state (which varies from use case to use case)
// * Express request objects, to specify inputs (query string, body etc)

(() => {
  type TreasureChest<ContentType, OwnerType = string> = {
    owner: OwnerType;
    weight: number;
    locked: boolean;

    // This PART of the type is "generic" (i.e. can work with multiple types)
    content: ContentType[];
  };

  const firstChest: TreasureChest<string> = {
    owner: "Richard",
    weight: 10,
    locked: true,
    content: ["ruby", "diamond"],
  };

  const secondChest: TreasureChest<
    { material: string; value: number },
    { name: string; age: number }
  > = {
    owner: {
      name: "Richard",
      age: 36,
    },
    weight: 100,
    locked: false,
    content: [
      { material: "gold", value: 10 },
      { material: "silver", value: 5 },
    ],
  };

  // Typescript will know the type of item
  const item = secondChest.content[0];
  console.log(item.material);
})();
