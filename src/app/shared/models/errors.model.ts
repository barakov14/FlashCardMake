export interface IErrors {
  error: {
    code: number;
    errors: IErrorsMessages[];
  };
}

export interface IErrorsMessages {
  message: string;
  domain: string;
  reason: string;
}
