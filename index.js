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
  
  string.toUpperCase() === uppercase
  
  var lowercase = "I can't hear you!"
  
  lowercase.toLowerCase() === lowercase
  
  var mixedcase = "I love you,too."
  
  mixedcase.toLowerCase() === mixedcase
  
}