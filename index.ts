class Score {}
class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    console.log(this.element.classList);
    this.element.classList.toggle('bg-gray-300');
    console.log(this.element.classList);
  }
}
class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food');

  constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
}
const foods = new Foods();
console.log(foods);