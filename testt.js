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
//   const resultDate = new Date(date);
//   const newDate = new Date(date);
//   let Friday = 1;
//   days.forEach((day, index) => {
//     if (day === days[newDate.getDay()]) Friday = index;
//     return Friday;
//   });
//   const different = 5 - Friday;
//   const result2 = resultDate.setDate(date.getDate() + different);
//   return new Date(result2);
// }

// console.log(getNextFriday(new Date('2024-02-13T00:00:00Z')));
