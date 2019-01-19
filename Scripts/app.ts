// IIFE - Immediately Invoked Function Expression
(function(){
    function Start() {
        const student: objects.Student = new objects.Student(20, "Sarah", "P12345");
        student.saysHello();
        student.studies(); 
    }

    window.addEventListener("load", Start);
})();

