type Employee = {
  name: string;
  age: number;
  occupation: null | {
    title: string;
    retired: boolean;
  };
};

export default function bug3() {
  const clara: Employee = {
    name: "Clara",
    age: 18,
    occupation: null,
  };

  if (Math.random() > 0.5) {
    clara.age += 50;
    clara.occupation = {
      title: "Office manager",
      retired: true,
    };
  }

  //if (clara.occupation !== null && clara.occupation.retired) {
  if (clara.occupation?.retired) {
    console.log("Clara is a retired " + clara.occupation.title);
  }
}

bug3();