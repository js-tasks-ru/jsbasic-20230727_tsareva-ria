function camelize(str) {
  let arr;
  arr = str.split("-");
  arr.forEach(function (item, index) {
    if (index > 0) {
      arr[index] = item[0].toUpperCase() + item.slice(1);
    }
  });

  return arr.join('');
}
