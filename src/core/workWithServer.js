const  workWithServer = () => {
  const server_url = 'http://localhost:8000'

  return {
    initUser: () => {
      request(server_url + '/api/current_user/', {
          method: 'GET',
          headers: {
            Authorization: `JWT ${getCookie('token')}`
          },
        },
        (data) => (data),
        () => ({email: ''}))
    },
    getPlatformInfo: (data, successFn) => {
      return requestPost(server_url + '/api/getPlatformInfo/', data, successFn)
    }
  }
}

export default workWithServer()


function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

function request(url, body, successFn, errorFn) {
  fetch(url, body).then(status).then(json).then(successFn).catch(errorFn);
}

function requestPost(url, data, successFn, errorFn) {
  request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${getCookie('token')}`
    },
    body: JSON.stringify(data)
  }, (data) => {
    setCookie('token', data.token)
    return successFn(data)
  }, errorFn)
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

const setCookie = (name, value, props = {'Path':'/', maxAge: 1800}) => {
  let exp = props.expires
  if (typeof exp == "number" && exp) {
    let d = new Date()
    d.setTime(d.getTime() + exp * 1000)
    exp = props.expires = d
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString()
  }

  value = encodeURIComponent(value)
  let updatedCookie = name + "=" + value

  for (let propName in props) {
    updatedCookie += "; " + propName
    let propValue = props[propName]
    if (propValue !== true) {
      updatedCookie += "=" + propValue
    }
  }

  document.cookie = updatedCookie
}



