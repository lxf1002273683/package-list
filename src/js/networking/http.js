import axios from 'axios'

var root = process.env.API_ROOT

export default {
  root: root,
  post: function (path, params) {
    return new Promise((resolve, reject) => {
      axios({
          url: root + path,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'channel': 'activity',
            'source': 'h5',
          },
          data: params,
        })
        .then(function (response) {
          if (response.data.code === 200) {
            var data = response.data.data
            resolve(data)
          } else {
            reject(response.data)
          }
        })
        .catch(function (thrown) {
          reject(thrown)
        })
    })
  },
  post_form: function (path, params) {
    return new Promise((resolve, reject) => {
      axios({
          url: root + path,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'channel': 'activity',
            'source': ' h5',
          },
          params: params,
        })
        .then(function (response) {
          if (response.data.code === 200) {
            var data = response.data.data
            resolve(data)
          } else {
            reject(response.data)
          }
        })
        .catch(function (thrown) {
          reject(thrown)
        })
    })
  },
  post_proxy: function (path, param, url, type) {
    return new Promise((resolve, reject) => {
      axios({
          url: root + path,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'channel': 'activity',
            'source': 'h5',
          },
          data: {
            'param': param,
            'requestUrl': url,
            'requestWay': type
          },
        })
        .then(function (response) {
          if (response.data.code === 200) {
            var data = response.data.data
            resolve(data)
          } else {
            reject(response.data)
          }
        })
        .catch(function (thrown) {
          reject(thrown)
        })
    })
  },
}