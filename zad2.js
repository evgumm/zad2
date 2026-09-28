function printMessage(text) {
  console.log(text); 

  const outputBlock = document.getElementById('output');
  outputBlock.innerHTML += `<p>${text}</p>`;
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    printMessage(`${this.name} издаёт звук`);
  }
}

class Cat extends Animal {
  speak() {
    printMessage(`${this.name} говорит: Мяу`);
  }
}
class Dog extends Animal {
  speak() {
    printMessage(`${this.name} говорит: Гав`);
  }

  fetch() {
    printMessage(`${this.name} принёс палку`);
  }
}

const unknownAnimal = new Animal('Зверь');
const cat1 = new Cat('Барсик');
const cat2 = new Cat('Мурка');
const dog = new Dog('Бобик');

const animals = [unknownAnimal, cat1, cat2, dog];

for (const animal of animals) {
  animal.speak();
}
dog.fetch();