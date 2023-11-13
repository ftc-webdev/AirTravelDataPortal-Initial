/*
  I want a generic function that takes a callback and returns a function that will handle the event
*/

const onEnterKey = (callback) => {
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      callback(e)
    }
  }
  return onKeyDown
}

export {
  onEnterKey
}
