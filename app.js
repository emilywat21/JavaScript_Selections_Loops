console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
/*for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}*/

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

/*for(let int = 1; int <= 100; int++) {
    console.log(int);
    if(int % 3 == 0) {
        console.log("FIZZ") }
    else{
        if(int % 5 == 0){
        console.log("BUZZ")
        }}
        if(int % 3 == 0 && int % 5 == 0) {
        console.log("FIZZBUZZ")
            }
}*/

//EXERCISE 3 -----
console.log("EXERCISE 3:\n==========\n");

/*let int = 1;

while(int <= 100){
    if(int % 3 == 0) {
        console.log("FIZZ") }
    else{
        if(int % 5 == 0){
        console.log("BUZZ")
        }}
        if(int % 3 == 0 && int % 5 == 0) {
        console.log("FIZZBUZZ");
            }
    int++;
}
*/

/*let int = 1;

do {
    if(int % 3 == 0) {
        console.log("FIZZ") }
    else{
        if(int % 5 == 0){
        console.log("BUZZ")
        }}
        if(int % 3 == 0 && int % 5 == 0) {
        console.log("FIZZBUZZ");
            }
    int++;
}while(int <= 100);
*/

/*let i = 1;

while(i < 100){
    if(i % 2 == 1){
        console.log(i);
    }
    else {
        continue;
    }
    i+=2;
}
*/

/*let i = 1;

do{
    if(i % 2 == 1){
        console.log(i);
    }
    else {
        continue;
    }
    i+=2;
}
while(i<100);
*/

//EXERCISE 4 -----
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 1; i<= n; i++){
    if(i == value){
        console.log(`Found ${value}!`);
        break;
    }
    if(i == n){
        console.log(`Did not find ${value} within 1-${n}.`);
    }
}
