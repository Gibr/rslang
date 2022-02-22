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
  difficulty?: string;
};

export type IWordsData = IWordData[];

export type IUserWordData = {
  id: string;
  _id?: string;
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
  difficulty?: string;
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

export type IUserWord = {
  id: string;
  difficult: string;
  wordId: string;
};
