'use strict';
(function () {

    // Agregar funciones a objetos
    let person = {
        firstName: "Juan",
        lastName: "Garcia"
    }
    person.age = 15;
    person.isAdult = function () { return this.age >= 18; };
    // display(person);
})();

(function () {

    //  Objeto Literal - Propiedad abreviada
    function registerUser(firstName, lastName) {
        let person = {
            firstName,
            lastName
        };
        ///display(person);
    }
    registerUser('Juan', 'Garcia');
})();

(function () {

    // Declaracion Metodo literal - Declaracion de metodo abreviado
    // isAdult: function () { return this.age >=18 }
    let person = {
        firstName: "Juan",
        lastName: "Garcia",
        age: 10,
        isAdult() { return this.age >= 18 },
    }
    // display(person);
})();

(function () {
    // Inspección de propiedades. Object.Keys | for
    let person = {
        firstName: "Juan",
        lastName: "Garcia",
        age: 10,
        isAdult() { return this.age >= 18 },
    }

    // display(Object.keys(person));
    for (let propName in person) {
        // display(propName);
    }
})();

// Powerpoint

(function () {

    // *** Asignación de Objetos y Inmutabilidad   
    let person = {
        firstName: "Juan",
        lastName: "Perez",
        age: 10,
        isAdult() { return this.age >= 18 },
    }
    //let person2 = {};
    //Object.assign(person2, person);
    //display(person2);

    let healthStats = {
        heigth: 125,
        weigth: 80
    }
    //Object.assign(person, healthStats);
    //display(person);

    function mergeHealthStats(person, healthStats) {
        return Object.assign({}, person, healthStats);
    }

    let mergedPerson = mergeHealthStats(person, healthStats);
    //display(person);
    //display(mergedPerson);

})();

(function () {

    // *** Uso de funciones con constructores para crear objetos

    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAdult = function () { return this.age >= 21 };
    }

    let juan = new Person('Juan', 'Garcia', 10);
    let claudia = new Person('Claudia', 'Garcia', 15);

    display(juan);
    display(claudia);

    display(juan.isAdult());
    display(claudia.isAdult());

})();