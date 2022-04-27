// Union types with constant fields

(() => {
  type Moose = {
    species: "alces";
    name: string;
    antlersSpan: number;
  };

  type Eagle = {
    species: "eagle";
    name: string;
    wingSpan: number;
  };

  type Animal = Moose | Eagle;

  const moose: Moose = {
    species: "alces",
    name: "Helge",
    antlersSpan: 180,
  };

  const eagle: Eagle = {
    species: "eagle",
    name: "Örjan",
    wingSpan: 180,
  };

  function printAnimal(animal: Animal) {
    if (animal.species == "alces") {
      // TS will know that this is a Moose
      console.log(animal.antlersSpan);
    }
  }

  printAnimal(moose);
  printAnimal(eagle);
})();
