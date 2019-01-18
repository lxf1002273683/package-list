//地址参数字典
const urlQuery = function () {
  var url = window.location.href
  var str = url.substring(url.lastIndexOf('?') + 1)
  var tmp = {}
  str.replace(/([^?&=]+)=([^?&]+)/g, function (res, $1, $2) {
    var name = decodeURIComponent($1)
    var val = decodeURIComponent($2)
    tmp[name] = val
  })
  return tmp
}



//随机字符串
const randomStr = function (randomFlag, min, max) {
  var str = "",
    range = min,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
    var pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str
}

const pxtorem = function (num) {
  return num / 75 * 1
}


export default {
  pxtorem: pxtorem,
  urlQuery: urlQuery,
  randomStr: randomStr,
}