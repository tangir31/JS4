let arr = [
    {
        name: "Sardor ml",
        age: 15,
        isMarried: false
    },
    {
        name: "Sardor bl",
        age: 15,
        isMarried: true
    },
    {
        name: "allaayor",
        age: 5,
        isMarried: false
    },
    {
        name: "Tangir",
        age: 15,
        isMarried: true
    },
    {
        name: "Ruslan",
        age: 15,
        isMarried: false
    },
    {
        name: "ismail",
        age: 12,
        isMarried: false
    },
    {
        name: "Daler",
        age: 12,
        isMarried: false
    },
]

let Married = [arr.filter((person) => person.isMarried)];
let Single = [arr.filter((person) => !person.isMarried)];

console.log(Married)
console.log(Single)

let average_age = 0

arr.forEach(person => {
    average_age += person.age
})

average_age = average_age / arr.length

console.log(average_age);