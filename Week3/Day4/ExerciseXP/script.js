//Exercise 1: Simple If/Else Statement

const x = 9;
const y = 6;
 if (x > y) {
    console.log("x is the biggest number");
 } else {
    console.log("y is the biggest number");
 }

//Exercise 2: Chihuahua
Instructions
const newDog = "Chihuahua"
const newDogLength = newDog.length;
console.log(newDogLength);
console.log(newDog.uppercase);
console.log(newDog.lowercase);

if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it/’s my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats");
}


//Exercise 3: Even Or Odd

const userNumber = prompt("Please type your number: ");

const userNumber = prompt("Please type your number: ");
if (userNumber % 2 == 0) {
    console.log("x is an even number");
} else {
    console.log("x is an odd number");
}

const userNumber = prompt("Please type your number: ");
if (!(userNumber % 2)) {
    console.log("x is an even number");
} else {
    console.log("x is an odd number");
}

//Exercise 4: Group Chat
// // ==> is it possible to use switch here?

const onlineUsers = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

console.log(users.length)

if (onlineUsers.length < 0) {
    console.log("no one is online");
} else if (onlineUsers.length == 1) {
    console.log(`${onlineUsers[1]}is online`);
} else if (onlineUsers.length ==2) {
    console.log(`${onlineUsers[1]} and ${onlineUsers[2]} are online`);
} else if (onlineUsers.length > 2) {
    console.log(`${onlineUsers[1]}, ${onlineUsers[2]} and ${onlineUsers.length -2} are online`);
}

