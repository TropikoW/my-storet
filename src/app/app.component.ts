import { Component } from '@angular/core';

import { Scroll } from '@angular/router';

import { Products } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'my-storet';
// }
// export class AppComponent {
//   name = 'Jovanny';
//   age = 22;
//   img = 'https://images.unsplash.com/photo-1694902304153-ffed849ca876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzAzOTk3Mw&ixlib=rb-4.0.3&q=80&w=1080';
//   btnDisabled = false;
//   person = {
//     name : 'jovanny',
//     lastname : 'ruiz',
//     age : 22,
//     widthImage : 300
//   };
//   tooglebtn() {
//     this.btnDisabled = !this.btnDisabled;
//   };
//   toogleage() {
//     this.person.age += 1;
//   };
//   divScroll(event : Event) {
//     const element = event.target as HTMLElement;
//     console.log(element.scrollTop);
//   };
//   changeName(event : Event) {
//     const element = event.target as HTMLInputElement;
//     this.person.name = element.value;
//     element.value
//   };
// };
export class AppComponent {
  document = {
    title : 'Titulo',
    dParagraph : 'Parrafo',
    age : 18,
    name : ['Jovanny','Roberto','Julian']
  };
  person = {
    name : 'Jovanny',
    lastname : 'Ruiz',
    age : 23
  };
  products : Products[] = [
    {name : 'Nombre cualquier',
    price : 10,
    image : 'https://source.unsplash.com/random'},
    {name : 'Nombre cualquier',
    price : 10,
    image : 'https://source.unsplash.com/random'},
    {name : 'Nombre cualquier',
    price : 10,
    image : 'https://source.unsplash.com/random'},
    {name : 'Nombre cualquier',
    price : 10,
    image : 'https://source.unsplash.com/random'},
    {name : 'Nombre cualquier',
    price : 10,
    image : 'https://source.unsplash.com/random'},
    {name : 'Nombre cualquier',
    price : 10,
    image : 'https://source.unsplash.com/random'},
    {name : 'Nombre cualquier',
    price : 10,
    image : 'https://source.unsplash.com/random'},
    {name : 'Nombre cualquier',
    price : 10,
    image : 'https://source.unsplash.com/random'},
  ];

  newName = '';
  changeTitle(event : Event) {
    const element = event.target as HTMLInputElement;
    this.document.title = element.value;
  }
  WritingParagraph(event : Event) {
    const element = event.target as HTMLInputElement;
    this.document.dParagraph = element.value;
  }
  addName() {
    this.document.name.push(this.newName);
    this.newName = '';
  };
  deleteName(index : number) {
    this.document.name.splice(index,1)
  };
}
