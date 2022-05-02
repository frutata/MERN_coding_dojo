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

// 7.
var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

/* 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

PRINTS san jose, seattle, burbank, san jose
*/


// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
    dojo.hiring = true;
    }
    else if(dojo.students <= 0){
    dojo = "closed for now";
    }
    return dojo;
}

/* 
function makeDojo(name, students){
    const dojo;
    dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

PRINTS error
*/