function checkSpam(str) {
  if (str.toLowerCase().includes("xxx") || str.toLowerCase().includes("1xbet")) {
    return true;
  } else {
    return false;
  }
}
