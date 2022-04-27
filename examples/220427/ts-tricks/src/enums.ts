// Enums
// A way to specify a set of values for a type

(() => {
  enum AnimalSpecies {
    A_ALCES = "A. alces",
    H_LEUCOCEPHALUS = "H. leucocephalus",
  }

  type Moose = {
    species: AnimalSpecies.A_ALCES;
    name: string;
    antlersSpan: number;
  };

  type Eagle = {
    species: AnimalSpecies.H_LEUCOCEPHALUS;
    name: string;
    wingSpan: number;
  };

  type Animal = Moose | Eagle;

  const moose: Moose = {
    species: AnimalSpecies.A_ALCES,
    name: "Helge",
    antlersSpan: 180,
  };

  const eagle: Eagle = {
    species: AnimalSpecies.H_LEUCOCEPHALUS,
    name: "Örjan",
    wingSpan: 180,
  };

  function printAnimal(animal: Animal) {
    if (animal.species == AnimalSpecies.A_ALCES) {
      // TS will know that this is a Moose
      console.log(animal.antlersSpan);
    } else {
      console.log(animal.wingSpan);
    }
  }

  printAnimal(moose);
  printAnimal(eagle);
})();
