'use strict';
(function () {

    // ¿Qué es un prototipo?
    let myFunction = function () { };
    // display(myFunction.prototype);

    let person = { firstName: 'Juan' };
    //display(person.prototype);
    // display(person.__proto__);

    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.age = 40;

    // display(Person.prototype);
    let juan = new Person('Juan', 'Garcia');
    let luis = new Person('Luis', 'Garcia');
    luis.__proto__.age = 50;
    //display(juan.__proto__); 
    //display(luis.__proto__);
    //display(Person.prototype === juan.__proto__);
})();

(function () {

    // Instancia - propiedades del prototipo
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.age = 40;

    let juan = new Person('Juan', 'Garcia');
    let luis = new Person('Luis', 'Garcia');
    juan.age = 35;
    //display(juan.age);
    //display(juan.__proto__.age);
    //display(luis.hasOwnProperty('age'));
    //display(luis.age);

})();

(function () {

    // cambiando a funciones de prototipos
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.age = 18;

    let juan = new Person('Juan', 'Garcia');
    let luis = new Person('Luis', 'Garcia');

    Person.prototype = { age: 32 };
    // luis.__proto__.age = 32;
    let cris = new Person('Cristina', 'Garcia');
    let pedro = new Person('Pedro', 'Garcia');

    //display(Person.prototype);
    //display(juan.age);
    //display(luis.age);
    //display(cris.age);
    //display(pedro.age);    

})();

(function () {

    // Niveles de Herencia.
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.age = 18;
    let juan = new Person('Juan', 'Garcia');
    //display(juan.__proto__);
    //display(juan.__proto__.__proto__);
    //display(juan.__proto__.__proto__.__proto__);

})();

(function () {

    // Crera mi propio objeto.
    function Person(firstName, lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        //this.fullName = function () {
        //    return this.firstName + ' ' + this.lastName;
        //};
        Object.defineProperty(this, 'fullName', {
            get: function () {
               return this.firstName + ' ' + this.lastName
            }, enumerable:true
        });
    };

    function Student(firstName, lastName, age) {

        Person.call(this,firstName,lastName,age);
        this._courses = [];
        this.enroll = function (id) {
            this._courses.push(id);
        };
        this.getCourses = function () {
            return this.fullName +  ': está inscripto en los cursos ' + this._courses.join(', ')
        };
    };

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    let juan = new Student('Juan', 'Garcia', 40)

    //display(juan);
    //display(juan.__proto__);
    //display(juan.__proto__.__proto__);
    //display(juan.__proto__.__proto__.__proto__);
    //juan.enroll('HTML100');
    //juan.enroll('CSS100');
    //juan.enroll('JS100');

    // display(juan.getCourses());



})();

(function () {

    // Crear objetos con clases
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age);
        }
    };

    let juan = new Student('Juan', 'Garcia', 45);
    display(juan);

})();

