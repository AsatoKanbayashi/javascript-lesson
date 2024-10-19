// 基礎編問題
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

let total = 0;

// Q1
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2
console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。');

// Q3
console.log(user.age);

// Q4
console.log(playerList[1].favorites[1]);

// Q5
for(let num = 0; num < playerList.length; num++) {
    total = total + playerList[num].age;
};
console.log(total / playerList.length);

// Q6
function sayHello() {
    console.log('Hello');
}

sayHello()

sayWorld = function() {
    console.log('world');
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

// 発展編問題
// Q1
let random =Math.floor(Math.random() * 10);
console.log(random);

// Q2
setTimeout(function() {
    console.log('Hello World!');
}, 3000);

// Q3
function question3() {
   let num = Math.random();

    if(num >= 0) {
        console.log('num is greater than 0');
    } else if (num <= 0) {
        console.log('num is less than 0');
    } else if (num === 0) {
        console.log('num is 0');
    }
}

question3()

// Q4

let numbers = [];
for (let num = 0; num <100; num++) {
    numbers.push(num);
}

console.log(numbers);

// Q5
function question5() {
    let mixed = [4, '2', 5, '8', '9', 0, 1];
    for (let num = 0; num < mixed.length; num++){
        if(typeof(mixed[num]) !== 'number') {
            console.log('not number');
        }else if(mixed[num] % 2 == 0) {
            console.log('even');
        }else if(mixed[num] % 2 == 1) {
            console.log('odd');
        }
    }
}

question5()