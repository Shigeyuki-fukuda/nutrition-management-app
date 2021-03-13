interface Scoreable {
  readonly totalScore: number;
  render(): void;
}

interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}

interface FoodListable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}