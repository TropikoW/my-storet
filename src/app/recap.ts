const username:string | number = 'Tropik';

const sum = (a:number,b:number) => {
  return a + b;
};
sum(1,2);

// class Person{
//   private name:string;
//   age:number;
//   constructor(name:string,age:number){
//     this.name = name;
//     this.age = age;
//   };
// };
class Person{
  constructor(public name:string,private age:number){};
};

const jovanny = new Person('Jovanny',23);

jovanny.name;
