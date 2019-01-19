// IIFE - Immediately Invoked Function Expression
(function () {
    function Start() {
        var student = new objects.Student(20, "Sarah", "P12345");
        student.saysHello();
        student.studies();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map