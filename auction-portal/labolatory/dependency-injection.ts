// Hipotetyczny i MOCNO MOCNO uproszczony model Dependency Injection

class Service { 

}


class Component {
    myService = inject(Service);
}

const providers = [Service];
const intances = [];

function inject<T>(clazz: T) {
    const cc = providers.find(c => c === clazz);

    
}

export {};