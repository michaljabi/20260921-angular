import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import anyWillWork, { MY_CONSTANT, MyExample, tuneTheRadio } from '../labolatory/typescript-exports'
// import anyWillWork from '../labolatory/typescript-exports'


// Drobna zmiana obrazująca zmianę checksumy w pliku w dist (main-***.js)
console.log(anyWillWork + "?");

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
