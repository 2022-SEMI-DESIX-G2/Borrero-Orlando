//// PROBLEMA 1 //////////////////////////////////////////
const doubleBasePalidrome = s => {
  const entrynum = 0;
  const lastnumb = s.length - 1;
  while (entrynum < lastnumb) {
    if (s.charAt(entrynum) != s.charAt(lastnumb)) {
      break;
    }
    ++entrynum;
    --lastnumb;
  }

  if (entrynum < lastnumb) {
    console.log("Problema 1 es palindromo :");
    return true;
  } else {
    console.log("Problema 1 es palindromo : ");
    return false;
  }
};
var n = 58;
var biNumber = n.toString(2);
console.log(doubleBasePalidrome(biNumber));
/////////////////////////////////////////////////////////
// ######## PROBLEMA 2

const countCharacter = text => {
  var result = text.trim().split("");
  const repeatedCharacters = {};
  result.forEach(letter => {
    repeatedCharacters[letter] = (repeatedCharacters[letter] || 0) + 1;
  });
  console.log("Problema 2", "\n");
  for (let letter in repeatedCharacters) {
    console.log(`${letter} = ${repeatedCharacters[letter]}`);
  }
};
countCharacter("AABBBACAA");

////////////// PROBLEMA 3
const bisiesto = year => {
  {
    (0 == year % 4 && 0 != year % 100) || 0 == year % 400
      ? console.log(`Problema 3 el año ${year} es bisiesto`)
      : console.log(`Problema 3 el año ${year} no es bisiesto`);
  }
};

bisiesto("2024");
//////////////////////////////////////////////////////////
// PROBLEMA 4
const sumPrime = numero => {
  var i,
    j,
    isPrime = 0,
    store = 0;
  for (i = 1; i <= numero; i++) {
    isPrime = 1;
    for (j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = 0;
        break;
      }
    }
    if (isPrime == 1) {
      store = store + i;
    }
    //console.log("la suma del numero es " + store);
  }
  console.log("Problema 4:", "\n", "la suma del numero es " + store);
};

sumPrime(7);
