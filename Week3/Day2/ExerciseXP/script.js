//Exercise 1

const favouriteFood = "avocado toast";
const favouriteMeal = "breakfast";
console.log(`I eat ${favouriteFood} at every ${favouriteMeal}`);

// Exercise 2
//Part I

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}.`;
console.log(myWatchedSeriesSentence);

//Part II

// Why I cant do like this? ===>   const newListOfSeries = myWatchedSeries.splice(2, 1, "friends")

myWatchedSeries[2] = "friends";
myWatchedSeries.push("hundred");
myWatchedSeries.unshift("attack of the titans");
myWatchedSeries.splice(1, 1)
console.log(myWatchedSeries[1]); // ==> Why it the exercise it's written:"Console.log the third letter of the series “money heist" if it's index 1 and it's already not the fird one to count?
console.log(myWatchedSeries);

//Exercise 3 : The Temperature Converter

const temperatureInCelsius = 28;
const temperatureInFahrenheit = Number(temperatureInCelsius / 5 * 9 + 32);
console.log(`${temperatureInCelsius}°C is ${temperatureInFahrenheit}°F`);


//Exercise 4 : Guess The Answers #1

Using the code below:

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction:55 - because a and b are numbers
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23 - a and b are numbers and a was reassigned to 2 as it's not a constant variable
    // Actual:23
    //What will be the outcome of a + b in the first expression ? 
    => 55
    //What will be the outcome of a + b in the second expression ?
    => 23
    //What is the value of c?
    => undefined
    
    //Analyse the code below, what will be the outcome?
    console.log(3 + 4 + '5');
    => 75 - as 3 and 4 are numbers the sum will be 7. and '5' is a string, so it will concat 7 and '5' to a string '75'
    
//Exercise 5 : Guess The Answers #2

//What is the output of each of the expressions below?

typeof(15)
// Prediction: number
// Actual:number

typeof(5.5)
// Prediction: number
// Actual:number

typeof(NaN)
Prediction: NaN
Actual: number - whyyyyy?

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: true 
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers - strings were concatenated together
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN - maybe we can not subtract the strings or anything exept from numbers?
// Actual: NaN

"1" + "3"
// Prediction: 13 - as numbers are strings, so they were concatenated 
// Actual: 13

"1" - "3"
Prediction: NaN - maybe we can not subtract the strings or anything exept from numbers?
Actual: -2 -why?

"johnny" + 5
// Prediction: johnny5 - 5 was converted to a string and concatenated with first string
// Actual:johnny5

"johnny" - 5
// Prediction: NaN - maybe we can not subtract the strings or anything exept from numbers?
// Actual: NaN

99 * "hello"
// Prediction: NaN - maybe we can not multiply the strings or anything exept from numbers?
// Actual: NaN

1 != 1
// Prediction: false - != equal to "not equal", but 1 equal to 1, so this expression is false
// Actual: false

1 == "1"
// Prediction: true as == will compare only the values
// Actual:true

1 === "1"
// Prediction: false - as === will compare both values and types 
// Actual:false


//Exercise 6 : Guess The Answers #3

What is the output of each of the expressions below?


5 + "34"
// Prediction:534 - its concatenation. 5 will be converted to a string and concatensted with '34'
// Actual:

5 - "4"
// Prediction: 1 - as its substraction, '4' will be converted to a number
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript" - concatenation of two strings
// Actual:

" " + " "
// Prediction: "  " - concatenation of two strings
// Actual: "  "

" " + 0
// Prediction: " 0" - zero will be converted to a string and concatenated with first one
// Actual: " 0"

true + true
// Prediction: 2 - true equal to 1, so here we have concatenation and browser will try to convert it to numbers, so we have 1 + 1 = 2
// Actual: 2

true + false
// Prediction: 1 - true equal to 1 and false is equal to 0, so here we have concatenation and browser will try to convert it to numbers, so we have 1 + 0 = 1
// Actual: 1

false + true
// Prediction: 1 - same as above
// Actual:1

false - true
// Prediction: -1 
// Actual: -1

!true
// Prediction: false - "!" means "not", so we have not true = false
// Actual:

3 - 4
// Prediction: -1 - as it's numbers, so we can subtract them 
// Actual:

"Bob" - "bill"
// Prediction: NaN - as we can not subtract the strings, because they are not numbers
// Actual:NaN

