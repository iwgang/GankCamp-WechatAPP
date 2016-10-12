function formatSimpleTime(time) {
  let date = new Date(time);
  return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}

module.exports = {
  formatSimpleTime: formatSimpleTime
}
