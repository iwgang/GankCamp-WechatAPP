function formatSimpleTime(time) {
  let date = new Date(time);
  return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}

function formatSimpleTimeFull(time) {
  let date = new Date(time);
  return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
}

module.exports = {
  formatSimpleTime: formatSimpleTime,
  formatSimpleTimeFull: formatSimpleTimeFull
}
