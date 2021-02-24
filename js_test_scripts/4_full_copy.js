< script >


    // 1. Simple object
    let man = {
        name: "John",
        age: 28,
    };

let manFullCopy = {
        ...man,
};
// console.log(manFullCopy);

// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers];
// console.log(numbersFullCopy);

// 3. Object inside an object
let man1 = {
        name: "John",
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
    },
};

let man1FullCopy = {
        ...man1,
        mother: {
        ...man1.mother
    },
};
// console.log(man1FullCopy);

// 4. Array of primitives inside an object
let man2 = {
        name: "John",
    age: 28,
    friends: ["Peter", "Steven", "William"],
};


let man2FullCopy = {
        ...man2,
        friends: [...man2.friends],
};
// console.log(man2FullCopy);

// 5 Array of objects
let people = [{
        name: "Peter",
        age: 30
    },
    {
        name: "Steven",
        age: 32
    },
    {
        name: "William",
        age: 28
    },
];

let peopleFullCopy = [...people.map((el) => ({
        ...el
    }))];
// peopleFullCopy[0].name = 'ivan'
// console.log(peopleFullCopy);
// console.log(people);

// 6 Array of objects inside object
let man3 = {
        name: "John",
    age: 28,
    friends: [{
        name: "Peter",
            age: 30
        },
        {
        name: "Steven",
            age: 32
        },
        {
        name: "William",
            age: 28
        },
    ],
};

let man3FullCopy = {
        ...man3,
        friends: man3.friends.map((el) => ({
        ...el
    })),
};
// console.log(man3FullCopy);
// console.log(man3)

// 7 Object inside an object, inside an object
let man4 = {
        name: "John",
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
        position: "doctor",
            experience: 15,
        },
    },
};

let _man4FullCopy = {
        ...state,
        mother: {
        ...man4.mother,
        work: {
        ...man4.mother.work
    }
    }
}


let man4FullCopy = {
        ...man4,
        mother: {
        ...man4.mother,
        work: {
        ...man4.mother.work
    },
    },
};
// man4FullCopy.mother.work.position = 'director'
// console.log(man4FullCopy);
// console.log(man4)

// 8 Array of objects inside object -> object
let man5 = {
        name: "John",
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
        position: "doctor",
            experience: 15,
        },
        parents: [{
        name: "Kevin",
                age: 80
            },
            {
        name: "Jennifer",
                age: 78
            },
        ],
    },
};

let _man5FullCopy = {
        ...state,
        mother: {
        ...man5.mother,
        work: {
        ...man5.mother.work
    },
        parents: man5.mother.parents.map(el => ({
        ...el
    }))
    }
}


let man5FullCopy = {
        ...man5,
        mother: {
        ...man5.mother,
        work: {
        ...man5.mother.work
    },
        parents: man5.mother.parents.map((el) => ({
        ...el
    })),
    },
};
man5FullCopy.mother.parents[0].name = "ivan";
// console.log(man5FullCopy);
// console.log(man5)
// 9 Object inside an object -> array -> object ->  object
let man6 = {
        name: "John",
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
        position: "doctor",
            experience: 15,
        },
        parents: [{
        name: "Kevin",
                age: 80,
                favoriteDish: {
        title: "borscht",
                },
            },
            {
        name: "Jennifer",
                age: 78,
                favoriteDish: {
        title: "sushi",
                },
            },
        ],
    },
};
let man6FullCopy = {
        ...state,
        mother: {
        ...man6.mother,
        work: {
        ...man6.mother.work
    },
        parents: man6.mother.parents.map(el => ({
        ...el,
        favoriteDish: {
        ...el.favoriteDish
    }
        }))
    }
};

let man6FullCopy = {
        ...man6,
        mother: {
        ...man6.mother,
        work: {
        ...man6.mother.work
    },
        parents: man6.mother.parents.map((el) => {
            return {
        ...el,
        favoriteDish: {
        ...el.favoriteDish
    },
            };
        }),
    },
};
man6FullCopy.mother.parents[0].favoriteDish.title = "12345";
// console.log(man6FullCopy);
// console.log(man6);
//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
        name: "John",
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
        position: "doctor",
            experience: 15,
        },
        parents: [{
        name: "Kevin",
                age: 80,
                favoriteDish: {
        title: "borscht",
                    ingredients: [{
        title: "beet",
                            amount: 3
                        },
                        {
        title: "potatoes",
                            amount: 5
                        },
                        {
        title: "carrot",
                            amount: 1
                        },
                    ],
                },
            },
            {
        name: "Jennifer",
                age: 78,
                favoriteDish: {
        title: "sushi",
                    ingredients: [{
        title: "fish",
                            amount: 1
                        },
                        {
        title: "rise",
                            amount: 0.5
                        },
                    ],
                },
            },
        ],
    },
};

let man7FullCopy = {
        ...man7,
        mother: {
        ...man7.mother,
        work: {
        ...man7.mother.work
    },
        parents: man7.mother.parents.map(el => {
            return {
        ...el,
        favoriteDish: {
        ...el.favoriteDish,
        ingredients: el.favoriteDish.ingredients.map(obj => ({
        ...obj
    }))
                }
            }
        })
    },
}
man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].title = 33333
console.log(man7FullCopy);
console.log(man7);

<
/script>