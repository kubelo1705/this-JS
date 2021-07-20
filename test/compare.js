var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
var person2 = { firstName: 'Kelly', lastName: 'King' };

function say(greeting0, greeting1) {
    console.log(greeting0 + ',' + greeting1 + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['apply', 'Good moring apply']); // => Hello,Good moring Jon Kuperman
say.apply(person2, ['apply', 'Good moring apply']); // => Hello,Good moring Kelly King




var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
var person2 = { firstName: 'Kelly', lastName: 'King' };

function say(greeting0, greeting1) {
    console.log(greeting0 + ',' + greeting1 + ' ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1, 'bind', 'Good morning bind');
var sayHelloKelly = say.bind(person2, 'bind', 'Good morning bind');

sayHelloJon(); // => Hello,Good morning Jon Kuperman
sayHelloKelly(); // => Hello,Good morning Kelly King