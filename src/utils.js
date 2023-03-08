export function randomIdGen() {
  let loo =
    Math.random()
      .toString(36)
      .toUpperCase()
      .replace(/[0-9O]/g, "")
      .substring(1, 3) +
    (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

  return {
    loo,
  };
}

export function randomDate() {
  let year = Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000;
  let month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  let day = Math.floor(Math.random() * (29 - 1 + 1)) + 1;

  let fullDate = [year, month, day].join("-");

  return fullDate;
}
