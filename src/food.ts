import { Foodable } from './interface';
import { Score } from './score';
export class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    // tailwind cssでスタイルを変えるため
    this.element.classList.toggle('bg-gray-200');
    // active状態の要素を区別するため
    this.element.classList.toggle('food--active');
    const score = Score.getInstance();
    score.render();
  }
}