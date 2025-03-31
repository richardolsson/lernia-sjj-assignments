async function start() {
  const response = await fetch('/api/randomNumber');
  const payload = await response.json();
  console.log('hello, ' + payload.randomNumber);
}

start();