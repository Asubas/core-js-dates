// function getNextFridayThe13th(date) {
//   const currentDay = date.getDay();
//   let shift;
//   console.log(date.getDay());
//   if (currentDay === 6) {
//     shift = 6;
//   } else {
//     shift = 5 - currentDay;
//   }
//   date.setDate(date.getDate() + shift);
//   while (date.getDate() !== 13) {
//     date.setDate(date.getDate() + 7);
//   }
//   return date;
// }

// console.log(getNextFridayThe13th(new Date(2024, 0, 13)));
