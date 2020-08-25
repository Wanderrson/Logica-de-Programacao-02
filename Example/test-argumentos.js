function teste(a, b, c) {
  let obj = {
    a: a != null ? true : false,
    b: b != null ? true : false,
    c: c != null ? true : false,
  };

  // let obj = {
  //   a: a,
  //   b: b,
  //   c: c,
  // };

  return obj;
}

console.log(teste(1, 2, 3));
console.log(teste(2, 3));
console.log(teste(3));
console.log(teste());
console.log(teste(1, 0, 2));
