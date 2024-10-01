function scuberGreetingForFeet(feetNumber){
  // Write your code here! 
if(feetNumber <= 400){
return "This one is on me!"
}
 else if  (feetNumber >= 400 && feetNumber <= 2000){
  return "That will be twenty bucks."
}
 else if (feetNumber > 2000 && feetNumber <= 2500 ){
 return "I will gladly take your thirty bucks."
}
 else {
  return "No can do."
}
}

function ternaryCheckCity(cities){
  // Write your code here!
  return cities === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip){
  case "generous" : 
    return "Thank you so much."
  case "not as generous" : 
    return "Thank you."
  default :  
    return "Bye."
}
}