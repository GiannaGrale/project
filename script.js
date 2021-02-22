"use strict";

const str = "tEst";

//console.log(str.length);
//console.log(str[2]);
//console.log (str.toUpperCase());
console.log(str.toLowerCase())

const fruit = ("some fruit");
//console.log (fruit.indexOf("fruit"))
console.log(fruit.indexOf("g"))

const logg = ("Hello World")
//console.log (logg.slice(6,11))
console.log(logg.substring(6, 11))
console.log(logg.substr(6, 5))

const num = 12.5
console.log(Math.round(num));


const anotherNum = "12.3px";
//console.log (parseInt(anotherNum));
console.log(parseFloat(anotherNum));


function first() {
    setTimeout (function() {
        console.log(1);
    }, 600);
}


function second (){
    console.log (2);
}

first ();
second();


function learnJS (lang, callback){
    console.log (`I learn: ${lang}`);
    callback()
};

function done (){
   console.log ("I have done this!");

};

learnJS("JavaScript", done);