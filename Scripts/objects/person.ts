module objects {
    export abstract class Person {
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
}