export type IWordData = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
};

export type IWordsData = IWordData[];

export type IUserWordData = {
  _id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
  userWord?: {
    difficulty?: string;
  };
};

export type IUserWordsData = IUserWordData[];

export type IUserWordRequestBody = {
  difficulty: string;
  optional?: {
    new?: boolean;
    answers?: string[];
  };
};

export interface IQueryParams {
  key?: string;
  value?: number | string;
}
