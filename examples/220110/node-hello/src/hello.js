function sayHello(name = 'world') {
  /* If we didn't use default arguments, we could use this:
  if (name === undefined) {
    name = 'world';
  }
  */
  console.log(`Hello, ${name}!`);
}

export default sayHello;
