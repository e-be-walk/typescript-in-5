function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
//in order to compile the above code run 'tsc greeter.ts' in command line
