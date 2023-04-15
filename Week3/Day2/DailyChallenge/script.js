//Exercise 1:

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift() //['Apples', 'Oranges', 'Blueberries']
fruits.sort() //['Apples', 'Blueberries', 'Oranges']
fruits.push("Kiwi") //['Apples', 'Blueberries', 'Oranges', 'Kiwi']
fruits.splice(0,1) //['Blueberries', 'Oranges', 'Kiwi']
fruits.reverse() //['Kiwi', 'Oranges', 'Blueberries']

Exercise 2:

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
Access and then console.log “Oranges”.
const orangeArray = moreFruits[1][1] //['Oranges']
const orangeValue = moreFruits[1][1][0] // Oranges
