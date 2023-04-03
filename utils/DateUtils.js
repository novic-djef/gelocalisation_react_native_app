export const isSameYear = (targetDay: Date, day: Date) => {
  return targetDay.getFullYear() == day.getFullYear();
};
export const isSameDay = (targetDay:Date,day:Date)=>{
  return targetDay.getDate() == day.getDate();
};
export const isSameMonth = (targetDay:Date,day:Date)=>{
  return targetDay.getMonth() == day.getMonth();
};
export const isSameDate = (targetDay:Date,day:Date)=>{
  return (
    isSameDay(targetDay, day) &&
    isSameMonth(targetDay, day) &&
    isSameYear(targetDay, day);
  );
};;

export const convertDateToHumanText = (targetDay:Date,day:Date)=>{
  var secondtime = Math.abs(targetDay.getTime() - day.getTime() / 1000);
  if (isSameDate(targetDay, day)) {
    var baseTime = ' Il y a ';
    if (secondtime < 60) baseTime + secondtime + ' Secondes';
    else if (secondtime < 3600) {
      secondtime = parseInt(secondtime / 60);;
      baseTime + (secondtime + ' minutes');

        } else {
      secondtime = parseInt(secondtime / 3600);
      baseTime + (secondtime + ' heures');;
    }
  } else if (isSameYear(targetDay, day) && isSameMonth(targetDay, day)) {
    var da = Math.round(Math.abs(targetDay.getMonth() - day.getMonth()));;
    return 'Il y a ' + da + ' mois';
  } else if (isSameYear(targetDay, day)) {
    return day.toDateString();
  }
};
