// TODO: short form? e.g. #fff
function hex2rgb(hex) {
  return [
    parseInt(hex.substring(1,3), 16),
    parseInt(hex.substring(3,5), 16),
    parseInt(hex.substring(5,7), 16)
  ];
}

module.exports = hex2rgb;