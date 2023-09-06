function getMinMax(str) {
  let regExp = /-?\d*\.?\d+/g;
  arrNumbers = str.match(regExp).map(item => +item);

  return {
    min: Math.min(...arrNumbers),
    max: Math.max(...arrNumbers),
  };
}
