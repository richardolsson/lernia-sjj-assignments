export function bug1() {
  const data = {
    data: {
      data: ["word1", "word2"],
    },
  };

  data.data.push("word3");
}

export function bug2() {
  function add100(x) {
    return x + 100;
  }

  const str = "What is 50 + 100?";
  const words = str.split(" ");
  const val = words[2];
  const result = add100(val);
  console.log("Result is " + result);
}

export function bug3() {
  const clara = {
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

  if (clara.occupation.retired) {
    console.log("Clara is a retired " + clara.occupation.title);
  }
}
