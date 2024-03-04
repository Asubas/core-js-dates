// function getNextFriday(date) {
//   const days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];
//   const newDate = new Date(date);
//   let Friday = 1;
//   const resultDate = new Date(date);
//   days.forEach((day, index) => {
//     if (day === days[newDate.getDay()]) Friday = index;
//     return Friday;
//   });
//   const different = 5 - Friday;
//   console.log(7 - -1);
//   let result2 = 0;
//   if (different <= 0) {
//     result2 = resultDate.setDate(date.getDate() + 7 + different);
//   } else {
//     result2 = resultDate.setDate(date.getDate() + different);
//   }
//   return new Date(result2);
// }

// console.log(getNextFriday(new Date('2024-02-03T00:00:00Z')));
