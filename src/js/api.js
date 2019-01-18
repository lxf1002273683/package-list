import http from './networking/http'
import blink from './blink/blink'


//日志
const blinkApi = function (data) {
  blink.blink(data)
}

export default {
  blink: blinkApi,
}