function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = "hello"
  var uppercase = "HELLO"
  var mixedcase = "I love you, Grandma."
  if (string.toLowerCase() === lowercase) {
    return 'YES INDEED!'
} else if (string.toUpperCase() === uppercase) {
  return "I can't hear you!"
} else if (string === mixedcase) {
  return "I love you, too."
}
}
