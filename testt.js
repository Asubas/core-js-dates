function getCountWeekendsInMonth(month, year) {
  const firstDay = new Date(year, month, 0);
  const lastDay = new Date(year, month - 1, 1);
  let count = 0;
  for (let i = new Date(lastDay); i <= firstDay; i.setDate(i.getDate() + 1)) {
    if (i.getDay() === 0 || i.getDay() === 6) {
      count += 1;
    }
    // console.log(i.getDay());
  }
  console.log(firstDay);
  console.log(lastDay);

  return count;
}

console.log(getCountWeekendsInMonth(12, 2023));
