export interface IAddFlashCardModule {
  name: string;
  description: string;
  cards: IFlashcard[];
}

export interface IFlashcard {
  term: string;
  definition: string;
}
