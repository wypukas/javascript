console.log(99)
// eilutes komentaras

/*
komentaras viso bloko
 */

// Kintamieji ju tipai

//1 String  (zodis)
var name = 'Zilvinas';
console.log(name)

//2 Number (skaicius)
var age = 50;
console.log(age)

//3 boolean
var cool = true;
console.log(true)

//4 null
var money = null;
console.log(money)

//5 undefined (neapibreztas)
var education;
console.log(education)

// error not defined (nerastas)
// console.log(car)

// Kintamuju aritmetika
// + - / * %-modulus(liekana)
var a = 5;
var b = 10;

// var sum = a+b;
console.log(a+b);
console.log(b%a)

// Kintamuju mutacijos
age=20;
console.log('Mano vardas yra '+name+' ir mano amzius yra '+age);

//ES6 sintakse
console.log(`Mano vardas yra ${name} ir mano amzius yra ${age}`)

var ka = 10;
var kb = 5;
// paskaiciuoti stac. plota ir priskirti ji kinta area
// taip pat su perimeter
// i konsole isvedu uzrasa staciakampio plotas yra

var getArea = ka*kb
console.log(`Stac. plotas yra ${getArea}`)

//Math operatorius
console.log(Math.PI);
console.log(Math.sqrt(25));
var rand = Math.random()*100;
r = Math.ceil(rand); // round ir ceil
console.log(r);

var i = 2.1489;
console.log( i.toFixed(2))

// Salygos
// if(salyga){ vykdomasis blokas{
// > daugiau
// < maziau
// = priskirimas
// ==  palyginimas
// === palygina tipa ir verte
// != nelygu
// ! ne
// >= daugiau arba lygu
// <= maziau arba lygu

var m = 10;
var k = '10';

if(m<k){
    console.log(`${m} yra maziau uz ${k}`)
}else if(m > k){
    console.log(`${m} yra daugiau uz ${k}`)
}else if(m==k){
    console.log(`skaiciai ${m} ${k} yra lygus`)
}

else{
    console.log('ivedei nesamone')
}

// typeof(kintamasis)

// ND
// deklaruoti kint. krastineA, krastineB
// dek. kint area kuris saugotu statciakampio/trikampio plota.
// dek kint per kuris saugotu sio stat.tr. perimetra
// rezultatus graziai atvaizduoti konsolej

// Taip pat padaryti su dar vienu nauju trikampiu

// Su salyga palyginti kuris trikampis yra didesnis a) plotas b)per
// Rezultatus atvaizduoti konsolej

// Hard: sukurti du stat.tr. su atsitiktinio dydzio krast.
// Palyginti ju plotus, perimetrus

var krastineA = 10;
var krastineB = 20;

var getPlotas = krastineA * krastineB;
var getPerimetras = (krastineB + krastineA) * 2;
console.log(`Stac. plotas yra ${getPlotas} , perimetras ${getPerimetras}`);


var krastineC = Math.random()*100;
var krastineD = Math.random()*100;
var krastineB = Math.random()*100;
var getPlotas = krastineC * krastineD;
getPlotas = Math.round(getPlotas);
console.log(`Plotas yra ${getPlotas}`);
