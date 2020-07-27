const ftoc = function(temp) {
  return temp = Math.round(((temp - 32) * 5 / 9) * 10 ) / 10;
}

const ctof = function(temp) {
  return temp = Math.round((9 / 5 * temp + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
