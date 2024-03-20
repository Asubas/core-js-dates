function getQuarter(date) {
  const currentMonth = date.getMonth();
  let quarter = 0;
  if (currentMonth >= 0 && currentMonth < 3) quarter = 1;
  if (currentMonth >= 3 && currentMonth < 6) quarter = 2;
  if (currentMonth >= 6 && currentMonth < 9) quarter = 3;
  if (currentMonth >= 9 && currentMonth < 12) quarter = 4;
  return quarter;
}

console.log(getQuarter(new Date(2024, 10, 10)));
