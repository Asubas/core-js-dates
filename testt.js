function getWorkSchedule(period, countWorkDays, countOffDays) {
  const arrWorking = [];
  const periodStart = period.start.split('-');
  const periodEnd = period.end.split('-');
  const dateStartPeriod = new Date(
    periodStart[2],
    periodStart[1] - 1,
    periodStart[0]
  );
  const dateEndPeriod = new Date(periodEnd[2], periodEnd[1] - 1, periodEnd[0]);
  while (dateStartPeriod <= dateEndPeriod) {
    for (let i = 0; i < countWorkDays; i += 1) {
      if (i === 0 && arrWorking.length === 0) {
        dateStartPeriod.setDate(dateStartPeriod.getDate());
      } else {
        dateStartPeriod.setDate(dateStartPeriod.getDate() + 1);
      }
      if (
        dateStartPeriod === dateEndPeriod ||
        dateStartPeriod > dateEndPeriod
      ) {
        break;
      }
      const day = String(dateStartPeriod.getDate()).padStart(2, '0');
      const month = String(dateStartPeriod.getMonth() + 1).padStart(2, '0');
      const year = dateStartPeriod.getFullYear();
      const resultDate = `${day}-${month}-${year}`;
      arrWorking.push(resultDate);
    }
    dateStartPeriod.setDate(dateStartPeriod.getDate() + countOffDays);
  }
  return arrWorking;
}

console.log(getWorkSchedule({ start: '01-01-2024', end: '31-03-2024' }, 3, 2));
// out should be: [
//     '01-01-2024',
//     '02-01-2024',
//     '03-01-2024',
//     '06-01-2024',
//     '07-01-2024',
//     '08-01-2024',
//     '11-01-2024',
//     '12-01-2024',
//     '13-01-2024',
//     '16-01-2024',
//     '17-01-2024',
//     '18-01-2024',
//     '21-01-2024',
//     '22-01-2024',
//     '23-01-2024',
//     '26-01-2024',
//     '27-01-2024',
//     '28-01-2024',
//     '31-01-2024',
//     '01-02-2024',
//     '02-02-2024',
//     '05-02-2024',
//     '06-02-2024',
//     '07-02-2024',
//     '10-02-2024',
//     '11-02-2024',
//     '12-02-2024',
//     '15-02-2024',
//     '16-02-2024',
//     '17-02-2024',
//     '20-02-2024',
//     '21-02-2024',
//     '22-02-2024',
//     '25-02-2024',
//     '26-02-2024',
//     '27-02-2024',
//     '01-03-2024',
//     '02-03-2024',
//     '03-03-2024',
//     '06-03-2024',
//     '07-03-2024',
//     '08-03-2024',
//     '11-03-2024',
//     '12-03-2024',
//     '13-03-2024',
//     '16-03-2024',
//     '17-03-2024',
//     '18-03-2024',
//     '21-03-2024',
//     '22-03-2024',
//     '23-03-2024',
//     '26-03-2024',
//     '27-03-2024',
//     '28-03-2024',
//     '31-03-2024',
//   ]

// function getWorkSchedule(period, countWorkDays, countOffDays) {
//   const arrWorking = [];
//   const periodStart = period.start.split('-');
//   const periodEnd = period.end.split('-');
//   const dateStartPeriod = new Date(
//     periodStart[2],
//     periodStart[1] - 1,
//     periodStart[0]
//   );
//   const dateEndPeriod = new Date(periodEnd[2], periodEnd[1] - 1, periodEnd[0]);
//   for (
//     dateStartPeriod;
//     dateStartPeriod <= dateEndPeriod;
//     dateStartPeriod.setDate(dateStartPeriod.getDate() + countOffDays + 1)
//   ) {
//     let i = 0;
//     while (i < countWorkDays) {
//       dateStartPeriod.setDate(dateStartPeriod.getDate() + i);
//       const day = String(dateStartPeriod.getDate()).padStart(2, '0');
//       const month = String(dateStartPeriod.getMonth() + 1).padStart(2, '0');
//       const year = dateStartPeriod.getFullYear();
//       const resultDate = `${day}-${month}-${year}`;
//       arrWorking.push(resultDate);
//       i += 1;
//     }
//   }
//   return arrWorking;
// }
