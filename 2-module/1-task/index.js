function sumSalary(salaries) {
  let sumSalary = 0;

  for (let key in salaries) {
    if (!(isNaN(salaries[key])) &&
      (isFinite(salaries[key])) &&
      (typeof salaries[key] == "number")) {
      sumSalary += +salaries[key];
    }
  }

  return sumSalary;
}
