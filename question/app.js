let nickname = 'ごっしー';

let age = 28;

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};

let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
];

// Q1
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2
console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。');

// Q3
console.log(user.age);

// Q4
console.log(playerList[1].favorites[1]);

// Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6
function sayHello() {
    console.log('Hello');
}

sayHello()

sayWorld = function() {
    return console.log('world');
};

sayWorld()

// Q7
user.birthday = '2000-09-27';

user.sayHello = function(){
    console.log('Hello!');
};

user.sayHello()

// Q8

calc = {
    add: function(x,y) {
        console.log(x + y);
    },

    subtract: function(x,y) {
        console.log(x - y);
    },

    multiply: function(x,y) {
        console.log(x * y);
    },

    divide: function(x,y) {
        console.log(x / y);
    }
};

calc.add(3,4)
calc.subtract(11,1)
calc.multiply(7,7)
calc.divide(10,2)


// Q9
function remainder(x,y) {
    console.log(x + 'を' + y + 'で割った余りは' + (x % y) + 'です。')
}

remainder(5,3)

// Q10
// 関数内だけスコープが有効なため、関数の外にあるコンソールは変数を参照できないからです。