export interface IFlashcard {
  id: string;
  term: string;
  definition: string;
}

export type AddCard = Omit<IFlashcard, 'id'>;
