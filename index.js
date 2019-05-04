function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase = "YES INDEED!"
  
  return string.toUpperCase() === uppercase
  
  var lowercase = "I can't hear you!"
  
  return string.toLowerCase() === lowercase
  
  var mixedcase = "I love you,too."
  
  return string.toLowerCase() === mixedcase
  
}