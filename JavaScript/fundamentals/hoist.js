// 1.
console.log(hello);                                   
var hello = 'world';                                 

/* 
var hello;
console.log(hello);                                   
hello = 'world';  
logs undefined    
*/

// 2.

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/* 
var needle;
function test(){
    var needle;
    var needle = 'magnet';
    console.log(needle);
}
var needle = 'haystack';
test();

PRINTS magnet
*/

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/* 
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

PRINTS only okay
*/

// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/* 
var food;
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
food = 'chicken';
console.log(food);
eat();

PRINTS chicken, half-chicken
*/

// 5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

/* 
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);

PRINTS error
*/

// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/* 
var genre;
function rewind() {
    genre = "rock";
    var genre;
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

PRINTS undefined, rock, r&b, disco
*/


