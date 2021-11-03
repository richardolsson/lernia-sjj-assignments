
function timeRightNow() {
  const now = new Date();
  return zeroPad(now.getHours()) + ':' + zeroPad(now.getMinutes() + ':' + zeroPad(now.getSeconds()));
}
