const ftoc = function(temp) {
  return temp = Math.round((temp-32)*5/9);
}

const ctof = function(temp) {
  return temp = Math.round(9/5*temp+32);
}

module.exports = {
  ftoc,
  ctof
}
