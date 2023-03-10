function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
  }

  //const today = new Date(2013, 11, 24);
  //console.log(today)
if (timeForMilkAndCookies(new Date(2013, 11, 24))) {
  console.log("It's Christmas Eve!");
} else {
  console.log("It's not Christmas Eve yet.");
}