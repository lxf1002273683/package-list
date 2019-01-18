const CryptoJS = require('crypto-js')
const keyStr = ''
const iv = ''

let CBCOptions = {
  iv: CryptoJS.enc.Utf8.parse(iv),
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
}

function decrypt(data) {
  data = data.replace(/-/g, '+').replace(/_/g, '/').replace(/\\r/g, "").replace(/\\n/g, "").replace(/\s/g, "+")
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  var decrypted = CryptoJS.AES.decrypt(
    data,
    key,
    CBCOptions
  );
  return decrypted.toString(CryptoJS.enc.Utf8)
}

function encrypt(data) {
  var dataStr = CryptoJS.enc.Utf8.parse(data);
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  var encrypted = CryptoJS.AES.encrypt(
    dataStr,
    key,
    CBCOptions
  )
  return encrypted.toString().replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

export default {
  decrypt,
  encrypt,
}