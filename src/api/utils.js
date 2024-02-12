function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export { uniqueID, randomDate };
