function sayHello(name = 'world') {
  console.log(`Hello, ${name}!`);
}

// ES module export
export { sayHello };

// Node.js legacy modules
//module.exports = {
//  sayHello
//}