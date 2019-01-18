import axios from 'axios'
import utils from './utils'


var root = process.env.API_ROOT

export default {
  blink: function (params) {
    var host = root.split('api/')[0]
    var context = 'uuid:' + utils.getUUID()
    var userId = utils.getUserId()
    var sunlandUserId = utils.getSunlandUserId()
    var data = {
      source: 'h5',
      channel: 'wechat-applet',
      context: context,
      opt: userId,
      function: params.func ? params.func : '-',
      action: params.action ? params.action : '-',
      target: params.target ? params.target : '-',
      value: sunlandUserId ? sunlandUserId : '-',
      path: '-',
      pageTrace: '-',
      launchTrace: '-',
    }
    axios({
      url: host + 'blink/log/add',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'source': 'activity_h5',
      },
      params: data,
    })
    .then(function (response) {
      // console.log(response)
      // "{"source":"h5","channel":"wechat-applet","context":"uuid:698b7e23-64be-4159-bd11-34e074f5711a","opt":10,"function":"-","action":"-","target":"-","value":"-","path":"-","pageTrace":"-","launchTrace":"-"}"
    })
    .catch(function (thrown) {
      console.log(thrown)
    })
  }
}