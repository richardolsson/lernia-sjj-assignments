export default function bug1() {
  const data = {
    data: {
      data: ["word1", "word2"],
    },
  };

  data.data.data.push("word3");
}

bug1();
