function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var result = "none";
  var lowercase = "I can't hear you!";
  string.toLowerCase() === lowercase;
  result = lowercase;
  
  var uppercase = "YES INDEED!";
  string.toUpperCase() === uppercase;
  result = uppercase;
  
  var mixedcase = "I love you, Grandma.";
  string.toLowerCase() === mixedcase;
  result ="I love you, too!";
  
  return result;
}