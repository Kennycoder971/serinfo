function getCurrentMonth() {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  }
  return month;
}

function getCurrentDay() {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  }
  return day;
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

export default currentDate;
