// UWAGA: naiwna implementacja
// Hipotetyczne acz obruzjące działanie sygnałów "pod spodem"

function input(value: string) {

    return () => value;
}


const mySignal = input('hello');


console.log(mySignal);
console.log(mySignal());

