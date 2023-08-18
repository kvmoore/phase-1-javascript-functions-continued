
function saturdayFun(activity = "roller-skate"){

  return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();



const mondayWork = function (willDo = "go to the office") {

    return (`This Monday, I will ${willDo}.`);
} 
mondayWork();



function wrapAdjective(flair = "*"){
  return function (compliment = "a hard worker"){
    return `You are ${flair}${compliment}${flair}!`;


  }
}

//wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"


