import { useView } from 'aurelia-framework'

@useView('Home/GetTemplate')
export class HomeApp {
  message: string;

  constructor() {
    this.message = 'Hello from Aurelia!';
  }
}
