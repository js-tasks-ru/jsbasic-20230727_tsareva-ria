function ucFirst(str) {
  if (str === "") {
    return str;
  }
  else {
    /*let newStr = str[0].toUpperCase()
      for (let i = 1; i < str.length; i++) {
      newStr += str[i].toLowerCase();
    }*/
    return str[0].toUpperCase() + str.slice(1);
  }
}
