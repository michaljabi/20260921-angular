// UWAGA: naiwna implementacja
// Hipotetyczne acz obruzjące działanie sygnałów "pod spodem"

function input(value: string) {

    return () => value;
}


const mySignal = input('hello');

/// inne instancje (wykorzystanie Factory Function input.)
const mySignal2 = input('hello2');
const mySignal3 = input('hello3');
const mySignal4 = input('hello4');


console.log(mySignal);
console.log(mySignal());

