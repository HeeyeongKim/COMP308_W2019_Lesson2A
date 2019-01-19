module objects {
    export interface Greeter{
        saysHello(): void;
    }

    export abstract class Person implements Greeter{
        // PRIVATE INSTANCE VARIABLES
        private _age: number; // underscore means private
        private _name: string;

        // PUBLIC PROPERTIES
        get age(): number {
            return this._age;
        }

        set age(newAge: number) {
            this._age = newAge;
        }

        get name(): string {
            return this._name;
        }

        set name(newName: string) {
            this._name = newName;
        }

        constructor(age: number, name: string) {
            this._age = age; // possible to use this.age, this.name (using getter)
            this._name = name;
        }

        public saysHello(): void {
            console.log(`${this.name} says Hello!`);
        }
    }

    export class Student extends objects.Person {
        // PRIVATE INSTANCE VARIABLES
        private _studentID: string;

        // PUBLIC PROPERTIES
        get studentID(): string {
            return this._studentID;
        }

        set studentID(newStudentID: string) {
            this._studentID = newStudentID;
        }

        constructor(age:number, name:string, studentID:string) {
            super(age, name);
            this.studentID = studentID;
        }

        // PUBLIC METHODS
        public studies(): void{
            console.log(`${this.name} with studentID: ${this.studentID} is studying.`)
        }
    }
}
//let person = new objects.Person(25, "Ellie"); // ver01
//const person: objects.Person = new objects.Person(25, "Ellie");
//person.saysHello();

// IIFE - Immediately Invoked Function Expression
(function(){
    function Start() {
        const student: objects.Student = new objects.Student(20, "Sarah", "P12345");
        student.saysHello();
        student.studies(); 
    }

    window.addEventListener("load", Start);
})();

