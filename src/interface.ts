export interface Scoreable {
  readonly totalScore: number;
  render(): void;
}

export interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}

export interface FoodListable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}