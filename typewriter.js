const greetings = document.querySelector("#greetings");

const typewriter = new Typewriter(greetings, {
  loop: true
});


typewriter.typeString('Hello')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Bonjour')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Hola')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Ciao')
    .pauseFor(2500)
    .start();