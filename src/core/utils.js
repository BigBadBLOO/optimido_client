import React, {useState} from 'react'

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
  fetch(url, body)
    .then(status)
    .then(json)
    .then(successFn)
    .catch(errorFn);
}

function requestPost(url, data, successFn, errorFn) {
   fetch(url, {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(data)
   })
    .then(status)
    .then(json)
    .then(successFn)
    .catch(errorFn);
}
export default request
export {requestPost}

