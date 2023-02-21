function fn(func) {
  const wrapper = (...args) => {
    wrapper.callCount++;
    wrapper.args.push(args);
    func(...args);
  };
  
  wrapper.callCount = 0;
  wrapper.args = [];

  return wrapper;
}

function original() {
  console.log('hello');
}

const spy = fn(original);

spy(1);
spy(2);
spy('foo');

console.log(spy.callCount);
console.log(spy.args);