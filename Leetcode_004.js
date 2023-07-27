/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
  let kelvin = Math.round(10000*(celsius + 273.15))/10000
  let faren = Math.round(10000*((celsius*1.80)+32))/10000
  return [kelvin, faren]
};