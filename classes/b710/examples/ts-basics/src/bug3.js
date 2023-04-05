export default function bug3() {
    var _a;
    var clara = {
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
    if ((_a = clara.occupation) === null || _a === void 0 ? void 0 : _a.retired) {
        console.log("Clara is a retired " + clara.occupation.title);
    }
}
bug3();
