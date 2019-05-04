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
  var lowercase = "I can't hear you!";
  string.toLowerCase() === lowercase;
  return lowercase;
  
  var uppercase = "YES INDEED!";
  string.toUpperCase() === uppercase;

  
  var mixedcase = "I love you, Grandma.";
  string.toLowerCase() === mixedcase;
  
  return string;
}