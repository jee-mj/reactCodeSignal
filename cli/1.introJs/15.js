// TODO: Create a class named 'Dog' with a constructor to set the dog's name
class Dog {
  constructor(name) {
    this._name = name;
  }
  //       and a getter method to get the dog's name
  get name() {
    return this._name;
  }
}
// TODO: Create an instance of the Dog class with the name 'Buddy'
buddy = new Dog('Buddy');

// TODO: Select the span element by its id and set its text content to the dog's name using the getter
document.querySelector('#dogName').textContent = buddy.name;

// fourMoreToGo I need A brake