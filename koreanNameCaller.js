// my age and my gender
let myAge = 26;
let myGender = 'male';

// variables that contains korean name
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// convert brothers and sissters in korean
function whatShouldICallYou(yourAge, yourGender) {
  if (myAge > yourAge && yourGender == 'male') {
      return callYoungerBrother;  
  } else if (myAge > yourAge && yourGender != 'male') {
      return callYoungerSister;
  } else if (myAge < yourAge && yourGender == 'male') {
      return callOlderBrother;
  } else if (myAge < yourAge && yourGender != 'male') {
      return callOlderSister;
  } else {
      return callFriend;
  }
}

// test code
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);